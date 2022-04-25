

<template>
  <div class="row reverse justify-between">
    
    <q-btn unelevated rounded color="primary" label="Novo usuário"  to="/users/new"/>
    <q-input
      outlined
      v-model="ph"
      placeholder="Pesquisar por nome"
      dense
      class="search"

    >
      <template v-slot:prepend> <q-icon name="search" /> </template>
    </q-input>
  </div>
  <div class="q-pt-md">
    <q-table :rows="rows" :columns="columns" row-key="name" hide-bottom separator="none"/>
  </div>
</template>


<script lang="ts">
const columns = [
  {
    name: "Nome",
    required: true,
    label: "Nome",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "email",
  },
  {
    name: "Aluguel",
    align: "center",
    label: "Aluguel",
    field: "rent",
  },
  {
    name: "room",
    align: "center",
    label: "Quarto",
    field: "room",
  },
 
];

const rows = [
  {
    name: "Ítalo",
    email: "italojosedev@gmail.com",
    rent: 600,
    room: "1A",
  }
];
export default {
  components: {},
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style>
.search {
  max-width: 290px;
}
</style>
