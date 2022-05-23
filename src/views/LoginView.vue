<template>
  <div class="root-register ">
    <div class="text-h4-register"><img src="../assets/Logo-Completo.png" alt=""></div>
    <q-card style="min-width: 300px">
      <q-card-section>
        <div class="text-h5 txt-Login">Login</div>
        <q-input outlined v-model="email" label="Email" class="estilo-input"/>

        <q-input type="password" outlined v-model="password" label="Senha" class="estilo-input"/>
        <q-btn
          key="btn_size_round_lg"
          rounded
          color="primary"
          size=""
          label="Login"
          class="estilo-btn"
        />
        <div class="text-subtitle1">Esqueceu a senha?</div>
        <div class="text-subtitle2 text-weight-bold">Criar uma nova república</div>
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
   .root-register {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
  .q-card > div{
    height: 100%;
  }

  .text-h4-register {
      display: flex !important;
      justify-content: center;
      margin-bottom: 40px;
  }
  .q-card > div  {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .q-card {
      width: 428px;
      height: 550px;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
      border-radius: 20px;
  }

  .txt-Login {  
    display: flex;
    justify-content: center;
    margin: 45px;
  }

  .estilo-input{
    margin: 0px 60px 35px 60px;
    width: 290px;
    height: 46px; 
  }

  .estilo-btn{
    width: 282px !important;
    height: 60px !important;
    margin-top: 45px;
  }

  .text-subtitle1{
    width: 130px;
    height: 19px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin: 20px;
    text-align: center;
  }

  .text-subtitle2{
    width: 179px;
    height: 19px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #0177FB;
    margin: 20px;
    text-align: center;
    font-size: 15px !important;
  }
}
</style>
