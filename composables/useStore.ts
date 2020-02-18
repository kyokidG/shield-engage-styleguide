import { computed } from '@vue/composition-api'
import { Store } from 'vuex'
import { getRuntimeVM } from '@/utils/runtime'

/**
 * Get current store.
 */
export default function useStore<TState> () {
  const vm = getRuntimeVM()
  const store = computed(() => vm.$store as Store<TState>)
  return store
}
