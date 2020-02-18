<template>
  <div class="ui">
    <entity-repeater />
    <div class="mockup-test flex flex-column mt4 mb4">
      <div>{{ mockupData }}</div>
      <button @click="mockupRequest">
        Mockup request
      </button>
    </div>
    <bubbles :value="bubblesData" />
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import EntityRepeater from '@/components/repeater/EntityRepeater.vue'
import Bubbles from '@/components/bubbles/Bubbles.vue'
import { all } from '@/utils/api/entities'

export default createComponent({
  name: 'UI',
  layout: 'nothing',
  components: {
    EntityRepeater,
    Bubbles
  },
  setup () {
    const bubblesData = [
      {
        key: '6b155faf-213b-541c-385b-0331434c0511',
        text: 'ROOT'
      },
      {
        text: 'LLC',
        key: '6b921a99-5880-2092-48d1-03458a0acd5c',
        parent: '6b155faf-213b-541c-385b-0331434c0511',
        linkText: 'owns 25%'
      },
      {
        text: 'Individual',
        key: '993a6167-c94e-fb64-b7db-fa3470a0ffdc',
        parent: '6b155faf-213b-541c-385b-0331434c0511',
        linkText: 'owns 25%'
      },
      {
        text: 'LLC 2',
        key: '95fe9b87-fb13-15bd-bb5e-8aa431799d99',
        parent: '6b155faf-213b-541c-385b-0331434c0511',
        linkText: 'owns 50%'
      },
      {
        text: '4 / 1',
        key: '95fe9b87-fb13-15bd-bb5e-8aa431799d91',
        parent: '95fe9b87-fb13-15bd-bb5e-8aa431799d99',
        linkText: 'owns 50%'
      },
      {
        text: '4 / 2',
        key: '95fe9b87-fb13-15bd-bb5e-8aa431799d92',
        parent: '95fe9b87-fb13-15bd-bb5e-8aa431799d99',
        linkText: 'owns 50%'
      }
    ]
    const mockupData = ref('There will be mockup data')

    function mockupRequest () {
      all()
        .then(
          (data) => {
            mockupData.value = data
          }
        )
    }

    return {
      bubblesData,
      mockupData,
      mockupRequest
    }
  }
})
</script>

<style scoped lang="scss">
.ui{
  width: 900px;
  margin: 200px auto;
}
</style>
