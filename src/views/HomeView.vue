<script setup>
  import IconCashStack from "@/components/icons/IconCashStack.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";
  import IconArrowUp from "@/components/icons/IconArrowUp.vue";
  import IconArrowDown from "@/components/icons/IconArrowDown.vue";
  import IconCircleFill from "@/components/icons/IconCircleFill.vue";
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
          <div class="bg-white p-4 shadow-lg rounded-4">
            <div class="d-flex flex-wrap justify-content-between">
              <p class="title-card">Total Balance</p>
              <div class="bg-icon-card"><IconCashStack /></div>
            </div>
            <p class="card-cash font-rubik">Rp. 34.653.900,-</p>
            <a class="link-card">Check Detail Balence <IconArrowRight /></a>
          </div>
        </div>
        <div class="col-md-8">
          <div class="bg-white p-4 shadow-lg rounded-4">

            <div class="row">
              <div class="col-md-5">
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
              </div>
              <div class="col-md-1" style="width: 1px;"><div class="border-ver-card"></div></div>
              <div class="col-md-6">
                <div class="d-flex flex-wrap justify-content-between">
                  <p class="title-card">Achievement Targets</p>
                </div>
                <div class="d-flex flex-wrap bd-highlight">
                  <p class="card-cash txt-sm font-rubik">Rp. 34.653.900,-</p>
                  <p class="font-sm ms-2 mt-1 text-grey">used from Rp. 50.000.000,-</p>
                </div>
                <div class="d-flex flex-wrap">
                  <div class="bar-used" style="width: 75%;"></div>
                  <div class="bar-non-used" style="width: 24%;"></div>
                </div>
              </div>
            </div>

            <div class="border-hoz-card"></div>

            <div class="row">
              <div class="col-md-5">
                <div class="expense">
                  <div class="d-flex flex-wrap justify-content-between">
                    <p class="title-card">Total Expense</p>
                    <div class="bg-icon-card"><IconCashStack /></div>
                  </div>
                  <p class="card-cash font-rubik">Rp. 6.563.900,-</p>
                  <a class="link-card non-underline" style="color:#858585;">
                    <span class="card-text-red fw-bold me-1"><IconArrowDown /> +23,2</span> from last weeks
                  </a>
                </div>
              </div>

              <div class="col-md-1" style="width: 1px;"><div class="border-ver-card"></div></div>

              <div class="col-md-6">
                <div class="d-flex flex-wrap justify-content-between">
                  <p class="title-card">Expenses Analytics</p>
                </div>
                <div class="d-flex flex-wrap">
                  <div class="bar-used" style="width: 65% !important;"></div>
                  <div class="bar-non-used" style="width: 34% !important;"></div>
                </div>
                <div class="d-flex flex-row bd-highlight mt-3">
                  <div class="expenses-used" style="width: 65%">
                    <p class="text-sm text-grey">
                      <IconCircleFill style="width:13px;color: #5a72cb;margin-right:5px;margin-top:-2px;"/>
                      <span  style="font-size: 13px;">Pembayaran Hutang</span>
                    </p>
                    <p class="expenses-cash">Rp.11.500.000</p>
                  </div>
                  <div class="expenses-non-used" style="width: 34%">
                    <p class="text-sm text-grey">
                      <IconCircleFill style="width:13px;color: #dedede;margin-right:5px;margin-top:-2px;"/>
                      <span  style="font-size: 13px;">Other</span>
                    </p>
                    <p class="expenses-cash">Rp.3.490.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .banner-home {
    background-color: #0c101c;
    height: 240px;
    margin-top: -0.5px;
    color: #f2f2f2;
  }

  .border-title {
     width: 80px;
    height: 2px;
    background-color: #f2f2f2;
    border-radius: 50px;
  }

  .title-card {
    color: #7a7878;
    font-weight: 500;
    font-size: 16px;
  }

  .m-min-banner {
    margin-top: -100px;
  }

  .bg-icon-card {
    background-color: rgb(226 230 245);
    padding: 4px 13px;
    border-radius: 10px;
    font-size: 19px;
    color: #5a72cb;
    font-weight: 700;
    position: relative;
    top: -5px;
  }

  .text-grey {
    color: #837878;
  }

  .card-cash {
    font-weight: 700;
    font-size: 25px;
  }

  .txt-sm {
    font-size: 17px;
  }

  .link-card {
    margin-top: -10px;
    text-decoration: underline;
    position: relative;
    top: -12px;
  }

  .non-underline {
    text-decoration: none !important;
  }

  .card-text-green {
    color: #2cd35b;
  }

  .card-text-red {
    color: #dc5454;
  }

  .border-ver-card {
    height: 100%;
    width: 4px;
    background-color: #a2a2a2;
    border-radius: 50px;
  }

  .border-hoz-card {
    height: 4px;
    width: 100%;
    background-color: #a2a2a2;
    border-radius: 50px;
    margin: 10px 0;
  }

  .font-sm {
    font-size: 14px;
  }

  .bar-used {
    height: 10px;
    background-color: #5a72cb;
    border-radius: 50px;
  }

  .bar-non-used {
    height: 10px;
    background-color: #dedede;
    border-radius: 50px;
    margin-left: 2px;
  }

  .expenses-cash {
    margin-top: -10px;
    font-size: 16px;
  }
</style>
