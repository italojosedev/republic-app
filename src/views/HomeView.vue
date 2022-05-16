

<template>
  <main>
    <div class="fit row wrap justify-between items-start content-start">
      <div class="col-8">
        <q-card class="q-pr-lg q-pl-lg q-pt-lg q-pb-md shadow-1">
          <q-card-section>
            <p class="text-h6">Resumo</p>
            <div class="fit row wrap justify-start items-start content-start">
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
      <div class="col-4 q-pl-md">
        <q-card class="col-4 shadow-1">
          <q-card-section>
            <p class="text-h6">Add Despesa</p>
            <AddOutlayComponent />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-8 q-pt-md">
        <q-card class="col-8 shadow-1">
          <q-card-section class="fit row justify-between align-center">
            <p class="text-h6">Transações recentes</p>
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
</style>