<script setup lang="ts">
import TasksBanner from '@/features/TasksBanner.vue'
import ProductCard, { type ProductCardProps } from '@/entities/ProductCard.vue'

import image1Raw from '@/shared/assets/products/item-1.svg?raw'
import image2Raw from '@/shared/assets/products/item-2.svg?raw'
import image3Raw from '@/shared/assets/products/item-3.svg?raw'
import image4Raw from '@/shared/assets/products/item-4.svg?raw'
import image5Raw from '@/shared/assets/products/item-5.svg?raw'
import image6Raw from '@/shared/assets/products/item-6.svg?raw'
import image7Raw from '@/shared/assets/products/item-7.svg?raw'
import image8Raw from '@/shared/assets/products/item-8.svg?raw'
import image9Raw from '@/shared/assets/products/item-9.svg?raw'
import image10Raw from '@/shared/assets/products/item-10.svg?raw'
import image11Raw from '@/shared/assets/products/item-11.svg?raw'

const products: ProductCardProps[] = [
  {
    image: image1Raw,
    price: 4.59,
    loop: 106,
    profitability: 0.40,
    title: 'Лапша'
  },
  {
    image: image2Raw,
    price: 1.78,
    loop: 244,
    profitability: 0.11,
    title: 'Бургер'
  },
  {
    image: image3Raw,
    price: 2.77,
    loop: 114,
    profitability: 0.05,
    title: 'Салат'
  },
  {
    image: image4Raw,
    price: 2.81,
    loop: 214,
    profitability: 0.40,
    title: 'стейк'
  },
  {
    image: image5Raw,
    price: 3.91,
    loop: 332,
    profitability: 0.31,
    title: 'пицца'
  },
  {
    image: image6Raw,
    price: 3.87,
    loop: 469,
    profitability: 0.25,
    title: 'рыба'
  },
  {
    image: image7Raw,
    price: 4.68,
    loop: 382,
    profitability: 0.28,
    title: 'рулька'
  },
  {
    image: image8Raw,
    price: 0.69,
    loop: 476,
    profitability: 0.29,
    title: 'суши'
  },
  {
    image: image9Raw,
    price: 4.28,
    loop: 141,
    profitability: 0.38,
    title: 'креветки'
  },
  {
    image: image10Raw,
    price: 0.77,
    loop: 190,
    profitability: 0.28,
    title: 'лобстер'
  },
  {
    image: image11Raw,
    price: 4.50,
    loop: 340,
    profitability: 0.47,
    title: 'секретное блюдо'
  }
]
</script>

<template>
  <div class="tasks-page page">
    <TasksBanner />

    <h2 class="title-1">Продукты</h2>

    <div class="page-list">
      <ProductCard v-for="(product, idx) in products" :key="`${idx}_${product.price}`" v-bind="product" />
    </div>
  </div>
</template>

<style scoped>
.tasks-page .title-1 {
  margin-bottom: 10px;
}
.page-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
