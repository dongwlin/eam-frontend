import {defineStore} from 'pinia'
import {ref} from 'vue'
import { useI18n } from '@/i18n'
import type { Locale } from '@/i18n'
import {useOsTheme} from 'naive-ui'

export const useUiStore = defineStore('ui', () => {
  const osOsTheme = useOsTheme()

  const isDarkMode = ref<boolean>(osOsTheme.value === 'dark')
  const locale = ref<Locale>('enUS')

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  }

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    useI18n().setLocale(newLocale)
  }

  return {
    isDarkMode,
    locale,
    toggleDarkMode,
    setLocale
  }
})