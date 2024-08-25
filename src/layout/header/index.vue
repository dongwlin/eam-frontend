<script setup lang="ts">
import { ref } from 'vue'
import { NSpace, NDropdown, NButton } from 'naive-ui'
import { useUiStore } from '@/store'
import type { Locale } from '@/i18n'
import { useI18n } from '@/i18n'

const uiStore = useUiStore()
const { t } = useI18n()

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
  <div>
    <n-space align="center" justify="end">
      <n-dropdown :options="languageOptions" trigger="hover" @select="handleLanguageChange">
        <n-button>{{ t('language') }}</n-button>
      </n-dropdown>
      <n-button @click="uiStore.toggleDarkMode">
        <template v-if="uiStore.isDarkMode">Light</template>
        <template v-else>Dark</template>
      </n-button>

    </n-space>
  </div>
</template>

<style scoped></style>