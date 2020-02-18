/* eslint-disable vue/no-v-html */
<template>
  <div>
    <section
      v-for="category in items"
      :id="category.categoryId"
      :key="category.categoryId"
      class="section pl0 pb3 pt3"
    >
      <h1 class="is-size-4 mb2">
        {{ category.categoryName }}
      </h1>
      <b-collapse
        v-for="q of category.questions"
        :key="q.questionId"
        class="card"
        :open="isOpen[q.question]"
        animation="none"
        @open="isOpen[q.question] = true"
        @close="isOpen[q.question] = false"
      >
        <div slot="trigger" slot-scope="props" class="card-header" role="button">
          <p class="card-header-title">
            {{ q.question }}
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
          </a>
        </div>
        <div class="card-content">
          <div class="content sanitized" v-html="getSanitized(q.answer)" />
        </div>
      </b-collapse>
      <div v-if="category.questions.length === 0" class="columns is-mobile section">
        <div class="column is-half is-offset-one-quarter">
          There are no questions in this category
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import sanitizeHtml from 'sanitize-html' 
import { SANITIZE_DEFAULTS } from '../../../plugins/wysiwyg'

export default createComponent({
  props: {
    items: Array
  },
  setup () {
    function getSanitized (html: string) {
      return sanitizeHtml(html, SANITIZE_DEFAULTS)
    }

    return {
      isOpen: {},
      getSanitized
    }
  }
})
</script>
