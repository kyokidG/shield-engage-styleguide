<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-2 has-text-centered">
      Provide Ownership Information
    </h1>
    <div class="description mb6 mt6">
      Now we need to know about the primary entity’s ownership. Please list all owning interests with ownership percentages equal to or greater than 10% each.
    </div>
    <h3 class="is-size-5 mt8 mb6">
      Who owns Operation Grow Ohio, LLC?
    </h3>
    <entity-repeater v-model="fields" />
    <highlight class="mt4">
      <div class="flex">
        <div class="left">
          <img src="@/assets/img/icon07.png" alt="Icon 02">
        </div>
        <div class="right">
          Entities are frequently owned by multiple owning interests, including other entities and individual persons. All entities and/or persons with ownership equal to or greater than 10% and above must be represented to continue.
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
import EntityRepeater from '@/components/repeater/EntityRepeater.vue'

export default createComponent({
  layout: 'nothing',
  name: 'provide-ownership',
  components: {
    Highlight,
    EntityRepeater
  },
  setup () {
    const fields = ref([])
    return {
      fields
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
