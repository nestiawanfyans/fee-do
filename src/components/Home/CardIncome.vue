<script setup>
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import IconCashStack from "@/components/icons/IconCashStack.vue";
</script>

<template>
  <div class="income">
    <div class="d-flex flex-wrap justify-content-between">
      <p class="title-card">Total Income</p>
      <div class="bg-icon-card"><IconCashStack /></div>
    </div>
    <p class="card-cash font-rubik">Rp. 34.653.900,-</p>
    <a class="link-card non-underline" style="color:#858585;">
      <span class="card-text-green fw-bold me-1"><IconArrowUp /> +23,2</span> from last weeks
    </a>
  </div>
</template>