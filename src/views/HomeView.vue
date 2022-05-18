<template>
  <main>
    <div class="fit row wrap justify-between items-start content-start estilo_layout">
      <div class="col-8 ">
        <q-card class="q-pr-lg q-pl-lg q-pt-lg q-pb-md shadow-1 estilo_resumo">
          <q-card-section>
            <p class="text-h6 text-h6-add">Resumo</p>
            <div class="fit row wrap justify-start items-start content-start tam_font">
              <div class="col-3">
                <CardComponent
                  v-bind:label="'Fixo'"
                  v-bind:value="'20'"
                  v-bind:icon="'assignment'"
                  v-bind:color="'accent'"
                />
              </div>
              <div class="col-3">
                <CardComponent
                  v-bind:label="'Pago'"
                  v-bind:value="'30'"
                  v-bind:icon="'task_alt'"
                  v-bind:color="'info'"
                />
              </div>
              <div class="col-3">
                <CardComponent
                  v-bind:label="'Despesas'"
                  v-bind:value="'40'"
                  v-bind:icon="'paid'"
                  v-bind:color="'positive'"
                />
              </div>
              <div class="col-3">
                <CardComponent
                  v-bind:label="'Atrasado'"
                  v-bind:value="'50'"
                  v-bind:icon="'schedule'"
                  v-bind:color="'warning'"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 q-pl-md coluna_despesas">
        <q-card class="col-4 shadow-1 estilo_add_despesas">
          <q-card-section>
            <p class="text-h6 text-h6-add">Add Despesa</p>
            <AddOutlayComponent />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-8 q-pt-md">
        <q-card class="col-8 shadow-1 estilo_trans_recentes ">
          <q-card-section class="fit row justify-between align-center posicionamento_trans_recentes">
            <p class="text-h6 text-h6-add">Transações recentes</p>
            <div  class="cursor-pointer">
              <p class="text-subtitle1">
                Ver Tudo <q-icon name="arrow_forward_ios" />
              </p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
import CardComponent from "@/components/Home/CardComponent.vue";
import AddOutlayComponent from "@/components/Home/AddOutlayComponent.vue";
export default {
  components: {
    CardComponent,
    AddOutlayComponent,
  },
};
</script>

<style>
  .estilo_layout {
      display: flex !important;
      flex-direction: row;
      flex-wrap: wrap !important;
      justify-content: space-between !important;
      align-items: center !important;
  }

  .estilo_resumo {
      width: 100% !important;
      height: 238px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  .tam_font {
    font-size: 20px;
  }
  .estilo_col_8 {
      display: flex;
      justify-content: center;
  }

  .text-h6-add{
      align-self: baseline;
  }

  .estilo_add_despesas {
      width: 281px !important;
      height: 318px !important;
      display: flex;
      align-items: center;
      flex-direction: column;
  }

  .coluna_despesas {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .estilo_trans_recentes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    width: auto !important;
    height: 280px !important;
    background: #FFFFFF !important;
    border-radius: 14px !important;
  }

  .posicionamento_trans_recentes {
    display: flex !important;
    flex-direction: row !important;
    align-items: baseline !important;
}
</style>