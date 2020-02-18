<template>
  <div class="entity-repeater">
    <div class="repeater-title flex justify-between">
      <b-field
        class="name-title"
        label="Entity Name"
      />
      <b-field
        class="type-title"
        label="Type"
      />
      <b-field
        class="percent-title"
        label="Pct %"
      />
    </div>
    <repeater
      v-model="fields"
    />
    <div class="static-row flex justify-between pl4 pr4 items-center mt3 mb3">
      <div class="left">
        Other (owning parties under 10% each)
      </div>
      <div class="right">
        {{ other }}
      </div>
    </div>
    <b-button
      type="is-light"
      icon-left="plus"
      :disabled="possibleTotal >= 100"
      @click="add"
    >
      Add
    </b-button>
    <div class="total mt6 flex flex-column">
      <div class="progress mb3" />
      <div class="info flex justify-between items-center">
        <div class="left">
          Total Ownership
        </div>
        <div class="right">
          {{ possibleTotal }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { debounce, chain, set } from 'lodash'
import { createComponent, ref, computed, watch } from '@vue/composition-api'
import Repeater from '@/components/repeater/Repeater.vue'
import guid from '@/utils/guid'

/**
 * Generate new entity field.
 */
function generateNewField () {
  return {
    id: guid(),
    control: 'entity-field',
    value: {
      name: '',
      type: '',
      percent: 1,
      max: 100
    }
  }
}

export default createComponent({
  name: 'EntityRepeater',
  components: {
    Repeater
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  setup ({ value }, { emit }) {
    const fields = ref(value.length ? value : [generateNewField()])
    const sum = computed(
      () => chain(fields.value)
        .reduce((acc, curr) => acc + parseInt((curr as any).value.percent, 10), 0)
        .value()
    )
    const possibleTotal = computed(() => Math.min(100, sum.value))
    const other = computed(() => 100 - sum.value)

    /**
     * Count all max values.
     */
    function countMax (elements: Array<any>) {
      return chain(elements)
        .cloneDeep()
        .map(f => set((f as any), 'value.max', other.value + parseInt((f as any).value.percent, 10)))
        .value()
    }

    /**
     * Add one more field.
     */
    function add () {
      (fields as any).value = countMax([...fields.value, generateNewField()])
    }

    watch(
      other,
      debounce(() => {
        fields.value = countMax(fields.value)
      }, 500)
    )

    watch(
      fields,
      (newVal) => {
        emit('input', newVal)
      }
    )

    return {
      fields,
      add,
      other,
      possibleTotal
    }
  }
})
</script>

<style scoped lang="scss">
@import "~bulma/sass/utilities/_all";
.static-row{
  height: 48px;
  border: 1px solid $grey-light;
  background: $white-ter;
  color: $grey-light;
}

.total{
  color: $grey-light;
  .progress{
    height: 3px;
    background: $grey-light;
    width: 100%;
  }

  .info{
    .left{
      font-size: 18px;
      font-weight: bold;
    }
  }
}

.name-title{
  width: 60%;
}
.type-title{
  width: 27%;
}
.percent-title{
  width: 10%;
}
</style>
