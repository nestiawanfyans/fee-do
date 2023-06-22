<script setup>

import IconCashStack from "@/components/icons/IconCashStack.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
</script>

<template>
  <div class="bg-white p-4 shadow-lg rounded-4">
    <div class="d-flex flex-wrap justify-content-between">
      <p class="title-card">Total Balance</p>
      <div class="bg-icon-card"><IconCashStack /></div>
    </div>
    <p class="card-cash font-rubik">Rp. 34.653.900,-</p>
    <a class="link-card">Check Detail Balence <IconArrowRight /></a>
  </div>
</template>

<style scoped>

</style>