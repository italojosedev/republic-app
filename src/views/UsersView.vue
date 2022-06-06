<template>
  <div class="row reverse justify-between">
    <q-btn
      class="style-btn"
      unelevated
      rounded
      color="primary"
      label="Novo usuário"
      to="/users/new"
    />
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
    <q-table
      class="table-style"
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-bottom
      separator="none"
    />
  </div>
</template>

<script lang="ts">
import User from "../services/userService.ts";
import { ref, onMounted } from "vue";
export default {
  components: {},
  setup() {
    const user = ref({}) as any;
    const rows = ref([]) as any;

    onMounted(async () => {
      user.value = await User();
      rows.value = user.value.data.users;
      console.log(user.value);
    });

    const columns = [
      {
        name: "Nome",
        required: true,
        label: "Nome",
        align: "left",
        field: (row: any) => row.firstName,
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
        field: (row: Object) => 33,
      },
      {
        name: "room",
        align: "center",
        label: "Quarto",
        field: "room",
      },
    ];
    return {
      columns,
      rows,
      onMounted,
    };
  },
};
</script>

<style>
.search {
  max-width: 290px;
}
.style-btn {
  width: 14% !important;
  height: 50px !important;
  margin-top: 14px;
}
.table-style {
  font-family: 'Courier New', Courier, monospace;
}
</style>
