<script setup lang="ts">
import { useRoute } from 'vue-router'
import { NAVIGATION } from '@/app/router/navigation.ts'

const route = useRoute()

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <nav class="bottom-nav">
    <router-link
      v-for="item in NAVIGATION"
      :key="item.path"
      :to="item.path"
      :class="{ active: isActive(item.path) }"
      class="nav-item"
    >
      <component :is="item.icon" class="nav-icon" />
      <span>{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<style lang="scss">
.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  background: #3C2917;
  box-shadow: 0 -4px 15px rgba(255, 255, 255, 0.05);
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 10px;
  padding-bottom: 6px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font);
  text-decoration: none;
  font-size: 12px;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 12px;
  width: 64px;
  position: relative;
  transition: all 0.2s;

  svg path {
    transition: all 0.2s;
  }
  &.active {
    color: var(--accent);

    svg path {
      fill: var(--accent);
    }
  }
}
</style>
