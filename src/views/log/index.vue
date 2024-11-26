<script setup lang="ts">
import { useI18n } from "@/i18n";
import { NCard } from "naive-ui"

const {t} = useI18n()
</script>

<template>
  <n-card :title="t('page_log.title')"></n-card>
</template>

<style scoped>

</style>