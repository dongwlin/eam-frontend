<script setup lang="ts">
import { computed } from 'vue'
import { NConfigProvider, darkTheme, zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import Layout from '@/layout/index.vue'
import { useUiStore } from '@/store'

const uiStore = useUiStore()

const theme = computed(() => {
  return uiStore.isDarkMode ? darkTheme : null
})

const locale = computed(() => {
  switch (uiStore.locale) {
    case 'zhCN':
      return zhCN
    case 'enUS':
      return enUS
  }
})

const dateLocale = computed(() => {
  switch (uiStore.locale) {
    case 'zhCN':
      return dateZhCN
    case 'enUS':
      return dateEnUS
  }
})
</script>

<template>
  <n-config-provider class="h-full" :theme="theme" :locale="locale" :date-locale="dateLocale">
    <Layout class="h-full">
      <router-view />
    </Layout>
  </n-config-provider>
</template>

<style scoped></style>
