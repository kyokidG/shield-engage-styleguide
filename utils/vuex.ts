import { computed } from '@vue/composition-api'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { useState, useGetters, useMutations, useActions } from '@/interfaces/vuex'
import { getRuntimeVM } from '@/utils/runtime'

export enum Helper {
  State,
  Getters,
  Mutations,
  Actions,
}

type Helpers = useState | useGetters | useMutations | useActions;

/**
 * TypeError: Cannot read property '_modulesNamespaceMap' of undefined
 * You must get `runtimeVM` in real time in the calculation properties.
 *
 * @param mappedFn Mapped function.
 */
function handleComputed (mappedFn: Function) {
  return computed(() => mappedFn.call(getRuntimeVM()))
}

/**
 * Handle methods.
 * @param mappedFn Mapped function.
 */
function handleMethods<T> (mappedFn: Function): T {
  return mappedFn.bind(getRuntimeVM())
}

const helpers = {
  [Helper.State]: { fn: mapState, handler: handleComputed },
  [Helper.Getters]: { fn: mapGetters, handler: handleComputed },
  [Helper.Mutations]: { fn: mapMutations, handler: handleMethods },
  [Helper.Actions]: { fn: mapActions, handler: handleMethods }
}

/**
 * Create vuex helper like useState | useGetters | useMutations | useActions.
 * @param h Helper key it can be anything from Helpers type.
 */
export default function createVuexHelper<T extends Helpers> (h: Helper) {
  const helper = helpers[h]

  return ((...args: any[]) => {
    // I use ignore here because of this https://github.com/Microsoft/TypeScript/issues/28486
    // @ts-ignore
    const mapper = (helper.fn as T)(...args)
    const dictionary: any = {}
    Object
      .keys(mapper)
      .forEach(
        (key) => {
          dictionary[key] = helper.handler<typeof mapper>(mapper[key])
        }
      )

    return dictionary
  }) as T
}

export * from '@/interfaces/vuex'
