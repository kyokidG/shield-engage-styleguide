import IValidations from '~/utils/yup/interfaces/IValidations'
import { TValidationType } from '~/utils/yup/types/TValidationType'

export default interface IYupConfig {
  guid: string;
  validationType: TValidationType;
  validations: IValidations[];
}
