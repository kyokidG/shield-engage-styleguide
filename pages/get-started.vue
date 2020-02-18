<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-2 has-text-centered">
      Let’s get to Würk!
    </h1>
    <div class="description has-text-centered mb6">
      Würk provides the tools to help cannabis operations thrive. A greener financial future starts with our easy to follow application process.
    </div>
    <img src="@/assets/img/video.png" alt="Some video">
    <ul class="icons flex justify-between mb6">
      <li class="has-text-centered">
        <img src="@/assets/img/icon01.png" alt="Icon 01">
        <div class="text has-text-centered">
          Stay informed with guided steps along the way.
        </div>
      </li>
      <li class="has-text-centered">
        <img src="@/assets/img/icon02.png" alt="Icon 02">
        <div class="text has-text-centered">
          Share document requests and upload with ease.
        </div>
      </li>
      <li class="has-text-centered">
        <img src="@/assets/img/icon03.png" alt="Icon 03">
        <div class="text has-text-centered">
          Keep your sensitive data safe and secure.
        </div>
      </li>
    </ul>
    <div class="button-row flex justify-center">
      <b-button type="is-light">
        Get started
      </b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
export default createComponent({
  layout: 'nothing',
  name: 'get-started',
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
