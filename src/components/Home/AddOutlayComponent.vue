<template>
  <q-select
    outlined
    v-model="model"
    :options="options"
    label="Categoria"
    class="q-pt-sm"
    dense
  />
  <q-input outlined v-model="value" label="Valor" prefix="R$" class="q-pt-md" />
  <q-input outlined v-model="obs" label="Observação" class="q-pt-md" dense />
  <q-btn
    unelevated
    rounded
    color="primary"
    label="Salvar"
    dense
    class="full-width q-mt-md"
  />
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    return {
      model: ref(null),
      value: ref(null),
      obs: ref(null),
      options: ["casa", "comida"],
    };
  },
};
</script>

<style>
</style>