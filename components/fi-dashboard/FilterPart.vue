<template>
  <div class="flex justify-between  root pb1">
    <div class="flex  justify-start search-input-field">
      <b-input
        v-model="searchByString"
        class="b-input"
        placeholder="Search by entity name or application ID"
        type="search"
        icon="magnify"
        icon-clickable
      />
    </div>
    <div class="selectable">
      <b-select
        v-model="selectCreatedByModel"
        expanded
      >
        <option v-for="(selectValue) in selectCreatedByOptions" :key="selectValue.id" :value="selectValue.value">
          {{ selectValue.label }}
        </option>
      </b-select>
    </div>
    <div v-if="!isClosed" class="selectable">
      <b-select
        v-model="selectStatusModel"
        expanded
      >
        <option v-for="(selectValue) in selectStatusOptions" :key="selectValue.id" :value="selectValue.value">
          {{ selectValue.label }}
        </option>
      </b-select>
    </div>
  </div>
</template>

<script lang="ts">

import {
  createComponent,
  ref,
  watch
} from '@vue/composition-api'
import { debounce } from 'lodash'
import guid from '~/utils/guid'
import { ISelectOptions } from '~/components/fi-dashboard/IFiDashboard'
import {
  getAllPossibleApplicationCreatedAt,
  getAllPossibleApplicationStatus
} from '~/utils/api/fi-applications'

const SELECT_ALL_STATUS = {
  id: 'data-v-0',
  label: 'All Status',
  value: 'All Status'
}
const SELECT_ALL_CREATED_BY = {
  id: 'data-v-0',
  label: 'Created by',
  value: 'Created by'
}

export default createComponent({
  name: 'FilterPart',
  props: {
    isClosed: {
      type: Boolean,
      default: false
    }

  },
  setup ({ isClosed }, { emit }) {
    const selectStatusModel = ref(SELECT_ALL_STATUS.value)
    const selectStatusOptions = ref<ISelectOptions[]>([SELECT_ALL_STATUS])

    const selectCreatedByModel = ref(SELECT_ALL_CREATED_BY.value)
    const selectCreatedByOptions = ref<ISelectOptions[]>([SELECT_ALL_CREATED_BY])

    const searchByString = ref('')

    if (!isClosed) {
      getAllPossibleApplicationStatus().then((data: string[]) => {
        selectStatusOptions.value = [SELECT_ALL_STATUS, ...(data.map(value => ({
          label: value,
          value,
          id: guid()
        })))]
      })
    }

    getAllPossibleApplicationCreatedAt(isClosed ? 'Closed' : undefined).then((data: string[]) => {
      selectCreatedByOptions.value = [SELECT_ALL_CREATED_BY, ...(data.map(value => ({
        label: value,
        value,
        id: guid()
      })))]
    })

    watch([selectCreatedByModel, selectStatusModel], ([createdBy, status]) => {
      emit('filter-changed', {
        createdBy: createdBy === SELECT_ALL_CREATED_BY.value ? null : createdBy,
        status: status === SELECT_ALL_STATUS.value ? null : status
      })
    })

    watch(searchByString, debounce(() => {
      emit('filter-changed', { search: searchByString.value })
    }, 700))

    return {
      searchByString,
      selectStatusModel,
      selectCreatedByOptions,
      selectStatusOptions,
      selectCreatedByModel
    }
  }
})
</script>

<style lang="scss" scoped>
  .root {
    > div {
      margin-bottom: 0.75rem;

      &:not(:last-child) {
        margin-right: 15px;
        }

      &:not(:first-child) {
        margin-left: 15px;
        }

      .b-input {
        width: 100%;
        max-width: 500px;
        }
      }

    .search-input-field {
      flex: 3;
      }

    .selectable {
      flex: 1;

      .control {
        min-width: 100%;
        }
      }
    }
</style>
