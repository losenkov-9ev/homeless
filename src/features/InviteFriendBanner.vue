<script setup lang="ts">
import UiButton from '@/shared/ui/UiButton.vue'
import CopyButton from '@/shared/ui/CopyButton.vue'
</script>

<template>
  <div class="invite-friend-banner">
    <div class="banner-inner">
      <div class="invite-text">
        <span>30%</span> ПРЯМО <span>В TON</span>
        ОТ ВАШИХ ДРУЗЕЙ
      </div>
      <div class="banner-buttons">
        <UiButton color="accent" class="invite-button">Пригласить друга</UiButton>
        <CopyButton />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.invite-friend-banner {
  margin-top: 10px;
  width: 100%;
  background-image: url('@/shared/assets/bg/wallet-connect-bg.jpg');
  border: 1px solid rgba(148, 148, 148, 1);
  flex: none;

  padding: 18px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.banner-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  width: 100%;
}
.invite-button {
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
}

.invite-text {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;

  span {
    color: var(--accent);
  }
}
</style>
