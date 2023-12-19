<script setup lang="ts">
defineProps<{ msg: string }>();

const a = ref("6666");
</script>

<template>
  <n-button type="primary">{{ a }}</n-button>
  <n-button type="warning">{{ a }}</n-button>
</template>

<style lang="scss" scoped>

</style>
