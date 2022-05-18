<template>
  <q-select
    outlined
    v-model="model"
    :options="options"
    label="Categoria"
    class="q-pt-sm larg_componentes"
    dense
  />
  <q-input outlined v-model="value" label="Valor" prefix="R$" class="q-pt-md larg_componentes" />
  <q-input outlined v-model="obs" label="Observação" class="q-pt-md larg_componentes" dense />
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
      options: ["Casa", "Comida"],
    };
  },
};
</script>

<style>
.larg_componentes {
  width: 226px;
}
</style>