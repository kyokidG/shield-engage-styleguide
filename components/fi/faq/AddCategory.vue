<template>
  <div>
    <div v-if="state.isAddCategoryEnabled || enabled" class="w-full">
      <div class="columns is-vcentered card-column-header mb-2 mt-2">
        <div class="column is-two-thirds pb0">
          <b-input
            v-model="state.newCategory"
            placeholder="Your new category"
            class="card-header-title"
          />
        </div>
        <div class="column pb0">
          <b-button type="is-info" outlined @click="addCategory()">
            + Add category
          </b-button>
        </div>
      </div>
    </div>
    <div v-if="!state.isAddCategoryEnabled" class="add-category-container">
      <b-button
        type="is-info"
        outlined
        expanded
        class="mt4"
        @click="enableAddCategory()"
      >
        + Add new category
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'AddCategory',
  props: {
    enabled: Boolean
  },
  setup ({ enabled }, { emit }) {
    const state = reactive({
      isAddCategoryEnabled: enabled,
      newCategory: ''
    })

    function enableAddCategory () {
      state.isAddCategoryEnabled = true
    }

    function addCategory () {
      if (state.newCategory && state.newCategory.length > 0) {
        emit('add', state.newCategory)
        state.newCategory = ''
        state.isAddCategoryEnabled = false
      }
    }

    return {
      state,
      enableAddCategory,
      addCategory
    }
  }
})
</script>
<style>
.add-category-container, .add-question-container {
  width: auto; text-align: center; margin: 50px;
}
</style>
