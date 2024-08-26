<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent } from 'naive-ui'
import Sider from './sider/index.vue'
import Header from './header/index.vue'

</script>

<template>
  <n-layout has-sider>
    <n-layout-sider bordered content-class="p-6">
      <Sider />
    </n-layout-sider>
    <n-layout>
        <Header />
      <n-layout-content bordered content-class="p-6">
        <slot></slot>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>