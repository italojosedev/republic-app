<template>
  <div class="root">
    <div class="text-h4"><img src="../assets/Logo-Completo.png" alt="" /></div>
    <q-card>
      <q-card-section>
        <div class="text-h5 txt-Login">Registro</div>
        <div class="container-a">
          <div class="bloco-form">
            <q-input
              class="style-input"
              outlined
              :rules="[(val) => val.length > 0 || 'Campo Vazio']"
              v-model="state.republicName"
              label="Nome da Republica"
              @focus="clearErrorRegister"
            />
            <q-input
              class="style-input"
              outlined
              :rules="[(val) => val.length > 0 || 'Campo Vazio']"
              v-model="state.description"
              label="Descrição"
              @focus="clearErrorRegister"
            />
            <q-input
              type="email"
              name="email"
              class="style-input"
              outlined
              :rules="[(val) => val.length > 0 || 'Campo Vazio']"
              v-model="state.email"
              label="Email"
              @focus="clearErrorRegister"
            />
            <q-input
              type="password"
              mask="################"
              class="style-input"
              outlined
              :rules="[(val) => val.length >= 8 || 'Mínimo 8 caracteres']"
              v-model="state.password"
              label="Senha"
              @focus="clearErrorRegister"
            />
          </div>
          <div class="bloco-b"></div>
          <div class="bloco-form">
            <q-input
              class="style-input"
              outlined
              :rules="[(val) => val.length > 0 || 'Campo Vazio']"
              v-model="state.firstName"
              label="Primeiro Nome"
              @focus="clearErrorRegister"
            />
            <q-input
              class="style-input"
              outlined
              :rules="[(val) => val.length > 0 || 'Campo Vazio']"
              v-model="state.lastName"
              label="Sobrenome"
              @focus="clearErrorRegister"
            />
            <q-input
              type="tel"
              class="style-input"
              outlined
              mask="(##) ##### - ####"
              :rules="[(val) => val.length >= 17 || 'Campo Incompleto']"
              v-model="state.phofe"
              label="Telefone"
              @focus="clearErrorRegister"
            />
            <span class="erroRegister" v-html="state.result"></span>
          </div>
        </div>
        <div class="container-b">
          <div class="style-cad">
            <q-btn
              key="btn_size_round_lg"
              rounded
              color="primary"
              label="Cadastro"
              class="estilo-btn"
              @click="submitRegister"
            />
          </div>
          <router-link to="/login" class="style-log">Login</router-link>
        </div>
      </q-card-section>
      <q-separator inset />
    </q-card>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { register } from "@/services/registerService";
import { useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      republicName: "",
      description: "",
      firstName: "",
      lastName: "",
      phofe: "",
      email: "",
      password: "",
      result: "",
    });
    const router = useRouter()
    async function submitRegister() {
      const data = {
        republic: {
          name: state.republicName,
          description: state.description,
        },
        user: {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          phone: state.phofe,
          password: state.password,
        },
      };
      const response = await register(data);
      console.log(response);
      validateRegister(response);

      function validateRegister(response: any) {
        if (state.email.indexOf("@") == -1 || state.email.indexOf(".") == -1) {
          state.result = "Usuario Inválido";
        } else if (response.message != "") {
          state.result = response.message;
        }
        if (response.republic.actived == true) {
          router.push({
            name: 'Welcome',
            params: { republicName: state.republicName },
          });
        }
      }
    }

    function clearErrorRegister() {
      state.result = "";
    }
    return {
      state,
      submitRegister,
      clearErrorRegister,
    };
  },
};
</script>
<style>
/*@media (min-width: 1024px) {*/
.style-cad {
  color: #ffffff;
}
.estilo-btn {
  width: 282px !important;
  height: 60px !important;
  margin-top: 14px;
}
.style-log {
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
.style-input {
  margin: 0px 60px 20px 60px;
  width: 100% !important;
}

.bloco-form {
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bloco-b {
  border: 1px solid #aab4c1;
  height: 345px;
  margin: 0px 20px 0px 20px;
}

.container-a {
  display: flex;
  flex-direction: row;
  width: 700px;
  height: auto;
  justify-content: center;
}
.container-b {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
.q-card > div {
  height: 100%;
}

.style-bot {
  width: 282px !important;
  height: 60px !important;
  margin-top: 45px;
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
  width: 948px;
  height: auto;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 10px !important ;
  position: relative;
  padding: 10px;
  flex-direction: row;
}

.txt-Login {
  display: flex;
  justify-content: center;
  margin: 45px;
}
.erroRegister {
  color: red;
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-content: stretch;
}
</style>

