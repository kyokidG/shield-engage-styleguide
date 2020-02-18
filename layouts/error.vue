<template>
  <div class="container">
    <h1 class="is-size-1 mt4">
      {{ error.statusCode === 404 ? '404 Page not found' : 'An error occurred' }}
    </h1>
    <nuxt-link to="/">
      ← Go back to homepage
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'error'
})
</script>
