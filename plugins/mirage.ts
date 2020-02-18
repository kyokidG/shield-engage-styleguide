import { Server } from 'miragejs'
import qs from 'qs'
import * as fiDashboard from '../components/fi-dashboard/test-data/mirage'
import {
  ROUTE_FI_DASHBOARD_DATA,
  ROUTE_FI_DASHBOARD_FILTER_CREATED_BY,
  ROUTE_FI_DASHBOARD_FILTER_STATUS
} from '~/utils/api/fi-applications'
import { IFiRequestOptions } from '~/components/fi-dashboard/IFiDashboard'
import { entities } from '@/utils/fixtures/entities'
import { filterStatus, createdByNames } from '@/utils/fixtures/fi-dashboard'
import { config as wizardConfig } from '@/utils/fixtures/wizard'

/**
 * Init mirage plugin if env variable MIRAGE_OFF not equal '1'.
 */
function mirageInit () {
  if (process.env.MIRAGE_OFF === '1') {
    return Object.create(null)
  }
  return new Server({
    routes () {
      this.namespace = 'api'

      this.get('entities', () => {
        return {
          entities
        }
      })
      this.get(ROUTE_FI_DASHBOARD_DATA, (_:any, request:any) => {
        const _param = /.*\?(.*)$/.exec(request.url)
        const param = (_param && _param.length > 1) ? qs.parse(_param[1]) : {}
        return fiDashboard.requestAll(param as IFiRequestOptions)
      })

      this.get(ROUTE_FI_DASHBOARD_FILTER_STATUS, () => {
        return filterStatus
      })

      this.get(ROUTE_FI_DASHBOARD_FILTER_CREATED_BY, () => {
        return createdByNames
      })
      this.get('/ownership_cards', () => {
        return {
          cards: [
            'Grow MSO Inc. Profile Form',
            'First Owner(Grow MSO, Inc)',
            'First Owner(Grow MSO, Inc)',
            'Chris Smith Profile Form',
            'Danie Smith Profile Form']
        }
      })
      this.get('/wizard', () => {
        return wizardConfig
      })
    }
  })
}
export default mirageInit()
