<template>
  <nav class="navbar is-primary flex justify-between" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">logo</a>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <a class="navbar-item mr4">Welcome, {{ name }}</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Header',
  props: {
    name: String
  }
})
</script>
