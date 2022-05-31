<template>
  <div class="root">
    <div class="text-h4"><img src="../assets/Logo-Completo.png" alt=""></div>
    <div class="cont-1">

      <div class="voltar">Voltar</div>

      <div class="terms-cond"><b> Termos e condições </b></div>


    </div>
    <q-card class="Tamanho-Terms" style="min-width: 300px">
      <q-card-section>

        <div class="cont-2">

          <div class="q-ma-md-custom-scroll">
            <q-scroll-area style="height: 100%; max-width: 100%;">
              <div v-for="n in 100" :key="n" class="q-py-xs">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum

                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s
              </div>
            </q-scroll-area>
          </div>

        </div>

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
/*@media (min-width: 1024px) {*/
.q-ma-md-custom-scroll {
  width: 100%;
  height: 100%;
}

.cont-1 {
  height: 50px;
  width: 28%;
  margin-right: 40%;
  display: flex;
  align-items: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 800;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  color: #000000;

}

.cont-2 {
  height: 100%;
  width: 100%;

}

.voltar {
  display: flex;
  width: 37%;
  height: 100%;
  align-items: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

}


.block-1 {
  display: flex;
  width: 200px;
  height: 200px;
  background: green;
}

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

}

.q-card>div {
  height: 100%;
}

.text-h4 {
  display: flex !important;
  justify-content: center;
  margin-bottom: 40px;
}

.q-card>div {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15%;
  padding: 10px;
}

.Tamanho-Terms {
  width: 628px;
  height: 550px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 18px 20px rgb(0 0 0 / 25%);
  border-radius: 20px;


}
</style>
