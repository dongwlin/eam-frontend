<script setup lang="ts">
import { NLayoutHeader, NSpace, NDropdown, NButton, NIcon } from 'naive-ui'
import { Translate, Moon, Sun } from "@vicons/carbon"
import { useUiStore } from '@/store'
import languageOptions from './languages'

const uiStore = useUiStore()


</script>

<template>
  <n-layout-header bordered class="p-4">
    <n-space align="center" justify="end" item-class="flex">
      <n-dropdown :options="languageOptions" trigger="hover" @select="uiStore.setLocale">
        <n-button text class="text-[1.5rem] mx-2">
          <n-icon>
            <Translate />
          </n-icon>
        </n-button>
      </n-dropdown>
      <n-button text class="text-[1.5rem] mx-2" @click="uiStore.toggleDarkMode">
        <n-icon>
          <Moon v-if="uiStore.isDarkMode" />
          <Sun v-else />
        </n-icon>
      </n-button>
    </n-space>
  </n-layout-header>
</template>

<style scoped></style>