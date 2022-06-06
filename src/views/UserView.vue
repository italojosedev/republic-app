<template>
  <div class="row justify-center style-box-main">
    <q-card style="min-width: 50%; max-width: 800px">
      <q-card-section class="card-principal">
        <!-- :style="{ 'background-image': `url(${imageData})` }" -->
        <div>
          <div
            @click="choosepicture"
            class="choosepicture fit row justify-center style-box-img style-img"
          >
            <q-avatar
              v-if="!state.imageData"
              icon="add_photo_alternate"
              size="100px"
              color="blue"
            >
              <img v-if="state.imageData" :src="state.imageData" />
            </q-avatar>
            <q-avatar v-if="state.imageData" size="100px">
              <img :src="state.imageData" />
            </q-avatar>
            <span
              v-if="!state.imageData"
              class="placeholder"
              style="cursor: pointer"
            ></span>
            <input
              hidden
              class="file-input"
              ref="fileInput"
              type="file"
              @input="onSelectFile"
            />
          </div>
        </div>
        <q-form class="q-gutter-md style-form"
          ><q-input
            outlined
            :rules="[(val) => val.length > 0 || 'Campo Vazio']"
            v-model="state.firstName"
            label="Nome"
            class="campo-form"
          />
          <q-input
            outlined
            :rules="[(val) => val.length > 0 || 'Campo Vazio']"
            v-model="state.lastName"
            label="Sobrenome"
            class="campo-form"
          />
          <q-input
            type="number"
            outlined
            min="0"
            prefix="R$ "
            :rules="[(val) => val.length > 0 || 'Campo Vazio']"
            v-model="state.rent"
            label="Aluguel"
            class="campo-form"
          />
          <q-input
            type="password"
            outlined
            mask="################"
            :rules="[(val) => val.length >= 8 || 'Mínimo 8 caracteres']"
            v-model="state.password"
            label="Senha"
            class="campo-form"
          />
          <q-input
            :rules="[(val) => val.length > 0 || 'Campo Vazio']"
            name="email"
            type="email"
            outlined
            v-model="state.email"
            label="Email"
            class="campo-form"
          />
          <q-input
            outlined
            type="tel"
            v-model="state.phone"
            label="Telefone"
            class="campo-form"
            mask="(##) ##### - ####"
            :rules="[(val) => val.length >= 17 || 'Campo Incompleto']"
          />
          <q-toggle
            label="Administrador"
            v-model="state.isAdmin"
            color="primary"
            class="campo-form"
            keep-color
          />
          <div v-html="state.result" class="erroRegister"></div>
          <div class="style-form">
            <q-btn
              key="btn_size_round_lg"
              rounded
              color="primary"
              label="Salvar"
              class="estilo-btn"
              @click="submitUser"
            />
            <q-btn
              label="Reiniciar"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm estilo-btn"
              rounded
              @click="reset"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
// import { useQuasar } from "quasar";
import { reactive, ref } from "vue";
import { createUser } from "../services/userService";
import type { User } from "@/types/userTypes";
import router from "@/router";
export default {
  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      rent: "",
      email: "",
      phone: "",
      password: "",
      result: "",
      isAdmin: false,
      imageData: "",
    });
    const fileInput = ref();

    function onSelectFile() {
      const input = fileInput.value;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          state.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    }
    function choosepicture() {
      fileInput.value.click();
    }

    async function submitUser() {
      const data = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        rent: state.rent,
        isAdmin: state.isAdmin,
        password: state.password,
        profileImage: state.imageData,
      };
      const response = await createUser(data);
      console.log(response);
      validateRegister(response);
      function validateRegister(response: any) {
        if (
          (state.email.indexOf("@") == -1 || state.email.indexOf(".") == -1,
          state.firstName.length == 0,
          state.lastName.length == 0,
          state.rent.length == 0,
          state.password.length == 0,
          state.email.length == 0,
          state.phone.length == 0)
        ) {
          state.result = "Usuario Inválido";
        } else if (response.createdAt != "") {
          state.result = response.message;
        }
        if (response.id.length != 0) {
          router.push({
            name: "Usuários",
          });
        }
      }
    }
    function reset() {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      (state.password = ""), (state.phone = "");
      state.rent = "";
      state.result = "";
      state.isAdmin = false;
      state.imageData = "";
    }
    return {
      state,
      submitUser,
      onSelectFile,
      choosepicture,
      reset,
      fileInput,
    };
  },
};
</script>

<style>
.search {
  max-width: 290px;
}
.choosepicture {
  cursor: pointer;
  padding: 10px;
}
.style-img {
  flex-direction: row;
  justify-content: center !important;
  align-items: center !important;
  margin-bottom: 8%;
}
.style-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.card-principal {
  width: auto;
  height: auto !important;
  margin-bottom: 5% !important;
  margin-top: 5%;
}
.style-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.campo-form {
  width: 350px;
  margin-bottom: 40px;
  justify-content: center;
}
.style-box-main {
  margin-top: 6%;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.estilo-btn {
  width: 80% !important;
  height: 60px !important;
}
.erroRegister {
  color: red;
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-content: stretch;
}
</style>
