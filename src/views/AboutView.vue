<template>
  <div class="about">
    

      <q-input outlined v-model="text" label="Outlined" />
  </div>
</template>
<script lang="ts">

import {ref} from 'vue'
export default {
  setup() {
    const text = ref('hello world')

    return {
      text
    }
  },

}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
