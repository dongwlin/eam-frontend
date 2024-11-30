<script setup lang="ts">
import { NLayoutHeader, NSpace, NDropdown, NButton, NIcon } from 'naive-ui'
import { Translate, Moon, Sun } from "@vicons/carbon"
import { useUiStore } from '@/store'
import type { DropdownOption } from 'naive-ui'

const uiStore = useUiStore()

const languageOptions: DropdownOption[] = [
  {
    label: 'English',
    key: 'enUS'
  },
  {
    label: '简体中文',
    key: 'zhCN'
  }
]
</script>

<template>
  <n-layout-header bordered class="p-6">
    <n-space align="center" justify="end">
      <n-dropdown :options="languageOptions" trigger="hover" @select="uiStore.setLocale">
        <n-button>
          <n-icon>
            <Translate />
          </n-icon>
        </n-button>
      </n-dropdown>
      <n-button @click="uiStore.toggleDarkMode">
        <n-icon>
          <Moon v-if="uiStore.isDarkMode" />
          <Sun v-else />
        </n-icon>
      </n-button>
    </n-space>
  </n-layout-header>
</template>

<style scoped></style>