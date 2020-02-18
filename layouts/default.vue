<template>
  <div>
    <Header :name="name" />

    <section class="main-content columns">
      <aside class="column is-3 section">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title ml3">
              Homepage
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div v-for="(item, key) of items" :key="key">
                <hr v-if="key !== 0">
                <nuxt-link :to="item.to" exact-active-class="is-active">
                  {{ item.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Header from '@/components/Header.vue'
import useState from '@/composables/useState'

export default createComponent({
  components: {
    Header
  },
  setup () {
    const state = { ...useState('entity', { name: 'label' }) }

    return {
      ...state,
      items: [
        {
          title: 'MRB',
          to: { path: '/entity/application' }
        },
        {
          title: 'Financial Institutions',
          to: { path: '/institution/applications' }
        }
      ]
    }
  }
})
</script>
