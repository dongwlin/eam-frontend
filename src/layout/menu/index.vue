<script setup lang="ts">
import { h, ref } from 'vue'
import { NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useI18n } from '@/i18n'
import { RouterLink } from 'vue-router'
import menus from './menus'
import { useUiStore } from '@/store'

const { t } = useI18n()
const uiStorm = useUiStore()

const processHash = (hash: string): string[] => {
  if (hash.startsWith("#/")) {
    hash = hash.substring(2);
  }
  const queryIndex = hash.indexOf('?');
  if (queryIndex !== -1) {
    hash = hash.substring(0, queryIndex);
  }
  return hash.split('/');
}

const selected = ref<string>(processHash(location.hash)[0])

const renderIcon = (icon: string) => {
  return () => h('div', { class: icon })
}

const menuOptions: MenuOption[] = []
for (const menu of menus) {
  menuOptions.push({
    label: () => h(
      RouterLink,
      {
        to: menu.to
      },
      {
        default: () => t(`page_${menu.key}.title`)
      }
    ),
    key: menu.key,
    icon: renderIcon(menu.icon)
  })
}

const expandIcon = (option: MenuOption) => {
  const menu = menus.find(value => value.key === option.key)
  if (menu) {
    return h('div', {
      class: menu.icon
    })
  }
  return null
}

const handleSelected = (key: string, _: MenuOption) => {
  selected.value = key
}
</script>

<template>
  <n-layout-sider bordered collapse-mode="width" :collapsed="uiStorm.collapsed" :width="240" show-trigger
    @collapse="uiStorm.menuCollapse" @expand="uiStorm.menuExpand">
    <n-menu :collapsed="uiStorm.collapsed" :options="menuOptions" :expand-icon="expandIcon" :value="selected"
      :on-update:value="handleSelected" />
  </n-layout-sider>
</template>

<style scoped></style>
