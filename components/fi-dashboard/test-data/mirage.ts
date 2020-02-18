import { get as _get } from 'lodash'
import {
  IFiDashboardModel,
  IFiDashboardModels,
  IFiRequestOptions
} from '../IFiDashboard'

const jsonData = [
  { id: 1, entityName: 'Reick LLC', createdBy: 'Jesse Simmons', lastUpdated: '2019/10/15 13:43:27', status: 'In Progress', favorite: true },
  { id: 2, entityName: 'Reick LLC', createdBy: 'John Jacobs', lastUpdated: '2019/12/15 06:00:53', status: 'In Progress', favorite: true },
  { id: 3, entityName: 'Reick LLC', createdBy: 'Tina Gilbert', lastUpdated: '2019/04/26 06:26:28', status: 'In Review', favorite: true },
  { id: 4, entityName: 'Reick LLC', createdBy: 'Clarence Flores', lastUpdated: '2019/04/10 10:28:46', status: 'In Progress', favorite: true },
  { id: 5, entityName: 'Reick LLC', createdBy: 'Anne Lee', lastUpdated: '2019/12/06 14:38:38', status: 'In Review', favorite: true },
  { id: 6, entityName: 'Reick LLC', createdBy: 'Sara Armstrong', lastUpdated: '2019/09/23 18:50:04', status: 'In Review', favorite: true },
  { id: 7, entityName: 'Reick LLC', createdBy: 'Anthony Webb', lastUpdated: '2019/08/30 23:49:38', status: 'In Progress', favorite: true },
  { id: 8, entityName: 'Reick LLC', createdBy: 'Andrew Greene', lastUpdated: '2019/11/20 14:57:47', status: 'In Progress', favorite: true },
  { id: 9, entityName: 'Reick LLC', createdBy: 'Russell White', lastUpdated: '2020/01/27 12:47:49', status: 'In Progress', favorite: true },
  { id: 10, entityName: 'Fractal LLC', createdBy: 'Lori Hunter', lastUpdated: '2019/12/09 01:44:05', status: 'In Review', favorite: true },
  { id: 11, entityName: 'Fractal LLC', createdBy: 'Ronald Wood', lastUpdated: '2019/12/04 02:23:48', status: 'In Progress', favorite: true },
  { id: 12, entityName: 'Fractal LLC', createdBy: 'Michael Harper', lastUpdated: '2019/07/27 13:28:15', status: 'In Progress', favorite: true },
  { id: 13, entityName: 'Reick LLC', createdBy: 'George Dunn', lastUpdated: '2020/03/07 12:26:52', status: 'Invitation Sent', favorite: true },
  { id: 14, entityName: 'Reick LLC', createdBy: 'Eric Rogers', lastUpdated: '2019/06/07 05:41:52', status: 'In Progress', favorite: false },
  { id: 15, entityName: 'Reick LLC', createdBy: 'Tina Gilbert', lastUpdated: '2020/02/01 04:56:34', status: 'Getting Started', favorite: false },
  { id: 16, entityName: 'Cresco Labs', createdBy: 'Lori Shaw', lastUpdated: '2020/01/26 11:50:04', status: 'Getting Started', favorite: false },
  { id: 17, entityName: 'Cresco Labs', createdBy: 'Lori Cunningham', lastUpdated: '2019/05/01 10:00:56', status: 'In Review', favorite: false },
  { id: 18, entityName: 'Reick LLC', createdBy: 'Charles Graham', lastUpdated: '2020/01/27 11:43:30', status: 'In Progress', favorite: false },
  { id: 19, entityName: 'Reick LLC', createdBy: 'Henry Morrison', lastUpdated: '2020/02/03 10:15:00', status: 'In Progress', favorite: false },
  { id: 20, entityName: 'Reick LLC', createdBy: 'Albert Mendoza', lastUpdated: '2019/08/08 05:29:24', status: 'In Progress', favorite: false },
  { id: 21, entityName: 'Reick LLC', createdBy: 'Tina Gilbert', lastUpdated: '2020/04/01 12:04:39', status: 'In Review', favorite: false },
  { id: 22, entityName: 'Cresco Labs', createdBy: 'Jesse Warren', lastUpdated: '2019/08/20 01:36:38', status: 'In Progress', favorite: false },
  { id: 23, entityName: 'Indica Cognita', createdBy: 'Carlos Ferguson', lastUpdated: '2019/05/31 10:40:29', status: 'In Progress', favorite: false },
  { id: 24, entityName: 'Indica Cognita', createdBy: 'Melissa Peters', lastUpdated: '2019/07/23 00:41:54', status: 'In Review', favorite: false },
  { id: 25, entityName: 'Reick LLC', createdBy: 'Arthur Garza', lastUpdated: '2020/03/11 14:11:37', status: 'In Progress', favorite: false },
  { id: 26, entityName: 'Reick LLC', createdBy: 'Joe Berry', lastUpdated: '2019/07/09 15:16:56', status: 'In Progress', favorite: true },
  { id: 27, entityName: 'Reick LLC', createdBy: 'Joseph Bishop', lastUpdated: '2019/10/04 19:44:54', status: 'In Progress', favorite: true },
  { id: 28, entityName: 'Reick LLC', createdBy: 'Sarah Harper', lastUpdated: '2019/09/23 05:09:11', status: 'In Review', favorite: true },
  { id: 29, entityName: 'Reick LLC', createdBy: 'Christopher Fuller', lastUpdated: '2019/04/12 00:05:35', status: 'In Progress', favorite: true },
  { id: 30, entityName: 'Reick LLC', createdBy: 'Alan Mendoza', lastUpdated: '2019/04/22 10:48:02', status: 'In Progress', favorite: true },
  { id: 31, entityName: 'Reick LLC', createdBy: 'Tina Gilbert', lastUpdated: '2020/01/16 15:17:03', status: 'In Progress', favorite: true },
  { id: 32, entityName: 'Reick LLC', createdBy: 'Scott Welch', lastUpdated: '2019/10/04 23:31:51', status: 'Closed', favorite: true },
  { id: 33, entityName: 'Reick LLC', createdBy: 'Mildred Myers', lastUpdated: '2019/11/23 13:46:18', status: 'Closed', favorite: true },
  { id: 34, entityName: 'Reick LLC', createdBy: 'Victor Martinez', lastUpdated: '2019/04/06 17:05:07', status: 'In Progress', favorite: true },
  { id: 35, entityName: 'Reick LLC', createdBy: 'Tina Gilbert', lastUpdated: '2019/12/09 10:33:37', status: 'Closed', favorite: true },
  { id: 36, entityName: 'Reick LLC', createdBy: 'Judy Long', lastUpdated: '2019/07/26 16:19:04', status: 'In Review', favorite: true },
  { id: 37, entityName: 'Reick LLC', createdBy: 'Joan Myers', lastUpdated: '2019/09/22 04:55:54', status: 'In Review', favorite: true },
  { id: 38, entityName: 'Reick LLC', createdBy: 'Rachel Gonzales', lastUpdated: '2019/07/15 13:56:38', status: 'Closed', favorite: true },
  { id: 39, entityName: 'Reick LLC', createdBy: 'Roger Hunt', lastUpdated: '2019/08/14 10:43:11', status: 'In Progress', favorite: true },
  { id: 40, entityName: 'Reick LLC', createdBy: 'Dorothy Howard', lastUpdated: '2019/06/19 05:34:49', status: 'In Review', favorite: true },
  { id: 41, entityName: 'Reick LLC', createdBy: 'Eugene Lynch', lastUpdated: '2019/12/24 08:19:24', status: 'In Progress', favorite: true },
  { id: 42, entityName: 'Reick LLC', createdBy: 'Kathy Webb', lastUpdated: '2020/04/01 21:09:05', status: 'In Review', favorite: true },
  { id: 43, entityName: 'Reick LLC', createdBy: 'Antonio White', lastUpdated: '2020/02/10 06:51:20', status: 'In Progress', favorite: true },
  { id: 44, entityName: 'Reick LLC', createdBy: 'Louis Spencer', lastUpdated: '2019/10/08 02:20:22', status: 'In Progress', favorite: true },
  { id: 45, entityName: 'Reick LLC', createdBy: 'Andrea Marshall', lastUpdated: '2019/09/04 10:59:57', status: 'In Review', favorite: true },
  { id: 46, entityName: 'Reick LLC', createdBy: 'Eugene Sims', lastUpdated: '2020/03/15 06:39:48', status: 'In Progress', favorite: true },
  { id: 47, entityName: 'Reick LLC', createdBy: 'Mildred Gibson', lastUpdated: '2019/04/18 06:43:54', status: 'In Review', favorite: true },
  { id: 48, entityName: 'Reick LLC', createdBy: 'Joan Arnold', lastUpdated: '2019/12/16 04:52:23', status: 'In Review', favorite: true },
  { id: 49, entityName: 'Reick LLC', createdBy: 'Tina Gilbert', lastUpdated: '2019/06/11 02:44:33', status: 'In Progress', favorite: true },
  { id: 50, entityName: 'Reick LLC', createdBy: 'David Frazier', lastUpdated: '2020/02/15 21:46:30', status: 'In Progress', favorite: false },
  { id: 51, entityName: 'Reick LLC', createdBy: 'Nicholas Howell', lastUpdated: '2019/11/01 15:08:31', status: 'In Progress', favorite: false },
  { id: 52, entityName: 'Reick LLC', createdBy: 'Douglas Chapman', lastUpdated: '2020/02/08 03:33:24', status: 'In Progress', favorite: true },
  { id: 53, entityName: 'Reick LLC', createdBy: 'Bruce Simmons', lastUpdated: '2019/07/14 12:11:17', status: 'In Progress', favorite: true },
  { id: 54, entityName: 'Reick LLC', createdBy: 'Antonio George', lastUpdated: '2019/11/07 19:12:55', status: 'In Progress', favorite: true },
  { id: 55, entityName: 'Reick LLC', createdBy: 'Chris Marshall', lastUpdated: '2019/07/03 12:11:45', status: 'In Progress', favorite: true },
  { id: 56, entityName: 'Reick LLC', createdBy: 'Ashley Hudson', lastUpdated: '2019/10/14 21:08:05', status: 'In Review', favorite: true },
  { id: 57, entityName: 'Reick LLC', createdBy: 'Alan Edwards', lastUpdated: '2020/03/22 21:10:25', status: 'In Progress', favorite: true },
  { id: 58, entityName: 'Reick LLC', createdBy: 'George Clark', lastUpdated: '2019/04/28 03:15:05', status: 'In Progress', favorite: true },
  { id: 59, entityName: 'Reick LLC', createdBy: 'Frank Porter', lastUpdated: '2019/09/08 00:48:14', status: 'In Progress', favorite: true },
  { id: 60, entityName: 'Reick LLC', createdBy: 'Christopher Palmer', lastUpdated: '2019/05/24 08:58:12', status: 'In Progress' }
]

export const requestAll = ({ filter, page, perPage }: IFiRequestOptions): IFiDashboardModels => {
  const filterTableJS = (data: IFiDashboardModel[]) => {
    let regexSearch: any = null
    const search = _get(filter, 'search')
    if (search && search.length > 0) {
      regexSearch = new RegExp(search, 'gi')
    }
    const fStatus = _get(filter, 'status')
    const fCreatedBy = _get(filter, 'createdBy')
    return data.filter((x: IFiDashboardModel) => {
      if (filter) {
        if (fStatus && fStatus.length > 0 && x.status !== fStatus) { return false }
        if (fCreatedBy && fCreatedBy.length > 0 && x.createdBy !== fCreatedBy) { return false }
        if (regexSearch) {
          regexSearch.lastIndex = 0
          if (regexSearch.exec(x.entityName)) { return true }
          regexSearch.lastIndex = 0
          return (regexSearch.exec(`${x.id}`))
        }
      }
      return true
    })
  }
  const _page = +page || 1
  const _perPage = +perPage || 20
  const _data = filterTableJS(jsonData as IFiDashboardModel[])
  const data = _data.slice((_page - 1) * _perPage, _page * _perPage)
  return {
    data,
    count: _data.length
  }
}
