<script setup lang="ts">
import { computed } from 'vue'
import type { SkeletonProps, SkeletonTypes } from '@/types'
import SkeletonItem from './SkeletonItem.vue'

interface Props extends SkeletonProps {
  type?: SkeletonTypes
}

const props = defineProps<Props>()

const getWidth = computed(() => {
  if (props.width) return props.width

  if (props.type === 'avatar') return 100
  if (props.type === 'button') return 80
  return '100%'
})

const getHeight = computed(() => {
  if (props.height) return props.height

  if (props.type === 'avatar') return 100
  if (props.type === 'button') return 40
  if (props.type === 'input') return 40
  return 10
})

const getRadius = computed(() => {
  if (props.radius) return props.radius
  if (props.type === 'avatar') return 50
  return 6
})
</script>

<template>
  <SkeletonItem
    :animation="animation"
    :width="getWidth"
    :height="getHeight"
    :radius="getRadius"
    :count="count"
    :delay="delay"
  />
</template>
