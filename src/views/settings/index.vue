<script setup lang="ts">
import { Construction } from "@vicons/carbon";
import { NCard, NEmpty, NIcon } from "naive-ui";
import { useI18n } from '@/i18n';

const { t } = useI18n()

</script>

<template>
  <n-card :title="t('page_settings.title')">
    <n-empty :description="t('under_construction')" size="huge">
      <template #icon>
        <n-icon>
          <Construction />
        </n-icon>
      </template>
    </n-empty>
  </n-card>
</template>

<style scoped></style>