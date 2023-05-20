<script setup lang="ts">
import type { SkeletonAnimation } from '@/types'
import { useTheme } from '@/composables/useTheme'
import SkeletonShape from '@/core/SkeletonShape.vue'

const props = defineProps<{
  animation?: SkeletonAnimation
  dark?: boolean
}>()

const { themeName } = useTheme(() => props.dark)
</script>

<template>
  <div class="sk-loader user" :class="themeName">
    <SkeletonShape class="avatar" type="avatar" :animation="animation" />
    <div class="text">
      <SkeletonShape type="text" :animation="animation" width="20%" />
      <SkeletonShape type="text" :animation="animation"  width="60%" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sk-loader.user {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid var(--sk-primary-color);

  .avatar {
    flex: 0;
  }
  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
}
</style>
