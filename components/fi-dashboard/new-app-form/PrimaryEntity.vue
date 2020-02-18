<template>
  <div class="primary-entity mb2">
    <h4 class="has-text-left has-text-grey has-text-weight-bold mb3">
      Primary Entity
    </h4>
    <div class="flex justify-between columns mb0">
      <div class="column is-three-fifths pb0 pr2">
        <b-field label="Entity name" :type="vModel.name.type" :message="vModel.name.message">
          <b-input v-model="modelData.name" placeholder="Enter the official entity name" @blur="onBlurHandler('name')" />
        </b-field>
      </div>
      <div class="column pb0 pl2">
        <b-field label="Type" :type="vModel.type.type" :message="vModel.type.message">
          <b-select
            v-model="modelData.type"
            placeholder="Select..."
            @blur="onBlurHandler('type')"
            @change="onBlurHandler('type')"
          >
            <option
              v-for="(option) in typeOptions"
              :key="option.id"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </b-select>
        </b-field>
      </div>
    </div>
    <b-field label="DBA (if applicable)" :type="vModel.dba.type" :message="vModel.dba.message">
      <b-input v-model="modelData.dba" @blur="onBlurHandler('dba')" />
    </b-field>
    <b-field label="Federal EIN" :type="vModel.ein.type" :message="vModel.ein.message">
      <b-input v-model="modelData.ein" @blur="onBlurHandler('ein')" />
    </b-field>
    <b-field label="Phone Number" message="&nbsp;">
      <b-input v-model="modelData.phone" />
    </b-field>
    <div class="flex justify-between columns mb0">
      <div class="column is-three-quarters pb0 pr2">
        <b-field label="Address" :type="vModel.address.type" :message="vModel.address.message">
          <b-input v-model="modelData.address" @blur="onBlurHandler('address')" />
        </b-field>
      </div>
      <div class="column pb0 pl2">
        <b-field label="Suite" :type="vModel.suite.type" :message="vModel.suite.message">
          <b-input v-model="modelData.suite" @blur="onBlurHandler('suite')" />
        </b-field>
      </div>
    </div>
    <div class="flex justify-between columns mb0">
      <div class="column is-three-quarters pb0 pr2">
        <b-field label="City" :type="vModel.city.type" :message="vModel.city.message">
          <b-input v-model="modelData.city" @blur="onBlurHandler('city')" />
        </b-field>
      </div>
      <div class="column pb0 pl2">
        <b-field label="ZIP" :type="vModel.zipCode.type" :message="vModel.zipCode.message">
          <b-input v-model="modelData.zipCode" maxlength="5" @blur="onBlurHandler('zipCode')" />
        </b-field>
      </div>
    </div>
    <b-field label="State" :type="vModel.state.type" :message="vModel.state.message">
      <b-select
        v-model="modelData.state"
        @blur="onBlurHandler('state')"
        @change="onBlurHandler('state')"
      >
        <option
          v-for="(option) in stateOptions"
          :key="option.id"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </b-select>
    </b-field>
  </div>
</template>
<script lang="ts">
import { createComponent, watch } from '@vue/composition-api'
import * as yup from 'yup'
import useValidation from '~/components/fi-dashboard/hooks/useValidation'

  interface IValidationModel {
   message: string | undefined
   dirty: boolean
}

export default createComponent({
  name: 'PrimaryEntity',
  props: {
    stateOptions: {
      type: Array,
      required: true
    },
    typeOptions: {
      type: Array,
      required: true
    },
    validationRequest: {
      required: true
    }
  },
  setup (props) {
    const { validate, vModel, modelData, onBlurHandler } = useValidation(
      {
        name: '',
        type: '0',
        dba: '',
        ein: '',
        phone: '',
        address: '',
        suite: '',
        city: '',
        zipCode: '',
        state: '0'
      },
      {
        name: yup.string().required('Required'),
        dba: yup.string().required('Required'),
        ein: yup.string().required('Required'),
        address: yup.string().required('Required'),
        suite: yup.string().required('Required'),
        city: yup.string().required('Required'),
        zipCode:
          yup
            .string()
            .required('Required')
            .min(5, 'Not valid zip'),
        type: yup.string().test('required selection', 'Selection required', (value) => {
          return value !== '0'
        }),
        state:
          yup.string().test('required selection', 'You have to select one state', (value) => {
            return value !== '0'
          })
      }
    )

    watch(() => props.validationRequest, (resolve) => {
      if (resolve) { validate(resolve) }
    })

    return {
      vModel,
      modelData,
      onBlurHandler
    }
  }
})
</script>

<style scoped>
  .primary-entity >>> .field,
  .primary-entity >>> .columns{
    margin-bottom: 0;
  }
  .control >>> .select,
  .control >>> select{
    min-width: 100%;
  }
</style>
