
<script setup>
  import InputIncome from "@/components/income/inputIncome.vue";
  import ListIncome from "@/components/income/listIncome.vue";
</script>

<template>
  <h1>Pemasukan</h1>
  <p>Record Data Pemasukan kamu, agar uang kamu hemat!!</p><br>

  <div class="container">
    <InputIncome /> <br>
    <ListIncome /> <br>
  </div>

</template>

<script>
  export default {
    // components: ,
    data() {
      return {
        income: [
          {
            id : 1312312123,
            title: "project website",
            money: 123000,
            created_at: "2023-02-23",
            updated_at: "2023-02-23",
            category: "Gaji"
          }
        ]
      }
    },
    methods: {

    }
  }

</script>

<style scoped></style>
