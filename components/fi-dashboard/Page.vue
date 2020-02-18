<template>
  <section class="flex justify-center flex-column">
    <filter-part :is-closed="isClosed" @filter-changed="handlerFilterChanged" />
    <table-part ref="table" :is-closed="isClosed" :filter="filterData" />
  </section>
</template>

<script lang="ts">

import {
  createComponent,
  ref
} from '@vue/composition-api'
import TablePart from '@/components/fi-dashboard/Table.vue'
import FilterPart from '~/components/fi-dashboard/FilterPart.vue'
import { IFiTableDataFilter } from '~/components/fi-dashboard/IFiDashboard'

export default createComponent({
  name: 'Page',
  components: {
    FilterPart, TablePart
  },
  props: {
    isClosed: {
      type: Boolean,
      default: false
    }
  },
  setup ({ isClosed }) {
    const filterData = ref<IFiTableDataFilter>({})
    const handlerFilterChanged = (data: IFiTableDataFilter) => {
      filterData.value = Object.assign({}, filterData.value, data, !isClosed ? {} : { status: 'Closed' })
    }
    return {
      handlerFilterChanged,
      filterData
    }
  }
})
</script>
