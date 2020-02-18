
import {
  ref
} from '@vue/composition-api'

export default function () {
  const request = ref()

  const validate = () => {
    const promise = new Promise((resolve) => {
      request.value = resolve as any
    })
    return promise
  }

  return {
    validate,
    request
  }
}
