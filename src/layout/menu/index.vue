<script setup lang="ts">
import { h, ref } from 'vue'
import { NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useI18n } from '@/i18n'
import { RouterLink } from 'vue-router'
import menus from './menus'

const { t } = useI18n()

const collapsed = ref<boolean>(false)

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
        default: () => t(`menu.${menu.key}`)
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
</script>

<template>
  <n-layout-sider bordered collapse-mode="width" :collapsed="collapsed" :width="240" show-trigger
    @collapse="collapsed = true" @expand="collapsed = false">
    <n-menu :collapsed="collapsed" :options="menuOptions" :expand-icon="expandIcon" />
  </n-layout-sider>
</template>

<style scoped></style>
