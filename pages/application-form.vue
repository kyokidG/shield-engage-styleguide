
<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-4 has-text-left has-text-grey has-text-weight-bold mb3">
      Add New Application
    </h1>
    <div class="description is-size-7 mb3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac uma diam.
      Donec porttitor sit amet tellus es ispum dolor.
    </div>
    <authorized-representative
      :role-options="companyRoleOptions"
      :validation-request="reqValidationAuth"
    />
    <primary-entity-form
      :validation-request="reqValidationEntity"
      :type-options="entityTypeOptions"
      :state-options="entityStateOptions"
    />
    <label class="checkbox">
      <input v-model="question" type="checkbox">
      <span class="is-size-7 has-text-grey-dark">Send the representative an email about their account. </span>
    </label>
    <div class="flex columns">
      <div class="column is-one-quarter">
        <b-button type="is-light mt4" class="is-fullwidth has-background-grey-light" @click="handlerSubmit">
          Submit
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  ref,
  createComponent
} from '@vue/composition-api'
import AuthorizedRepresentative from '~/components/fi-dashboard/new-app-form/AuthorizedRepresentative.vue'
import PrimaryEntityForm from '~/components/fi-dashboard/new-app-form/PrimaryEntity.vue'
import guid from '~/utils/guid'
import useValidationTrigger from '~/components/fi-dashboard/hooks/useValidationTrigger'

export default createComponent({
  name: 'ApplicationForm',
  layout: 'fi-layout',
  components: {
    AuthorizedRepresentative,
    PrimaryEntityForm
  },
  setup () {
    const { validate: validateEntity, request: reqValidationEntity } = useValidationTrigger()
    const { validate: validateAuth, request: reqValidationAuth } = useValidationTrigger()
    const question = ref(false)
    const handlerSubmit = async () => {
      const validate = await (async () => {
        const valid = await validateEntity()
        const valid2 = await validateAuth()
        return valid && valid2
      })()
      if (!validate) { }
      /** process valid data */
    }
    const companyRoleOptions = [
      {
        id: guid(),
        label: 'Select',
        value: '0'
      },
      {
        id: guid(),
        label: 'Role 1',
        value: '1'
      },
      {
        id: guid(),
        label: 'Role 2',
        value: '2'
      },
      {
        id: guid(),
        label: 'Role 3',
        value: '3'
      }
    ]

    const entityStateOptions = [
      {
        id: guid(),
        label: 'Select',
        value: '0'
      },
      {
        id: guid(),
        label: 'Georgia - GA',
        value: 'GA'
      },
      {
        id: guid(),
        label: 'Illinois - IL',
        value: 'IL'
      },
      {
        id: guid(),
        label: 'Texas - TX',
        value: 'TX'
      },
      {
        id: guid(),
        label: 'Oklahoma - OK',
        value: 'OK'
      },
      {
        id: guid(),
        label: 'Nevada - NV',
        value: 'NV'
      }
    ]

    const entityTypeOptions = [
      {
        id: guid(),
        label: 'Select',
        value: '0'
      },
      {
        id: guid(),
        label: 'Entity 1',
        value: '1'
      },
      {
        id: guid(),
        label: 'Entity 2',
        value: '2'
      },
      {
        id: guid(),
        label: 'Entity 3',
        value: '3'
      }
    ]

    return {
      handlerSubmit,
      reqValidationEntity,
      reqValidationAuth,
      question,
      companyRoleOptions,
      entityStateOptions,
      entityTypeOptions
    }
  }
})
</script>

<style lang="scss" scoped>
  .section{
    max-width: 635px;
    margin: 0 auto;
  }
</style>
