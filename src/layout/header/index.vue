<script setup lang="ts">
import { ref } from 'vue'
import { NSpace, NDropdown, NButton } from 'naive-ui'
import { useUiStore } from '@/store'
import type { Locale } from '@/i18n'

const uiStore = useUiStore()

const languageOptions = [
  {
    label: 'English',
    key: 'enUS'
  },
  {
    label: '简体中文',
    key: 'zhCN'
  }
]

const currentLanguage = ref<string>('English')

const handleLanguageChange = (locale: Locale) => {
  uiStore.setLocale(locale)
  const selectedLanguage = languageOptions.find(option => option.key == locale)
  if (selectedLanguage) {
    currentLanguage.value = selectedLanguage.label
  }
}
</script>

<template>
  <n-space align="center" justify="end">
    <n-dropdown :options="languageOptions" trigger="hover" @select="handleLanguageChange">
      <n-button>
        <div class="i-carbon-ibm-watson-language-translator w-5 h-5"></div>
      </n-button>
    </n-dropdown>
    <n-button @click="uiStore.toggleDarkMode">
      <div v-if="uiStore.isDarkMode" class="i-carbon-moon w-5 h-5"></div>
      <div v-else class="i-carbon-sun w-5 h-5"></div>
    </n-button>
  </n-space>
</template>

<style scoped></style>