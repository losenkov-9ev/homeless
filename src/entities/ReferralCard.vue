<script setup lang="ts">
export interface Referral {
  id: number
  name: string
  avatar: string
  balance: string
}

interface ReferralCardProps {
  referral: Referral
}

defineProps<ReferralCardProps>()
</script>

<template>
  <div class="referral-card">
    <img :src="referral.avatar" alt="Avatar" class="referral-avatar" />
    <div class="referral-info">
      <div class="referral-name">
        {{ referral.name }}
      </div>
      <div class="referral-balance">
        {{ referral.balance }}
        <img src="@/shared/assets/currency/ton.webp" alt="TON" class="balance-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/app/styles/mixins' as mixins;

.referral-card {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(217, 130, 0, 0.7);
  background: var(--card-bg);
  backdrop-filter: var(--card-blur);
  padding: 10px;
  border-radius: 16px;
  margin-bottom: 12px;
  color: #ffffff;
}

.referral-avatar {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  object-fit: cover;
}

.referral-name {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 3px;
}

.referral-balance {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.balance-icon {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
</style>
