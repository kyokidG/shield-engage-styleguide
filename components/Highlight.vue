<template>
  <div class="highlight-panel p4">
    <slot />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'highlight'
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
.highlight-panel{
  background-color: $white-ter;
  color: $grey-light;
  border-radius: $radius;
}
</style>
