<template>
  <div>
    <div class="fit justify-center q-pa-lg">
      <q-toolbar class="fit justify-center q-pa-md">
        <q-avatar square>
          <img src="../assets/logo.png" />
        </q-avatar>

        <q-toolbar-title>República</q-toolbar-title>
      </q-toolbar>
    </div>

    <nav>
      <q-list>
        <div v-for="menu in menus" :key="menu.label" class="list q-pb-sm">
          <div :class="menu.label === $route.name ? `border` : `border-no`" />
          <q-item
            clickable
            :to="menu.route"
            v-ripple
            class="li"
            active-class="link-active"
          >
            <!-- <IconHome class="q-mr-md"/> -->
            <component
              :is="menu.icon"
              class="q-mr-md"
               :class="menu.label === $route.name ? `linkActive` : `linkDesactive`"
            ></component>
            <q-item-section
              :class="menu.label === $route.name ? `linkActive` : `no-link`"
              >{{ menu.label }}
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import IconHome from "./icons/IconHome.vue";
import IconList from "./icons/IconList.vue";
import IconGrafic from "./icons/IconGrafic.vue";
import IconCard from "./icons/IconCard.vue";
export default {
  components: {
    RouterLink,
  },
  setup() {
    const menus: {
      route: string;
      label: string;
      icon: any;
    }[] = [
      {
        route: "/",
        label: "Início",
        icon: IconHome,
      },
      {
        route: "/outlay",
        label: "Despesas",
        icon: IconList,
      },
      {
        route: "/users",
        label: "Usuários",
        icon: IconCard,
      },
      {
        route: "/monthlyPay",
        label: "Pagamentos",
        icon: IconGrafic,
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
.linkActive {
  color: #0177fd;
  fill: #0177fd;
  font-weight: bold;
}
.linkDesactive {
  color: #A4B4CB;
  fill: #A4B4CB;
  font-weight: bold;
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