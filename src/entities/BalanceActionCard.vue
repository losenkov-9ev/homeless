<script setup lang="ts">
import UiButton from '@/shared/ui/UiButton.vue'

export interface BalanceCardData {
  id: number
  name: string
  balance: string
  buttonLabel: string
  icon: string
  variant: 'white' | 'accent'
}

interface BalanceActionCardProps {
  card: BalanceCardData
}

const { card } = defineProps<BalanceActionCardProps>()
const emit = defineEmits<{
  (e: 'action', cardId: number): void
}>()

// обработчик клика по кнопке
function onButtonClick() {
  // эмитим событие и передаём туда id карточки
  emit('action', card.id)
}
</script>

<template>
  <div class="balance-action-card" :class="card.variant">
    <div class="balance-head">
      <img class="balance-icon" :src="card.icon" alt="" />
      <div class="balance-info">
        <div class="balance-name">{{ card.name }}</div>
        <div class="balance-amount">{{ card.balance }}</div>
      </div>
    </div>
    <div class="balance-description">
      <slot name="description"></slot>
    </div>
    <UiButton @click="onButtonClick" class="balance-action" size="sm" :color="card.variant">
      {{ card.buttonLabel }}
    </UiButton>
  </div>
</template>

<style lang="scss">
@use '@/app/styles/mixins' as mixins;

.balance-action-card {
  width: 100%;
  border-radius: 15px;
  padding: 10px;
  color: #ffffff;
  border: 1px solid rgba(217, 130, 0, 0.7);
  @include mixins.bg-cover;
  backdrop-filter: var(--card-blur);

  &.white {
    background: var(--secondary-bg);
    border: 1px solid rgba(60, 127, 196, 1);
  }
  &.accent {
    background: var(--card-bg);
  }
}

.balance-icon {
  width: 31px;
  height: 31px;
  border-radius: 50%;
}

.balance-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  margin-bottom: 10px;
}

.balance-name {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.balance-amount {
  font-size: 15px;
  font-weight: 500;
}

.balance-description {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  margin-right: -10px;
  margin-left: -10px;

  span {
    color: #27aff9;
    font-weight: 500;
  }
}
</style>
