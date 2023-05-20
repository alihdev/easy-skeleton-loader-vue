<script setup lang="ts">
import type { SkeletonProps } from '@/types'

interface Props extends SkeletonProps {}

const props = withDefaults(defineProps<Props>(), {
  count: 1,
  width: '100%',
  height: '16px',
  radius: 12
})

const getWidth = () => {
  if (!props.width) return '100%'
  return typeof props.width === 'number' ? `${props.width}px` : props.width
}

const getHeight = () => {
  if (!props.height) return '100%'
  return typeof props.height === 'number' ? `${props.height}px` : props.height
}

const elementInlineStyle = {
  borderRadius: `${props.radius}px`,
  width: getWidth(),
  height: getHeight(),
  animationDelay: `${props.delay}s`
}

const elementClss = { [props.animation ?? 'fade-in']: true }
</script>

<template>
  <div class="sk-loader skeleton">
    <div
      v-for="index in count"
      :key="index"
      class="element"
      :class="elementClss"
      :style="elementInlineStyle"
    />
  </div>
</template>
