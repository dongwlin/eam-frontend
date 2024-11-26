<script setup lang="ts">
import { NCard } from "naive-ui"
import { useI18n } from '@/i18n';


const { t } = useI18n()

</script>

<template>
  <n-card :title="t('page_settings.title')"></n-card>
</template>

<style scoped></style>