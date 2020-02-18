<template>
  <div class="root">
    <b-select v-model="perPage" class="select-per-page" @input="handlerPerPageChange">
      <option v-for="(value,index) in paginatedValues" :key="index" :value="value">
        {{ value }} per page
      </option>
    </b-select>

    <b-table
      :data="tableData"
      paginated
      :per-page="perPage"
      :total="totalDataCount"
      :current-page.sync="currentPage"
      pagination-position="bottom"
      default-sort-direction="asc"
      sort-icon="arrow-up"
      sort-icon-size="is-small"
      :loading="tableLoading"
      default-sort="createdAt"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :backend-sorting="useBackend"
      :backend-pagination="useBackend"
      class="is-primary"
      @sort="handlerSort"
      @page-change="handlerPageChange"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="Application ID" sortable>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="entityName" label="Entity Name" sortable>
          {{ props.row.entityName }}
        </b-table-column>
        <b-table-column field="lastUpdated" label="Last Update" sortable class="table-column-last-update" width="150">
          {{ props.row.lastUpdatedStr }}
        </b-table-column>
        <b-table-column field="createdBy" label="Created by" sortable>
          {{ props.row.createdBy }}
        </b-table-column>
        <b-table-column field="status" label="Status" sortable width="12%">
          {{ props.row.status }}
        </b-table-column>
        <b-table-column field="favorite" label="" sortable width="60" centered>
          <b-icon :icon="props.row.favorite ? 'star' : 'star-outline'" />
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">

import {
  createComponent,
  ref,
  watch
} from '@vue/composition-api'

import {
  differenceInHours,
  differenceInMinutes,
  format as formatDate
} from 'date-fns'

import { debounce } from 'lodash'
import {
  IFiDashboardModel,
  IFiDashboardModels,
  IFiTableDataFilter
} from '~/components/fi-dashboard/IFiDashboard'

import { getData } from '~/utils/api/fi-applications'

export default createComponent({
  name: 'Table',
  props: {
    isClosed: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Object as () => IFiTableDataFilter,
      required: true,
      default: () => ({
        search: ''
      })
    }
  },
  setup (props) {
    const tableData = ref<IFiDashboardModel[]>([])
    const totalDataCount = ref(0)

    const perPage = ref('10')
    const currentPage = ref(1)
    const tableLoading = ref(false)

    const filterRef = ref(props.filter)

    const formatData = (data: Partial<IFiDashboardModel>[]): IFiDashboardModel[] => {
      const currentDate: Date = new Date()
      const formatLastUpdated = (date: Date) => {
        date = new Date(date)
        const diffHours = differenceInHours(currentDate, date)
        if (diffHours > 0) {
          return (diffHours > 23) ? formatDate(date, 'MM/dd/yyyy') : (diffHours > 1 ? `${diffHours} hours ago` : 'an hour ago')
        }
        const diffMinutes = differenceInMinutes(currentDate, date)
        return diffMinutes > 1 ? `${diffMinutes} minutes ago` : 'a minute ago'
      }
      return data.map((x: any) => {
        return {
          ...x,
          lastUpdated: new Date(x.lastUpdated),
          lastUpdatedStr: formatLastUpdated(x.lastUpdated)
        }
      })
    }

    const fetchData = debounce(() => {
      tableLoading.value = true
      getData({
        filter: filterRef.value,
        page: currentPage.value,
        perPage: perPage.value
      }).then((data: IFiDashboardModels) => {
        tableData.value = formatData([...data.data])
        totalDataCount.value = data.count
        tableLoading.value = false
      })
    }, 1)

    fetchData()

    watch(() => props.filter, (n) => {
      filterRef.value = n
      fetchData()
    }, { deep: true })

    const handlerSort = () => {
      /** this handler must be implemented to make a request to backend, backend must perform sorting
         options obj should be used.   field, data
         */
    }
    const handlerPageChange = (page: number) => {
      currentPage.value = page
      fetchData()
    }

    const handlerPerPageChange = () => {
      fetchData()
    }

    return {
      paginatedValues: ['5', '10', '25', '50'],
      useBackend: true,
      handlerSort,
      handlerPageChange,
      tableLoading,
      tableData,
      totalDataCount,
      perPage,
      currentPage,
      handlerPerPageChange
    }
  }
})
</script>

<style lang="scss" >
  @import "~bulma/sass/utilities/_all";

  .pagination-link.is-current {
    background-color: $primary;
    border-color: $primary;
    }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: $primary;
    }
</style>

<style lang='scss' scoped>
  .root {
    position: relative;
    }

  .select-per-page {
    position: absolute;
    bottom: 1.5rem;
    left: 0px;
    }
</style>
