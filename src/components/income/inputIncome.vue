
<template>
  <div class="bg-white shadow-sm rounded p-2">
    <div class="ms-2 me-2 mt-2">
      <h5 class="text-body">Tambah Pemasukan</h5>
      <br />

      <div class="from row">
        <div class="col-md-6">
          <!--Judul-->
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Judul</span>
            <input type="text" class="form-control" v-model="titleIncome" placeholder="Judul Pemasukan" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="input-group mb-3">
            <select class="form-select" v-model="category">
              <option selected disabled>Kategori Pemasukan</option>
              <option v-for="categori in categories" :key="categori.id">{{ categori.title }}</option>
            </select>
          </div>
        </div>

        <!--jumlah Pemasukan-->
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Rp.</span>
          <input type="number" class="form-control" v-model="money" placeholder="Jumlah Pemasukan" />
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
          <button class="btn btn-primary" @click="createIncome">Tambah Pemasukan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: ['categories'],
  emits: ['create-income'],
  data() {
    return {
      titleIncome : '',
      money: '',
      category: 'Kategori Pemasukan',
      dateNow: new Date().toISOString().substring(0, 10),
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
    createIncome() {
      if(this.titleIncome == null || this.money == null || this.category == 'Kategori Pemasukan') {
        this.toast.fire({
          icon: "error",
          title: "Gagal Tambah Pemasukan"
        })
      } else {
        this.$emit("create-income", {
          id: Math.floor(Math.random() * 1000),
          title: this.titleIncome,
          money: this.money,
          created_at: this.dateNow,
          updated_at: this.dateNow,
          category: this.category
        });
        this.titleIncome  = ''; this.money = ''; this.category = 'Kategori Pemasukan';
      }
    }
  }
}
</script>

<style scoped></style>