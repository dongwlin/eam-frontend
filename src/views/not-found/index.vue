<script setup lang="ts">
import { NResult } from 'naive-ui'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <n-result status="404" title="404" :description="t('page_not_found')" />
</template>

<style scoped></style>