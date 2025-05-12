<script setup lang="ts">
import UiButton from '@/shared/ui/UiButton.vue'
import LevelCard from '@/entities/LevelCard.vue'
</script>

<template>
  <div class="game-panel">
    <img class="game-item" src="@/shared/assets/homeless/item-1.png" alt="" />

    <LevelCard />
    <UiButton class="panel-button" color="accent">ПОКОРМИ МЕНЯ!</UiButton>
  </div>
</template>

<style scoped lang="scss">
.panel-button {
  color: var(--font);
  position: relative;
  z-index: 10;
}

.game-panel {
  margin-top: auto;
}

.game-item {
  height: 75vh;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
