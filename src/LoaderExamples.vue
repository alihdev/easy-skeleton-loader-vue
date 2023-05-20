<script setup lang="ts">
import SkeletonCard from '@/components/SkeletonCard.vue'
import SkeletonShape from '@/core/SkeletonShape.vue'
import SkeletonUser from './components/SkeletonUser.vue'
</script>

<template>
  <div class="sk-loader sk-ex-fonts container">
    <h3>Custom card</h3>
    <SkeletonCard animation="fade-in" />
    <h3>Custom card</h3>
    <SkeletonUser animation="wave" />
    <h3>Avatar</h3>
    <SkeletonShape type="avatar" animation="wave" />
    <h3>Button</h3>
    <SkeletonShape type="button" animation="fade-in" />
    <h3>Text</h3>
    <SkeletonShape type="text" animation="fade-in" />
    <h3>Input</h3>
    <SkeletonShape type="input" animation="fade-in" />
  </div>
</template>

<style lang="scss">
.sk-ex-fonts {
  font-family: cursive;
  color: #777777;
}
</style>
