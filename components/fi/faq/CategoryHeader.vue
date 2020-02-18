<template>
  <div class="columns is-vcentered card-column-header mb-2 mt-2">
    <div v-if="!state.isEditCategory" class="column pb0 drag-handle-container">
      <span class="column-drag-handle p0">&#x2630;</span>
    </div>
    <div v-if="!state.isEditCategory" class="column is-two-thirds pb0">
      <h1 class="is-size-4">
        {{ category.categoryName }}
      </h1>
    </div>
    <div v-if="!state.isEditCategory" class="column pb0 category-actions">
      <b-button
        type="is-danger"
        outlined
        class="is-pulled-right ml1"
        @click="deleteCategory(category)"
      >
        <b-icon icon="delete" size="is-small" />
      </b-button>
      <b-button
        type="is-text"
        outlined
        class="is-pulled-right"
        @click="enableEditCategory(category)"
      >
        <b-icon icon="pencil" size="is-small" class="edit-item-icon" />Edit category
      </b-button>
    </div>

    <div v-if="state.isEditCategory" class="column p0">
      <b-input
        v-model="category.categoryName"
        placeholder="Your new category"
        class="card-header-title"
      />
    </div>
    <div v-if="state.isEditCategory" class="column is-one-third pb0 has-text-right">
      <b-button type="is-info" outlined @click="saveCategory">
        ✓ Save category
      </b-button>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'CategoryHeader',
  props: {
    category: Object
  },
  setup (_, { emit }) {
    const state = reactive({
      isEditCategory: false

    })
    function deleteCategory (category:Object) {
      emit('delete', category)
    }
    function enableEditCategory () {
      state.isEditCategory = true
    }

    function saveCategory () {
      state.isEditCategory = false
    }

    return {
      state,
      deleteCategory,
      enableEditCategory,
      saveCategory
    }
  }
})
</script>
<style lang="scss">
.edit-faq {
  .drag-handle-container {
    max-width: 10px;
  }
  .edit-item-icon {
    margin-right: 10px !important
  }
}
</style>
