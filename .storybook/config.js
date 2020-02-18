import '!style-loader!css-loader!sass-loader!../assets/scss/helpers.scss'; 
import '!style-loader!css-loader!sass-loader!../assets/scss/variables.scss'; 
import '!style-loader!css-loader!sass-loader!../stories/storybook.scss'; 
import { configure } from '@storybook/vue'

import Vue from 'vue'
import Buefy from 'buefy'
import VueCompositionApi from '@vue/composition-api'


Vue.use(VueCompositionApi)
// Import Vue plugins
import Vuex from 'vuex'
// Install Vue plugins.
Vue.use(Buefy)