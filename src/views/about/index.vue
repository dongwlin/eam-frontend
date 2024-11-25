<script setup lang="ts">
import { getVersions } from '@/api/version';
import { useI18n } from '@/i18n';
import { h, isVNode, onMounted, Ref, ref, VNode } from 'vue';
import { NButton, NIcon, NTable } from 'naive-ui'
import { LogoGithub } from '@vicons/carbon';

const { t } = useI18n()

const maaVersion = ref<string>("")
const eamVersion = ref<string>("")
const goVersion = ref<string>("")
const buildAt = ref<string>("")

const handleGetVersons = () => {
  getVersions().
    then(
      (resp) => {
        if (resp.status == 200) {
          maaVersion.value = resp.data.maa_version
          eamVersion.value = resp.data.eam_version
          goVersion.value = resp.data.go_version
          buildAt.value = resp.data.build_at
        } else {
          console.error(resp)
        }
      }
    )
}

interface Info {
  id: number
  key: string
  value: string | Ref<string> | VNode
}

const createRepoButton = (repoUrl: string, text: string): VNode => {
  return h(
    NButton,
    {
      tag: 'a',
      href: repoUrl,
      target: "_blank",
      round: true,
      strong: true
    },
    {
      icon: () => h(NIcon, { component: LogoGithub }),
      default: () => text
    }
  )
}

const eamFrontendRepo = createRepoButton('https://github.com/dongwlin/eam-frontend', 'Github')
const eamBackendRepo = createRepoButton('https://github.com/dongwlin/elf-aid-magic', 'Github')

const data: Info[] = [
  { id: 1, key: "page_about.eam_frontend_repo", value: eamFrontendRepo },
  { id: 2, key: "page_about.eam_backend_repo", value: eamBackendRepo },
  { id: 3, key: "page_about.eam_version", value: eamVersion },
  { id: 4, key: "page_about.maa_version", value: maaVersion },
  { id: 5, key: "page_about.go_version", value: goVersion },
  { id: 6, key: "page_about.build_at", value: buildAt }
]

onMounted(() => {
  handleGetVersons()
})
</script>

<template>
  <n-table>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td class="w-1/2">{{ t(item.key) }}</td>
        <td class="w-1/2">
          <span v-if="isVNode(item.value)">
            <component :is="item.value" />
          </span>
          <span v-else>{{ item.value }}</span>
        </td>
      </tr>
    </tbody>
  </n-table>

</template>

<style scoped></style>