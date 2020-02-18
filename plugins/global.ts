import Vue from 'vue'
import EntityField from '@/components/repeater/EntityField.vue'
import { setRuntimeVM } from '@/utils/runtime'

Vue.component('entity-field', EntityField)
Vue.mixin({ beforeCreate: setRuntimeVM })

export default {}
