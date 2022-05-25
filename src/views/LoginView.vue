<template>
  <div class="root">
    <div class="text-h4"><img src="../assets/Logo-Completo.png" alt="" /></div>
    <q-card class="tamanho-login">
      <q-card-section class="">
        <div class="text-h5 txt-Login">Login</div>
        <q-input
          type="email"
          name="email"
          outlined
          v-model="state.email"
          label="Email"
          class="estilo-input"
          @focus="clearErrorLogin"
        />
        <q-input
          type="password"
          outlined
          v-model="state.password"
          label="Senha"
          class="estilo-input"
          @focus="clearErrorLogin"
        />
        <span v-if="state.showErrorLogin" class="erroLogin"
          >Senha ou email incorreto!</span
        >
        <q-btn
          key="btn_size_round_lg"
          rounded
          color="primary"
          size=""
          label="Login"
          class="estilo-btn"
          @click="submitLogin"
        />
        <div class="text-subtitle1">Esqueceu a senha?</div>
        <router-link to="/register" class="text-subtitle2 text-weight-bold"
          >Criar uma nova república</router-link
        >
      </q-card-section>

      <q-separator inset />
    </q-card>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import axios from "axios";
import { Login } from "../services/loginService.ts";
import type { UserLogin } from "../types/userTypes.ts";
export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
      showErrorLogin: false,
    });
    async function submitLogin() {
      validate();
      const data: UserLogin = {
        email: state.email,
        password: state.password,
      };
      const response = await Login(data);
      console.log(response);
    }

    function validate() {
      if (
        state.password.length < 8 ||
        state.password.length > 16 ||
        state.email == "" ||
        state.email.indexOf("@") == -1 ||
        state.email.indexOf(".") == -1
      ) {
        state.showErrorLogin = true;
      }
    }
    function clearErrorLogin() {
      state.showErrorLogin = false;
    }
    return {
      state,
      clearErrorLogin,
      submitLogin,
    };
  },
};
</script>

<style>
@media (min-width: 450px) {
  .tamanho-login {
    width: 428px !important;
    height: 550px !important;
  }
  .text-h4 {
    display: flex !important;
    justify-content: center;
    margin-bottom: 40px;
  }
  .q-card > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .q-card {
    width: 428px;
    height: 550px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 20px;
  }
  .txt-Login {
    display: flex;
    justify-content: center;
    margin: 45px;
  }
  .estilo-input {
    margin: 0px 60px 35px 60px;
    width: 290px;
    height: 46px;
  }
  .estilo-btn {
    width: 282px !important;
    height: 60px !important;
    margin-top: 14px;
  }
  .text-subtitle1 {
    width: 130px;
    height: 19px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin: 20px;
    text-align: center;
  }
  .text-subtitle2 {
    width: 179px;
    height: 19px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #0177fb;
    margin: 20px;
    text-align: center;
    font-size: 15px !important;
    text-decoration: none;
  }
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
  .erroLogin {
    color: red;
  }
}
</style>
