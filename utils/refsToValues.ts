import { mapValues } from 'lodash'
import IHasValue from '@/interfaces/IHasValue'

/**
 * Get values from refs collection.
 * @param data Refs collections.
 */
export default function (data: object) {
  return mapValues(data, (el: IHasValue) => el.value)
}
