import { watch } from '@vue/composition-api'
import { values, isEqual } from 'lodash'

/**
 * Add watch to each ref defined in data obj.
 * Example:
 * const data = { foo: ref(''), bar: ref('') }
 * @param data Ref's collection.
 * @param fn Dispatch function.
 */
export default function (data: object, fn: Function) {
  watch(
    values(data),
    (newVal, oldVal) => {
      if (!isEqual(newVal, oldVal)) {
        fn(data, newVal, oldVal)
      }
    }
  )
  return data
}
