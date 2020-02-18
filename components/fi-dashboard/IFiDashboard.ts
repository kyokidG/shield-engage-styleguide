
export interface IFiDashboardModel {
  id: number
  entityName: string
  createdBy: string
  lastUpdated: Date | string,
  status: string
  lastUpdatedStr?: string
  favorite: boolean
}

export interface IFiDashboardModels {
  data: IFiDashboardModel[]
  count: number
}

export interface IFiTableDataFilter {
  search?: string
  status?: string
  createdBy?: string
}

export interface ISelectOptions {
  id: string
  value: string
  label: string
}

export interface IFiRequestOptions {
  filter?: IFiTableDataFilter
  page: number|string
  perPage: number|string
}
