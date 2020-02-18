<template>
  <section class="section">
    <h1 class="is-size-3">
      Operation Grow Ohio, LLC - Application (slides 46-58)
    </h1>
    <p>Application ID: {{ $route.params.applicationId }}</p>

    <div class="tabs is-medium mt2">
      <ul>
        <li class="is-active">
          <a>Review</a>
        </li>
        <li><a>Entities</a></li>
        <li><a>Documents</a></li>
        <li><a>Discussion</a></li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  layout: 'fi-layout',
  name: 'edit-aplication',
  transition: 'fade',
  setup () {
    return {}
  }
})
</script>
