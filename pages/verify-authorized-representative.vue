<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-2 has-text-centered">
      Verify Authorized Representative
    </h1>
    <div class="description mb6 mt6">
      The first step is to verify your identity as the Authorized Representative for the business. The Authorized Representative serves as the point of contact on behalf of all entities represented in your application.
    </div>
    <div class="flex justify-between mb3">
      <div class="left flex-auto pr2">
        <b-field label="First name">
          <b-input v-model="firstName" />
        </b-field>
      </div>
      <div class="right flex-auto pl2">
        <b-field label="Last name">
          <b-input v-model="lastName" />
        </b-field>
      </div>
    </div>
    <b-field label="Phone number">
      <b-input v-model="phone" />
    </b-field>
    <b-field label="Role at the company">
      <b-select
        v-model="role"
        class="select-full-width"
        placeholder="Select an option"
      >
        <option
          v-for="option in options"
          :key="option.id"
          :value="option.value"
        >
          {{ option.value }}
        </option>
      </b-select>
    </b-field>
    <div class="flex mt6 mb4">
      <b-checkbox v-model="isTrueAndAuthorized">
        The information I am submitting is true and I am authorized to act on behalf of this entity and its owner(s).
      </b-checkbox>
    </div>
    <div class="flex mb5">
      <b-checkbox v-model="isAllowToShare">
        I consent to the sharing of my contact information between Work and their affiliates and agents for the purpose of servicing this application.
      </b-checkbox>
    </div>
    <highlight>
      This information will only be used to verify your identity as the Authorized Representative for this business application. Lorem ipsum dolor sit amet es disclaimer copy goes here.
    </highlight>
    <b-button type="is-light mt4">
      Submit
    </b-button>
  </section>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import Highlight from '@/components/Highlight.vue'
import guid from '@/utils/guid'

export default createComponent({
  layout: 'nothing',
  name: 'verify-authorized-representative',
  components: {
    Highlight
  },
  setup () {
    const firstName = ref('')
    const lastName = ref('')
    const phone = ref('')
    const role = ref('')
    const isTrueAndAuthorized = ref(false)
    const isAllowToShare = ref(false)

    const options = ref([
      {
        id: guid(),
        value: 'One'
      },
      {
        id: guid(),
        value: 'Two'
      },
      {
        id: guid(),
        value: 'Three'
      }
    ])
    return {
      firstName,
      lastName,
      phone,
      role,
      isTrueAndAuthorized,
      isAllowToShare,
      options
    }
  }
})
</script>
<style lang="scss">
.select-full-width .select,
.select-full-width .select select{
  width: 100%;
}
</style>
<style scoped lang="scss">
.section{
  width: 635px;
  margin: 0 auto;
}

.icons li{
  width: 160px;
}
</style>
