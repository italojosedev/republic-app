<template>
  <div class="root">
    <div class="text-h4">República</div>
    <q-card style="min-width: 300px">
      <q-card-section>
        <div class="text-h5">Login</div>
        <q-input outlined v-model="email" label="Email" />

        <q-input outlined v-model="password" label="Senha" />
        <q-btn
          key="btn_size_round_lg"
          rounded
          color="primary"
          size="lg"
          label="Logar"
          class="full-width"
        />
        <div class="text-subtitle1">esqueceu a senha?</div>
        <div class="text-subtitle2 text-weight-bold">Criar nova república</div>
      </q-card-section>

      <q-separator inset />
    </q-card>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    return {
      password,
      email,
    };
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
