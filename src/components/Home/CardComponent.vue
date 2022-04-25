<template>
  <q-item>
    <q-item-section side>
      <q-avatar
        size="48px"
        :class="color || 'card1'"
        :text-color="color"
        :icon="icon || 'directions'"
      >
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{value}}</q-item-label>
      <q-item-label caption>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "Not found",
    },
    value: {
      type: String,
      default: "NN",
    },
    icon: {
      type: String,
      default: 'directions'
    },
    color: {
      type: String,
      default: 'card1'
    }
  },
  setup(props) {
    return {
      label: props.label,
      value: props.value,
      icon: props.icon,
      color: props.color
    };
  },
};
</script>

<style>
.accent {
  background-color: #efecfd;
}
.info {
  background-color: #e4f8fb;
}
.positive {
  background-color: #e5f7ed;
}
.warning {
  background-color: #fdf1e2;
}
</style>