<script setup>

import IconCashStack from "@/components/icons/IconCashStack.vue";
</script>

<template>
  <div class="bg-white p-4 shadow-lg rounded-4 mt-4">
    <div class="d-flex flex-wrap justify-content-between">
      <h4 class="text-dark fw-bold">Transactions History</h4>
    </div>

    <div class="table-responsive mt-2">
      <table class="table">
        <thead>
          <tr style="padding-bottom: -10px !important;">
            <th class="text-grey fw-medium" style="width: 35%;" scope="col">Name</th>
            <th class="text-grey fw-medium text-center" style="width: 15%;" scope="col">Date</th>
            <th class="text-grey fw-medium text-center" style="width: 20%;" scope="col">Ammount</th>
            <th class="text-grey fw-medium text-center" style="width: 15%;" scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mt-3">
              <div class="d-flex flex-wrap" style="position: relative;top: 10px;">
                <div class="bg-icon-card"><IconCashStack /></div>
                <div class="ms-3" style="margin-top: -7px">
                  <p class="fw-bold">Project Pembuatan Website</p>
                  <p class="text-grey" style="margin-top: -13px;font-size: 12.5px">Freelance in Fiver</p>
                </div>
              </div>
            </td>
            <td class="m-3 text-center">
              <p class="fw-medium mt-3" style="font-size: 15px;">13 Juli 2023</p>
            </td>
            <td class="m-3 text-center">
              <p class="fw-bold mt-3 font-rubik" style="font-size: 17px;">Rp. 13.000.000</p>
            </td>
            <td class="m-3 text-center">
              <p class="fw-medium income-type mt-2" style="font-size: 15px;">Income</p>
            </td>
          </tr>

          <tr>
            <td class="mt-3">
              <div class="d-flex flex-wrap" style="position: relative;top: 10px;">
                <div class="bg-icon-card-expense"><IconCashStack /></div>
                <div class="ms-3" style="margin-top: -7px">
                  <p class="fw-bold">Pay Latter</p>
                  <p class="text-grey" style="margin-top: -13px;font-size: 12.5px">Shoope Pay Latter</p>
                </div>
              </div>
            </td>
            <td class="m-3 text-center">
              <p class="fw-medium mt-3" style="font-size: 15px;">25 Juli 2023</p>
            </td>
            <td class="m-3 text-center">
              <p class="fw-bold mt-3 font-rubik" style="font-size: 17px;">Rp. 1.500.000</p>
            </td>
            <td class="m-3 text-center">
              <p class="fw-medium expanse-type mt-2" style="font-size: 15px;">Expanse</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .table > :not(caption) > * > * {
    padding: 20px 0.5rem !important;
  }

  .income-type {
    background-color: #5a72cb;
    padding:5px 4px;
    border-radius: 7px;
    color: #f2f2f2;
  }

  .expanse-type {
    background-color: #f15d5d;
    padding:5px 4px;
    border-radius: 7px;
    color: #f2f2f2;
  }
</style>