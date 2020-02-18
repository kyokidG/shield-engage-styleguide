<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-2 has-text-centered">
      Primary Entity Information
    </h1>
    <div class="description mb6 mt6">
      To apply for financial services, we need to know about your business and its owning entities. Let’s start with the information requested below.
    </div>
    <h3 class="is-size-5 mt8 mb6">
      What type of business is the primary entity?
    </h3>
    <b-input
      v-model="operation"
      :disabled="true"
      class="mb4"
    />
    <b-select
      v-model="role"
      class="select-full-width mb6"
      placeholder="Please select"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
      >
        {{ option.value }}
      </option>
    </b-select>
    <highlight>
      <div class="flex">
        <div class="left">
          <img src="@/assets/img/icon02.png" alt="Icon 02">
        </div>
        <div class="right">
          Entity “types” refer to how the business was formed. Business formation type selections include Limited Liability Company (LLC), Corporations, Partnership, and Sole Proprietorship.
        </div>
      </div>
    </highlight>
    <b-button type="is-light mt4">
      Submit
    </b-button>
  </section>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import Highlight from '@/components/Highlight.vue'
import guid from '@/utils/guid'

export default createComponent({
  layout: 'nothing',
  name: 'primary-entity',
  components: {
    Highlight
  },
  setup () {
    const operation = ref('Operation Grow Ohio')
    const role = ref('')

    const options = ref([
      {
        id: guid(),
        value: 'One'
      },
      {
        id: guid(),
        value: 'Two'
      },
      {
        id: guid(),
        value: 'Three'
      }
    ])
    return {
      operation,
      role,
      options
    }
  }
})
</script>
<style lang="scss">
.select-full-width .select,
.select-full-width .select select{
  width: 100%;
}
</style>
<style scoped lang="scss">
.section{
  width: 635px;
  margin: 0 auto;
}

.icons li{
  width: 160px;
}

.highlight-panel img{
  width: 112px;
  max-width: 112px;
}
</style>
