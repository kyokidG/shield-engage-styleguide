
<template>
  <div>
    <h1 class="is-size-4 mb2">
      Most popular categories
    </h1>
    <section v-for="category in items" :key="category.categoryId" class="section pl0 pb3 pt3">
      <h1 class="is-size-5">
        <nuxt-link :to="'#'+category.categoryId">
          {{ category.categoryName }}
        </nuxt-link>
      </h1>
    </section>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    items: Array
  }
})
</script>
