<template>
  <div class="repeater">
    <div
      v-for="field in value"
      :key="field.id"
      class="block"
    >
      <component
        :is="field.control"
        :id="field.id"
        v-model="field.value"
        @remove="removeField"
        @input="updateFields(field, $event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Repeater',
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  setup (props, { emit }) {
    /**
     * Dispatch input event.
     *
     * @param value Event to dispatch.
     */
    function dispatch (value: Array<any>) {
      emit('input', value)
    }

    /**
     * Dispatch input event with updated fields.
     *
     * @param field Field which will be updated.
     * @param $event New value for field.
     */
    function updateFields (field: any, $event: any) {
      field.value = $event
      dispatch([...props.value])
    }

    /**
     * Remove field
     *
     * @param id Field id.
     */
    function removeField (id: string) {
      if (props.value.length > 1) {
        dispatch([...props.value.filter(f => (f as any).id !== id)])
      }
    }

    return {
      updateFields,
      removeField
    }
  }
})
</script>
