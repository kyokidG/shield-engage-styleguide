import * as yup from 'yup'
import IYupConfig from '~/utils/yup/interfaces/IYupConfig'

/**
 * Schema creator function for Yup validation plugin
 * @param schema previous schema in case of multiple fields checking
 * @param config Validation parameters @guid, @validationType, @validations
 */
export function createYupSchema (schema: any, config: IYupConfig) {
  const { guid, validationType, validations = [] } = config
  const validatorFunc: any = yup[validationType]

  if (typeof yup[validationType] === 'function') {
    let validator = validatorFunc()
    validations.forEach((validation) => {
      const { params, type } = validation
      if (!validator[type]) {
        return
      }
      validator = validator[type](...params)
    })
    schema[guid] = validator
  }
  return schema
}
