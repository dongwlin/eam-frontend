import { computed, ref } from 'vue'
import enUS from '../locales/enUS.json'
import zhCN from '../locales/zhCN.json'

export type Locale = 'enUS' | 'zhCN'
type Messages = Record<string, any>

const messages: Record<Locale, Messages> = {
  enUS,
  zhCN
}

const locale = ref<Locale>('enUS')

const getNestedValue = (obj: any, keyPath: string): any => {
  return keyPath.split('.').reduce((acc, key) => acc && acc[key], obj)
}


const t = (key: string): string => {
  const value = getNestedValue(messages[locale.value], key)
  return value || key
}

const setLocale = (newLocale: Locale) => {
  locale.value = newLocale
}

const currentLocale = computed(() => locale.value);

export function useI18n() {
  return {
    t,
    setLocale,
    currentLocale
  };
}