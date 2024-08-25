<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <div>{{ t('hello') }}</div>
  </div>
</template>

<style scoped>

</style>