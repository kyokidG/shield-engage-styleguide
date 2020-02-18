import IDropResult from './interfaces/IDropResult'
import { IPayload } from './interfaces/IPayload'

export const applyDrag = (arr: any, dragResult: IDropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) {
    return arr
  }

  const result = [...arr]
  let itemToAdd: IPayload = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}
