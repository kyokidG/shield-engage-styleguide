<template>
  <b-collapse :class="fullClass">
    <div class="card-header">
      <p class="card-header-title ml1">
        Contact us
      </p>
    </div>
    <div class="card-content">
      <div class="content">
        <p>Have a question? Get in touch with a customer representative today.</p>
        <p><b-icon icon="email" size="is-small" class="mr2" />support@support.com</p>
        <p><b-icon icon="phone" size="is-small" class="mr2" />(833) 365-9875</p>
      </div>
    </div>
  </b-collapse>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    extraClass: {
      type: String,
      required: false
    }
  },
  setup ({ extraClass }) {
    const fullClass = computed(() => `card mt4 ${extraClass}`)

    return {
      fullClass
    }
  }
})
</script>
