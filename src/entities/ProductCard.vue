<script setup lang="ts">
import UiButton from '@/shared/ui/UiButton.vue'
import ClockIcon from '@/shared/assets/icons/clock.svg'


export interface ProductCardProps {
  image: string
  price: number
  loop: number
  profitability: number
  title: string
}

defineProps<ProductCardProps>()
</script>

<template>
<div class="product-card">
  <div class="title">
    {{title}}
  </div>
  <div class="card-box">
    <div class="card-icon" v-html="image"></div>
    <ul class="params-list">
      <li class="list-item">
        <span>Стоимость</span> <b>{{price}} <img src="@/shared/assets/currency/ton.webp" alt=""></b>
      </li>
      <li class="list-item">
        <span>Цикл</span> <b>{{ loop }} ч <ClockIcon /></b>
      </li>
      <li class="list-item">
        <span>Доходность</span> <b>{{ profitability }} <img src="@/shared/assets/currency/ton.webp" alt=""></b>
      </li>
    </ul>
  </div>
  <UiButton color="accent">
    купить
  </UiButton>
</div>
</template>

<style scoped lang="scss">
.product-card {
  background: var(--card-bg);
  backdrop-filter: var(--card-blur);
  border: 1px solid rgba(217, 130, 0, 0.7);
  border-radius: 15px;
  padding: 10px;

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  .card-icon {
    background: linear-gradient(180deg,rgba(255, 180, 67, 1) 0%, rgba(255, 180, 67, 0) 100%);
    width: 90px;
    height: 90px;
    border-radius: 14px;
    overflow: hidden;
    flex: none;


    svg {
      width: 90px;
      height: 90px;
    }
  }

  .card-box {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  .params-list {
    display: flex;
    gap: 6px;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    b {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 700;
    }

    img, svg {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
}
</style>
