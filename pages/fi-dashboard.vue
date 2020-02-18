<template>
  <section class="section flex justify-center flex-column">
    <div class="flex justify-between items-center mx2">
      <h1 class="is-size-3 has-text-grey-light">
        Applications
      </h1>
      <b-button type="is-light is-medium new-application-button">
        Add New
      </b-button>
    </div>
    <div class="flex justify-center flex-column m2">
      <b-tabs v-model="activeTab" position="is-centred" class="b-tabs-root">
        <b-tab-item label="Active">
          <div v-if="!!notificationString" class="flex justify-between items-center flex-auto mb4 p2 has-text-grey has-background-grey-lighter notification-root">
            <div>{{ notificationString }}</div>
            <div style="cursor: pointer" @click="closeHandlerNotification">
              <b-icon icon="close" />
            </div>
          </div>
          <page />
        </b-tab-item>

        <b-tab-item label="Closed">
          <page is-closed />
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<script >

import { createComponent, ref } from '@vue/composition-api'
import Page from '@/components/fi-dashboard/Page.vue'

export default createComponent({
  name: 'FiDashboard',
  components: {
    Page
  },
  setup () {
    const notificationString = ref('Welcome back! There are 2 new applications since you last signed in ( sample user notification).')
    const activeTab = ref(0)
    /** have to implement request for notification string */
    const closeHandlerNotification = () => {
      notificationString.value = null
    }
    return {
      closeHandlerNotification,
      notificationString,
      activeTab
    }
  }
})
</script>

<style scoped>
  .b-tabs-root >>> .tabs li {
    min-width: 150px;
  }
  .b-tabs-root >>> .tabs li.is-active a {
    border-bottom: 3px solid #cfcfcf;
    color: #8e8e8e;
  }
  .b-tabs-root >>> .tabs li a {
    border-bottom: 0px solid #cfcfcf;
    color: #777777;
  }
</style>

<style scoped lang="scss" >

   .new-application-button {
     min-width: 150px;
     font-size: 15px;
   }

  .b-tabs-root {
    .tab-content {
      padding: 15px 0;
    }

    .tabs {
     li {
        min-width: 150px;

        &.is-active {
          a {
            border-bottom: 3px solid #cfcfcf;
            color: #8e8e8e;
          }
        }
        a {
          border-bottom: 0px solid #cfcfcf;
          color: #777777;
        }
      }
    }
  }
  .notification-root {
    border-left: 5px solid #bebebe;
    border-radius: 3px;
  }

</style>
