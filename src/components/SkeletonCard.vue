<script setup lang="ts">
import type { SkeletonAnimation } from '@/types'
import SkeletonItem from '@/core/SkeletonItem.vue'
import { useTheme } from '@/composables/useTheme'

const props = defineProps<{
  animation?: SkeletonAnimation
  dark?: boolean
}>()

const { themeName } = useTheme(() => props.dark)
</script>

<template>
  <div class="sk-loader card" :class="themeName">
    <SkeletonItem :animation="animation" :width="100" :height="100" :radius="50" :count="1" />
    <SkeletonItem :animation="animation" width="70%" :height="10" :radius="6" />
    <SkeletonItem :animation="animation" width="100%" :height="10" :radius="6" />
    <SkeletonItem :animation="animation" :width="80" :height="40" :radius="6" :count="2" />
  </div>
</template>

<style lang="scss" scoped>
.sk-loader.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 15px;
  width: 350px;
  height: 220px;
  border: 1px solid var(--sk-primary-color);
}
</style>
