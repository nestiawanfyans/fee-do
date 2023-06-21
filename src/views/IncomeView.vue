<script setup>
import InputIncome from '@/components/income/inputIncome.vue'
import ListIncome from '@/components/income/listIncome.vue'
</script>

<template>
  <div class="container mt-4">
    <h1>Pemasukan</h1>
    <p>Record Data Pemasukan kamu, agar uang kamu hemat!!</p>
    <br />

    <div>
      <InputIncome :categories="categories" @create-income="handleCreateIncome" /> <br />
      <ListIncome
        :incomes="incomes"
        :categories="categories"
        @delete-income="handelDeleteIncome"
        @update-income="handleUpdateIncome"
      />
      <br />
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

const api_url = 'http://localhost:3000';
function handlePathApi(path) {
  return api_url + path;
}

export default {
  components: ['InputIncome', 'ListIncome'],
  mounted() {
    // Get Categories
    axios.get(handlePathApi('/categories')).then((res) => {
      this.categories = res.data;
    }).catch((err) => {
      console.log("Error Get Categories : " + err);
    });

    // Get Incomes
    axios.get(handlePathApi('/incomes')).then((res) => {
      this.incomes = res.data;
    }).catch((err) => {
      console.log("Error Get Incomes : " + err);
    });
  },
  data() {
    return {
      categories: [],
      incomes: [],
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
      axios.post(handlePathApi("/incomes"), incomes).then(res => {
        this.incomes = [...this.incomes, res.data];

        return this.toast.fire({
          icon: "success",
          title: "Berhasil Menambahkan Pemasukan"
        })
      }).catch(err => {
        console.log("Error Post Incomes : " + err);
        return this.toast.fire({
          icon: "error",
          title: "Gagal Menambahkan Pemasukan"
        })
      });
    },

    handelDeleteIncome(index){
      axios.delete(handlePathApi("/incomes/" + this.incomes[index].id)).then(() => {
        this.incomes.splice(index, 1)
        return this.toast.fire({
          icon: "success",
          title: "Berhasil Menghapus Pemasukan"
        });
      }).catch(err => {
        console.log("Error Delete : " + err);
        return this.toast.fire({
          icon: "error",
          title: "Gagal Menghapus Pemasukan"
        });
      });
    },

    handleUpdateIncome(dataUpdate) {
      axios.patch(handlePathApi("/incomes/" + dataUpdate.id), dataUpdate).then((res) => {
        const dataIncomes = this.incomes.findIndex(data => data.id == dataUpdate.id);
        this.incomes[dataIncomes] = res.data;

        return this.toast.fire({
          icon: "success",
          title: "Berhasil Merubah Pemasukan"
        });
      }).catch(err => {
        console.log("Error Update Incomes : " + err);
        return this.toast.fire({
          icon: "error",
          title: "Berhasil Merubah Pemasukan"
        })
      })
    }
  }
}
</script>

<style scoped></style>