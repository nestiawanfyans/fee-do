<script setup>

import IconCircleFill from "@/components/icons/IconCircleFill.vue";
</script>

<template>
  <div class="d-flex flex-wrap justify-content-between">
    <p class="title-card">Expenses Analytics</p>
  </div>
  <div class="d-flex flex-wrap">
    <div class="bar-used" style="width: 45% !important;"></div>
    <div class="bar-non-used" style="width: 54% !important;"></div>
  </div>
  <div class="d-flex flex-row bd-highlight mt-3">
    <div class="expenses-used" style="width: 45%">
      <p class="text-sm text-grey">
        <IconCircleFill style="width:13px;color: #5a72cb;margin-right:5px;margin-top:-2px;"/>
        <span  style="font-size: 13px;">Pembayaran Hutang</span>
      </p>
      <p class="expenses-cash">Rp.11.500.000</p>
    </div>
    <div class="expenses-non-used" style="width: 54%">
      <p class="text-sm text-grey">
        <IconCircleFill style="width:13px;color: #dedede;margin-right:5px;margin-top:-2px;"/>
        <span  style="font-size: 13px;">Other</span>
      </p>
      <p class="expenses-cash">Rp.3.490.000</p>
    </div>
  </div>
</template>

<style scoped>

</style>