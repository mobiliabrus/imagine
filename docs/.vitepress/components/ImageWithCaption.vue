<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="comparison-image">
    <slot />
    <div v-if="label" class="comparison-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.comparison-image {
  text-align: center;
  margin: 16px 0;
}

.comparison-label {
  text-align: center;
  font-size: 12px;
  color: #aaa;
  margin-top: 2px;
}
</style>
