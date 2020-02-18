<template>
  <div class="authorized-representative mb2">
    <h4 class="has-text-left has-text-grey has-text-weight-bold mb3">
      Authorized Representative
    </h4>
    <div class="flex justify-between mb0">
      <div class="left flex-auto pr2">
        <b-field label="First name" :type="vModel.firstName.type" :message="vModel.firstName.message">
          <b-input v-model="modelData.firstName" placeholder="First name" @blur="onBlurHandler('firstName')" />
        </b-field>
      </div>
      <div class="right flex-auto pl2">
        <b-field label="Last name" :type="vModel.lastName.type" :message="vModel.lastName.message">
          <b-input v-model="modelData.lastName" placeholder="Last name" @blur="onBlurHandler('lastName')" />
        </b-field>
      </div>
    </div>
    <b-field label="Email Address" :type="vModel.email.type" :message="vModel.email.message">
      <b-input v-model="modelData.email" placeholder="Email address" @blur="onBlurHandler('email')" />
    </b-field>
    <b-field label="Phone number" message="&nbsp;">
      <b-input v-model="modelData.phone" placeholder="Phone number" />
    </b-field>
    <div class="left flex-auto">
      <b-field label="Role at the company" :type="vModel.companyRole.type" :message="vModel.companyRole.message">
        <b-select
          v-model="modelData.companyRole"
          placeholder="Select..."
          @blur="onBlurHandler('companyRole')"
          @change="onBlurHandler('companyRole')"
        >
          <option
            v-for="(option) in roleOptions"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </b-select>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  watch
} from '@vue/composition-api'

import * as yup from 'yup'
import useValidation from '~/components/fi-dashboard/hooks/useValidation'

export default createComponent({
  name: 'AddNewApplication',
  props: {
    roleOptions: {
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyRole: '0'
      },
      {
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email:
          yup
            .string()
            .required('Required')
            .email('Email is not valid'),
        companyRole:
          yup.string().test('required selection', 'You have to select one role', (value) => {
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
  .authorized-representative >>> .field{
    margin-bottom: 0;
  }
  .control >>> .select,
  .control >>> select{
    min-width: 100%;
  }
</style>
