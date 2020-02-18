import qs from 'qs'
import { get } from '~/utils/api/request'
import { IFiRequestOptions } from '~/components/fi-dashboard/IFiDashboard'

export const ROUTE_FI_DASHBOARD = 'fi-application'
export const ROUTE_FI_DASHBOARD_DATA = `${ROUTE_FI_DASHBOARD}-data`
export const ROUTE_FI_DASHBOARD_FILTER_STATUS = `${ROUTE_FI_DASHBOARD}-status`
export const ROUTE_FI_DASHBOARD_FILTER_CREATED_BY = `${ROUTE_FI_DASHBOARD}-createdby`

export function getAllPossibleApplicationStatus () {
  return get(`/api/${ROUTE_FI_DASHBOARD_FILTER_STATUS}`)
}

export function getAllPossibleApplicationCreatedAt (status?: string) {
  return get(`/api/${ROUTE_FI_DASHBOARD_FILTER_CREATED_BY}${status ? `?${qs.stringify({ status })}` : ''}`)
}

export function getData (options :IFiRequestOptions) {
  return get(`/api/${ROUTE_FI_DASHBOARD_DATA}?${qs.stringify(options)}`)
}
