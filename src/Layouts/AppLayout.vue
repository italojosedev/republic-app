<template>
  <q-layout view="lHh lpR lFf">
    <span v-if="isLogged">
      <q-header class="bg-white text-dark">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            {{ $route.name }}
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        show-if-above
        v-model="leftDrawerOpen"
        side="left"
        behavior="desktop"
        bordered
      >
        <!-- drawer content -->
        <Nav />
      </q-drawer>
    </span>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from "vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const isLogged = true;

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      isLogged,
      toggleLeftDrawer,
    };
  },
};
</script>