<template>
  <div>
    <div class="text-h5 text-center"><img src="../assets/Logo-Completo.png" alt=""></div>
    <nav>
      <q-list>
        <div v-for="menu in menus" :key="menu.label" class="list">
          <div :class="menu.label === $route.name ? `border` : `border-no`" />
          <q-item
            clickable
            :to="menu.route"
            v-ripple
            class="li"
            active-class="link-active"
          >
            <q-item-section>{{ menu.label }} </q-item-section>
          </q-item>
        </div>
      </q-list>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  setup() {
    const menus: {
      route: string;
      label: string;
    }[] = [
      {
        route: "/",
        label: "Início",
      },
      {
        route: "/outlay",
        label: "Despesas",
      },
      {
        route: "/users",
        label: "Usuários",
      },
      {
        route: "/monthlyPay",
        label: "Pagamentos",
      },
    ];

    return {
      menus,
    };
  },
};
</script>

<style>
.list {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.li {
  margin-left: 30px;
  width: 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
}
.text {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.border {
  width: 8px;
  border-radius: 0 10px 10px 0;
  height: 40px;
  background: #0177fd;
}
.border-no {
  width: 8px;
  border-radius: 0 10px 10px 0;
  height: 40px;
  background: none;
}
.link-active {
  background: #e5f1ff;
  border-radius: 6px;
  color: #0177fd;
}
</style>