<script setup lang="ts"></script>

<template>
  <div class="level-card">
    <div class="card-info">
      <img src="@/shared/assets/avatars/avatar-1.jpg" alt="" />
      <div class="card-box">
        <b>Уровень 1</b>
        <span>Осталось: 0\7</span>
      </div>
    </div>

    <div class="card-profit">+100 <img src="@/shared/assets/currency/trash-coin.png" alt="" /></div>
  </div>
</template>

<style scoped lang="scss">
.level-card {
  padding: 10px;
  background: var(--card-bg);
  backdrop-filter: var(--card-blur);
  margin-bottom: 11px;
  border: 1px solid rgba(217, 130, 0, 0.7);
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 10;

  img {
    border-radius: 50%;
    width: 41px;
    height: 41px;
  }

  .card-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .card-box {
    display: flex;
    flex-direction: column;
    gap: 3px;

    b {
      font-size: 16px;
    }
    span {
      font-size: 12px;
      color: var(--font);
      opacity: 0.7;
    }
  }

  .card-profit {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #ffb443;

    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
