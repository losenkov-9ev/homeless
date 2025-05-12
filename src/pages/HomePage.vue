<script setup lang="ts">
import GamePanel from '@/widgets/GamePanel.vue'
</script>

<template>
  <div class="home-page page">
    <GamePanel />
  </div>
</template>

<style scoped lang="scss">
.page-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 24px;
}
</style>
