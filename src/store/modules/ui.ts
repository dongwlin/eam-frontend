import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n, type Locale } from '@/i18n'
import { useOsTheme } from 'naive-ui'

export const useUiStore = defineStore(
  'ui',
  () => {
    const osOsTheme = useOsTheme()

    const isDarkMode = ref<boolean>(osOsTheme.value === 'dark')
    const locale = ref<Locale>('enUS')
    const collapsed = ref<boolean>(false)

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    }

    const setLocale = (newLocale: Locale) => {
      locale.value = newLocale
      useI18n().setLocale(newLocale)
    }

    const menuCollapse = () => {
      collapsed.value = true
    }

    const menuExpand = () => {
      collapsed.value = false
    }

    return {
      isDarkMode,
      locale,
      collapsed,
      toggleDarkMode,
      setLocale,
      menuCollapse,
      menuExpand
    }
  },
  {
    persist: true,
  }
)