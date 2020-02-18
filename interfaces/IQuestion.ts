import IYupConfig from '~/utils/yup/interfaces/IYupConfig'

export default interface IQuestion extends IYupConfig {
  type: string,
  options: Array<string>,
  label: string,
  helpText: string,
  value: any,
  note: string,
  approved: boolean
}
