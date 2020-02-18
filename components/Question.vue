<template>
  <div>
    <div v-if="type === 'text'" class="field">
      <b-field :label="label" :type="fieldState" :message="helpText">
        <b-input v-model="inputData" />
      </b-field>
    </div>

    <div v-else-if="type === 'boolean'" class="field">
      <b-field :type="fieldState" :message="helpText">
        <b-checkbox v-model="inputData">
          {{ label }}
        </b-checkbox>
      </b-field>
    </div>

    <div v-else-if="type === 'bounded'" class="field">
      <b-field :label="label" :type="fieldState" :message="helpText">
        <b-select v-model="inputData">
          <option v-for="option in options" :key="option" :value="option">
            {{ option }}
          </option>
        </b-select>
      </b-field>
    </div>

    <div v-else-if="type === 'date'" class="field">
      <b-field :label="label" :type="fieldState" :message="helpText">
        <b-datepicker v-model="inputData" icon="calendar-today" />
      </b-field>
    </div>

    <div v-else-if="type === 'file'" class="field">
      <b-field class="file">
        <b-upload v-model="inputData">
          <a class="button is-primary">
            <b-icon icon="upload" />
            <span>{{ label }}</span>
          </a>
        </b-upload>
        <span v-if="inputData" class="file-name">
          {{ inputData.name }}
        </span>
      </b-field>
      <b-field :type="fieldState" :message="helpText" />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, toRefs, watch, ref } from '@vue/composition-api'
import * as yup from 'yup'
import { createYupSchema } from '~/utils/yup/yupSchemaCreator'
import IQuestion from '~/interfaces/IQuestion'

interface PropsInterface {
  question: IQuestion
}

export default createComponent({
  name: 'Question',
  props: {
    question: {
      type: Object
    }
  },
  setup ({ question }: PropsInterface) {
    const { guid, type, label, helpText, value, options } = question

    const state = reactive({ type, label, helpText, options })
    const fieldState = ref('')
    const inputData = ref(value)

    const yepSchema = createYupSchema({}, question)
    const validateSchema = yup.object().shape(yepSchema)

    watch(
      inputData,
      (input) => {
        validateSchema.validate({ [guid]: input }).catch((err: Error) => {
          fieldState.value = 'is-danger'
          state.helpText = err.message
        }).then((valid) => {
          if (valid) {
            fieldState.value = 'is-success'
            state.helpText = helpText
          }
        })
      },
      { lazy: true }
    )

    return {
      ...toRefs(state),
      validateSchema,
      fieldState,
      inputData
    }
  }
})
</script>
<style scoped lang="scss">
  @import "~assets/scss/helpers";
  .field {
    @extend .mt4;
  }
</style>
