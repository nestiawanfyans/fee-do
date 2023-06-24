<script setup>

import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconCashStack from "@/components/icons/IconCashStack.vue";
</script>

<template>
  <div class="expense">
    <div class="d-flex flex-wrap justify-content-between">
      <p class="title-card">Total Expense</p>
      <div class="bg-icon-card-expense"><IconCashStack /></div>
    </div>
    <p class="card-cash font-rubik">Rp. 6.563.900,-</p>
    <a class="link-card non-underline" style="color:#858585;">
      <span class="card-text-red fw-bold me-1"><IconArrowDown /> +23,2</span> from last weeks
    </a>
  </div>
</template>

<style scoped>

</style>