
<script setup>
  import InputIncome from "@/components/income/inputIncome.vue";
  import ListIncome from "@/components/income/listIncome.vue";
</script>

<template>
  <h1>Pemasukan</h1>
  <p>Record Data Pemasukan kamu, agar uang kamu hemat!!</p><br>

  <div class="container">
    <InputIncome :categories="categories" @create-income="handleCreateIncome" /> <br>
    <ListIncome :incomes="incomes" :categories="categories" @delete-income="handelDeleteIncome" @update-income="handleUpdateIncome"/> <br>
  </div>

</template>

<script>
  import Swal from "sweetalert2";

  export default {
    components: ['InputIncome', 'ListIncome'],
    data() {
      return {
        categories: [
          {id: Math.floor(Math.random() * 1000), name: "Gaji"},
          {id: Math.floor(Math.random() * 1000), name: "Uang Jajan"},
          {id: Math.floor(Math.random() * 1000), name: "Pemberian Orang Tua"},
          {id: Math.floor(Math.random() * 1000), name: "Jual Barang"},
          {id: Math.floor(Math.random() * 1000), name: "Pay Latter"},
        ],
        incomes: [
          {
            id : Math.floor(Math.random() * 1000),
            title: "project website",
            money: 123000,
            created_at: "2023-02-23",
            updated_at: "2023-02-23",
            category: "Gaji"
          }
        ],
        toast: Swal.mixin({
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }),
      }
    },
    methods: {
      handleCreateIncome(incomes) {
        this.incomes = [...this.incomes, incomes];

        return this.toast.fire({
          icon: "success",
          title: "Berhasil Menambahkan Pemasukan"
        })
      },

      handelDeleteIncome(index){
        this.incomes.splice(index, 1)

        return this.toast.fire({
          icon: "success",
          title: "Berhasil Menghapus Pemasukan"
        })
      },

      handleUpdateIncome(dataUpdate) {
        this.incomes[dataUpdate.updateIndex] = dataUpdate

        return this.toast.fire({
          icon: "success",
          title: "Berhasil Merubah Pemasukan"
        })
      }
    }
  }

</script>

<style scoped></style>
