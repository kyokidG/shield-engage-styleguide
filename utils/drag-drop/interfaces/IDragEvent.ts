import { IPayload } from './IPayload'

export default interface IDragEvent {
  isSource: boolean;
  payload: IPayload;
  willAcceptDrop: boolean;
}
