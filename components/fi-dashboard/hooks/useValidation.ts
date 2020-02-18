import {
  reactive,
  toRefs,
  watch
} from '@vue/composition-api'
import * as yup from 'yup'

const DEFAULT_ERROR_MESSAGE = '&nbsp;'

export interface IValidationField {
    message: string
    dirty: boolean
    type: string
}

export default function (initialData: object, yupModel: object) {
  const modelData = reactive({ ...initialData })

  const schema = yup.object().shape(yupModel)

  const vModel = reactive(Object.keys(yupModel).reduce((acc, field) => {
    return {
      ...acc,
      [field]: {
        message: DEFAULT_ERROR_MESSAGE,
        dirty: false,
        type: ''
      }
    }
  }, {}))

  const validateOneField = (field:string) => {
    const _m :IValidationField = (vModel as any)[field]
    if (!_m.dirty) { return }
    const value = (modelData as any)[field]
    yup.reach(schema, field).validate(value).then(() => {
      _m.message = DEFAULT_ERROR_MESSAGE
      _m.type = ''
    }).catch((e) => {
      _m.message = e.message
      _m.type = 'is-danger'
    })
  }

  (() => {
    const _modelData = toRefs(modelData)
    const keysModel = Object.keys(vModel)
    Object.keys(_modelData).forEach((key:string) => {
      if (!keysModel.includes(key)) { return }
      watch((_modelData as any)[key], () => {
        validateOneField(key)
      })
    })
  })()

  const clearErrors = () => {
    Object.keys(vModel).forEach((key:string) => {
      const _model:IValidationField = (vModel as any)[key]
      _model.message = DEFAULT_ERROR_MESSAGE
      _model.type = ''
    })
  }

  const setAllDirty = () => {
    Object.keys(vModel).forEach((key:string) => {
      const _model:IValidationField = (vModel as any)[key]
      _model.dirty = true
    })
  }

  const onBlurHandler = (field: string) => {
    const _m :IValidationField = (vModel as any)[field]
    if (!_m || _m.dirty) { return }
    _m.dirty = true
    validateOneField(field)
  }

  const validate = (resolve:any) => {
    clearErrors()
    setAllDirty()
    schema.validate(modelData, { abortEarly: false }).then(() => {
      resolve(true)
    }).catch((e) => {
      if (e.inner) {
        e.inner.forEach((x:any) => {
          const _vModel:any = vModel as any
          _vModel[x.path].message = x.message
          _vModel[x.path].type = 'is-danger'
        })
      }
      resolve(false)
    })
  }

  return {
    validate,
    vModel,
    onBlurHandler,
    modelData
  }
}
