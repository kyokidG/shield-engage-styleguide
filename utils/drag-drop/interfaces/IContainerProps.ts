import { IPayload } from '../interfaces/IPayload'
import IDropResult from '../interfaces/IDropResult'
import IDragEvent from '../interfaces/IDragEvent'
import INodeDescription from '../interfaces/INodeDescription'

export default interface IContainerProps {
  orientation?: string;
  behaviour?: string;
  tag?: string | INodeDescription;
  groupName?: string;
  lockAxis?: string;
  dragHandleSelector?: string;
  nonDragAreaSelector?: string;
  dragBeginDelay?: number;
  animationDuration?: number;
  autoScrollEnabled?: boolean;
  dragClass?: string;
  dropClass?: string;
  removeOnDropOut?: boolean;
  getChildPayload?: (index: number) => IPayload;
  shouldAnimateDrop?: (sourceContainerOptions: IContainerProps, payload: IPayload) => boolean;
  shouldAcceptDrop?: (sourceContainerOptions: IContainerProps, payload: IPayload) => boolean;
  getGhostParent: () => Element;
  onDragStart?: (dragEvent: IDragEvent) => void;
  onDragEnd?: (dragEvent: IDragEvent) => void;
  onDrop?: (dropResult: IDropResult) => void;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
  onDropReady?: (dropResult: IDropResult) => void;
}
