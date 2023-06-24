<script setup>
  import CardBalance from "@/components/Home/CardBalance.vue";
  import CardIncome from "@/components/Home/CardIncome.vue";
  import CardAchievementTarget from "@/components/Home/CardAchievementTarget.vue";
  import CardExpense from "@/components/Home/CardExpense.vue";
  import CardExpensesAnalytics from "@/components/Home/CardExpensesAnalytics.vue";
  import CardTargetPlans from "@/components/Home/CardTargetPlans.vue";
  import CardTableTransactions from "@/components/Home/CardTableTransactions.vue";
</script>

<template>
    <div class="banner-home">
      <div class="container-xxl pt-5">
        <h3>Welcome Back, Nestfyan !</h3>
        <div class="border-title"></div>
      </div>
    </div>
    <div class="container-xxl m-min-banner">
      <div class="row ">
        <div class="col-md-4">
          <CardBalance />
          <CardTargetPlans />
        </div>
        <div class="col-md-8">
          <div class="bg-white p-4 shadow-lg rounded-4">
            <div class="row">

              <div class="col-md-5">
                <CardIncome />
              </div>

              <div class="col-md-1" style="width: 1px;"><div class="border-ver-card"></div></div>

              <div class="col-md-6">
                <CardAchievementTarget />
              </div>
            </div>

            <div class="border-hoz-card"></div>

            <div class="row mt-3">
              <div class="col-md-5">
                <CardExpense />
              </div>

              <div class="col-md-1" style="width: 1px;"><div class="border-ver-card"></div></div>

              <div class="col-md-6">
                <CardExpensesAnalytics />
              </div>
            </div>
          </div>

          <CardTableTransactions />
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
