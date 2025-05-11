<script setup lang="ts"></script>

<template>
  <div class="referral-info-banner">
    <div class="info-box">
      <h2 class="info-title">
        Заголовок <br>
        2 строки
      </h2>
      <p class="info-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/app/styles/mixins' as mixins;
.referral-info-banner {
  margin-top: 10px;
  flex: none;
  width: 100%;
  background-image: url('@/shared/assets/bg/referal-info-bg.jpg');
  border: 1px solid #AF5604;
  @include mixins.bg-cover;
  padding: 24px 18px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 10px;
}

.info-box {
  max-width: 276px;
  span {
    color: #27aff9;
  }
}

.info-title {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 7px;
}
.info-description {
  color: rgba(255, 255, 255, 0.7);
  max-width: 225px;
}
</style>
