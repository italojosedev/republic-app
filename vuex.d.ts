// vuex.d.ts
import { Store, createStore } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number,
    isLogged: boolean,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>,
    createStore: createStore,
    createStore
  }
}