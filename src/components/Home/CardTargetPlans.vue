<script setup>
import IconPlus from "@/components/icons/IconPlus.vue";
import IconHomeColors from "@/components/icons/IconHomeColors.vue";
import IconThreeDot from "@/components/icons/IconThreeDot.vue";
import IconMotorBikeColors from "@/components/icons/IconMotorBikeColors.vue";
</script>

<template>
  <div class="bg-white p-4 shadow-lg rounded-4 mt-4">
    <div class="d-flex flex-wrap justify-content-between">
      <p class="title-card">Target Plans</p>
      <div class="bg-icon-card hover-cursor">
        <a><IconPlus /></a>
      </div>
    </div>

    <!-- List Target -->
    <div class="list-target mt-3 mb-2">
      <div class="d-flex flex-wrap justify-content-between">
        <div class="icons-title-plans d-flex flex-row">
          <IconMotorBikeColors class="icon-bg-plans"/>
          <div class="title-des">
            <h5 class="fw-bold">Buy a Motor Bike</h5>
            <p class="fw-light text-sub-title-plans">Target date: 17 Oktober 2023</p>
          </div>
        </div>
        <a><icon-three-dot class="icon-three-dot-plans"/></a>
      </div>

      <div class="d-flex flex-wrap justify-content-between mt-2">
        <p class="fw-medium font-rubik">Rp. 13.550.000</p>
        <p class="text-grey fw-medium fo">Target: <span class="font-rubik">Rp. 43.000.000</span></p>
      </div>

      <div class="d-flex flex-wrap">
        <div class="bar-used" style="width: 37%;"></div>
        <div class="bar-non-used" style="width: 62%;"></div>
      </div>
    </div>

    <div class="list-target mt-3 mb-2">
      <div class="d-flex flex-wrap justify-content-between">
        <div class="icons-title-plans d-flex flex-row">
          <icon-home-colors class="icon-bg-plans"/>
          <div class="title-des">
            <h5 class="fw-bold">Buy a House</h5>
            <p class="fw-light text-sub-title-plans">Target date: 2 Januari 2023</p>
          </div>
        </div>
        <a><icon-three-dot class="icon-three-dot-plans"/></a>
      </div>

      <div class="d-flex flex-wrap justify-content-between mt-2">
        <p class="fw-medium font-rubik">Rp. 23.000.000</p>
        <p class="text-grey fw-medium">Target: <span class="font-rubik">Rp. 200.000.000</span></p>
      </div>

      <div class="d-flex flex-wrap">
        <div class="bar-used" style="width: 15%;"></div>
        <div class="bar-non-used" style="width: 84%;"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .icon-bg-plans {
    background-color: rgb(237 241 243);
    width: 55px;
    height: 55px;
    padding: 6px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .list-target {
    border-top: 2px solid #f2f2f2;
    padding-top: 15px;
  }

  .bg-gray {
    background-color: #fafafa;
    opacity: 1;
    z-index: 1;
  }

  .text-sub-title-plans {
    color: rgb(133, 133, 133);;
    font-size: 13px;
  }

  .icon-three-dot-plans {
    width: 25px;
    height: 25px;
    position: relative;
    right: 8px;
    color: #a1a1a1;
  }
</style>