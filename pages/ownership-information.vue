<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-2 has-text-centered">
      Entity Information
    </h1>
    <div class="description has-text-centered mb6">
      To complete an application, we need to know more about your cannabis business and how it’s structured. Here’s what you need to get started:
    </div>
    <ul class="icons flex justify-between mb6">
      <li class="has-text-centered">
        <img src="@/assets/img/icon04.png" alt="Icon 01">
        <div class="text has-text-centered">
          Knowledge of all investors, partners, and owning entities
        </div>
      </li>
      <li class="has-text-centered">
        <img src="@/assets/img/icon05.png" alt="Icon 02">
        <div class="text has-text-centered">
          Percentages of ownership for all entities and persons listed
        </div>
      </li>
      <li class="has-text-centered">
        <img src="@/assets/img/icon06.png" alt="Icon 03">
        <div class="text has-text-centered">
          Business formation types of all entities represented
        </div>
      </li>
    </ul>
    <div class="button-row flex justify-center">
      <b-button type="is-light">
        Continue
      </b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
export default createComponent({
  layout: 'nothing',
  name: 'ownership-information',
  setup () {
    return {}
  }
})
</script>
<style scoped lang="scss">
.section{
  width: 600px;
  margin: 0 auto;
}

.icons li{
  width: 160px;
}
</style>
