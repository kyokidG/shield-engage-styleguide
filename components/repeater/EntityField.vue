<template>
  <div class="entity flex justify-between">
    <div class="name-col">
      <b-input
        :id="id + '-entity'"
        v-model="name"
        placeholder="Corporation, LLC, or Person"
      />
    </div>
    <div class="type-col">
      <b-select
        :id="id + '-type'"
        v-model="type"
        class="b-select"
        placeholder="Select a type"
      >
        <option
          v-for="option in options"
          :key="option.id"
          :value="option.value"
        >
          {{ option.value }}
        </option>
      </b-select>
    </div>
    <div class="percent-col">
      <b-input
        :id="id + '-percent'"
        v-model="percent"
        type="number"
        placeholder="%"
        min="0"
        :max="max"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, watch, ref } from '@vue/composition-api'
import addWatch from '@/composables/addWatch'
import refsFactory from '@/composables/refsFactory'
import refsToValues from '@/utils/refsToValues'
import guid from '@/utils/guid'

export default createComponent({
  name: 'Entity',
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    const removed = ref(false)
    const options = [
      {
        id: guid(),
        value: 'S-corp'
      },
      {
        id: guid(),
        value: 'C-corp'
      },
      {
        id: guid(),
        value: 'LLC'
      },
      {
        id: guid(),
        value: 'Partnership'
      },
      {
        id: guid(),
        value: 'Person'
      }
    ]
    const data = refsFactory(
      props,
      ['name', 'type', 'percent', 'max']
    )

    watch(
      data.percent,
      (newVal: number | string) => {
        const val = parseInt((newVal as string), 10) || 0
        if (val === 0) {
          emit('remove', props.id)
          removed.value = true
        }
        if (val > data.max.value) {
          data.percent.value = data.max.value
        }
      }
    )

    return {
      options,
      ...addWatch(
        data,
        (data: any) => {
          if (removed.value) {
            return
          }
          return emit('input', refsToValues(data))
        }
      )
    }
  }
})
</script>

<style lang="scss">
.repeater .block .type-col .select,
.repeater .block .type-col .select select{
  width: 100%;
}
</style>

<style scoped lang="scss">
.name-col{
  width: 60%;
}
.type-col{
  width: 27%;

  .b-select{
    width: 100%;
  }
}

.percent-col{
  width: 10%;
}
</style>
