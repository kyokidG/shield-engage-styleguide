import { isEqual } from 'lodash'
import { ref, watch } from '@vue/composition-api'
import IHasValue from '@/interfaces/IHasValue'

/**
 * Create refs collection from component properties.
 * @param props Component properties.
 * @param names Names list.
 */
export default function (props: IHasValue, names: Array<string> = []) {
  const data = names.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: ref(props.value[cur])
    }),
    Object.create(null)
  )

  watch(
    () => props.value,
    (newVal: any, oldVal) => {
      if (!isEqual(newVal, oldVal)) {
        names.forEach(
          (cur: string) => {
            data[cur].value = newVal[cur]
          }
        )
      }
    }
  )
  return data
}
