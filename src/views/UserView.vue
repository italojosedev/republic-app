

<template>
  <div class="row justify-center">
    <q-card style="min-width: 50%; max-width: 800px">
      <q-card-section>
        <!-- :style="{ 'background-image': `url(${imageData})` }" -->
        <div
          @click="choosepicture"
          class="choosepicture fit row justify-center"
        >
          <div>
            <q-avatar v-if="!imageData" icon="directions" size="100px">
              <img v-if="imageData" :src="imageData" />
            </q-avatar>
            <q-avatar v-if="imageData" size="100px">
              <img :src="imageData" />
            </q-avatar>
            <span v-if="!imageData" class="placeholder" style="cursor: pointer"
              >Escolha uma imagem</span
            >
            <input
              hidden
              class="file-input"
              ref="fileInput"
              type="file"
              @input="onSelectFile"
            />
          </div>
        </div>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md"
          ><q-input outlined v-model="firstName" label="Nome" />
          <q-input outlined v-model="lastName" label="Sobrenome" />
          <q-input outlined v-model="email" label="Email" />
          <q-input outlined v-model="phone" label="Telefone" />
          <q-input outlined v-model="rent" label="Aluguel" />
          <q-toggle v-model="isAdmin" label="Administrador" />
          <div>
            <q-btn label="Salvar" rounded type="submit" color="primary" />
            <q-btn
              label="Reiniciar"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              rounded
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>


<script lang="ts">
// import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  components: {},
  data() {
    return {
      imageData: null,
    };
  },
  methods: {
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      this.FileImage = files[0];
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    choosepicture() {
      this.$refs.fileInput.click();
    },
  },
  setup() {
    // const $q = useQuasar();

    const firstName = ref(null);
    const lastName = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const rent = ref(null);
    const isAdmin = ref(null);

    return {
      firstName,
      lastName,
      email,
      phone,
      rent,
      isAdmin,

      onSubmit() {},

      onReset() {
        firstName.value = null;
        lastName.value = null;
        email.value = false;
        phone.value = false;
        rent.value = false;
        isAdmin.value = false;
        imageData = null;
      },
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
</style>
