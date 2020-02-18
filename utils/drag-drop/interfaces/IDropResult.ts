import { IPayload } from './IPayload'

export default interface IDropResult {
  removedIndex: number;
  addedIndex: number;
  payload: IPayload;
  element: Element;
}
