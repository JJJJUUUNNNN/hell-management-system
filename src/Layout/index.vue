<template>
  <n-layout has-sider class="layout-box">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered> 颐和园路 </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-footer bordered> 成府路 </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { menuOptions } from "@/test/index";

const activeKey = ref<string | null>(null);
const collapsed = ref(true);
</script>

<style lang="scss" scoped>
.layout-box {
  height: 100vh;
}
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
