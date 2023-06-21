<script setup>
</script>

<template>
  <div class="bg-white shadow-sm rounded p-2" >
    <div class="ms-2 me-2 mt-2">
      <div v-if="isNotUpdate">
        <h5 class="text-body">Daftar Pemasukan</h5><br>

        <table class="table table-borderless">
          <tbody>
          <tr v-for="(income, index) in incomes" :key="income.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ income.title }}</td>
            <td>{{ currencyFormat(income.money) }}</td>
            <td>{{ income.category }}</td>
            <td>{{ formattedDate(income.created_at) }}</td>
            <td class="w-action">
              <button class="btn btn-sm btn-danger ms-2" @click="deleteIncome(index)">Hapus</button>
              <button class="btn btn-sm btn-warning text-white ms-2" @click="updateDataIncome(index)">Ubah</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div v-else>
        <div class="d-flex flex-wrap mb-4">
          <button class="btn btn-sm btn-primary me-3" @click="cancelUpdate"> cancel </button>
          <h5 class="text-body ms-2">Perbaharui Pemasukan - {{ this.dataUpdate.title }}</h5><br>
        </div>

        <div class="from row">
          <div class="col-md-6">
            <!--Judul-->
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Judul</span>
              <input type="text" class="form-control" v-model="dataUpdate.title" placeholder="Judul Pemasukan" />
            </div>
          </div>

          <div class="col-md-6">
            <!--jumlah Pemasukan-->
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Rp.</span>
              <input type="number" class="form-control" v-model="dataUpdate.money" placeholder="Jumlah Pemasukan" />
            </div>
          </div>

          <div class="input-group mb-3">
            <select class="form-select" v-model="dataUpdate.category">
              <!--                <option selected disabled>Kategori Pemasukan</option>-->
              <option v-for="categori in categories" :key="categori.id">{{ categori.title }}</option>
            </select>
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
            <button class="btn btn-primary" @click="UpdateIncome">Update Pemasukan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swal from "sweetalert2";
  export default {
    props: ['incomes', 'categories'],
    emits: ['delete-income', 'update-income'],
    data() {
      return {
        isNotUpdate: true,
        dataUpdate: {
          title: null,
          money: null,
          created_at: null,
          updated_at: this.dateNow,
          category: null,
        },
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
      formattedDate(dateString) {
        const parts = dateString.split('-'); // Memisahkan tanggal, bulan, dan tahun
        const year = parts[0];
        const month = parts[1];
        const date = parts[2];

        return `${date} ${this.getMonthName(month)} ${year}`;
      },
      getMonthName(month) {
        const monthNames = [
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
          'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        return monthNames[parseInt(month) - 1];
      },
      currencyFormat(value) {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(value);
      },

      deleteIncome(index){
        if (index != null) {
          Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33"
          }).then((result) => {
            if (result.isConfirmed) {
              this.$emit('delete-income', index)
            }
          });
        } else {
          return this.toast.fire({
            icon: "error",
            title: "Index Tidak Tersedia"
          })
        }
      },

      cancelUpdate() {
        this.isNotUpdate = !this.isNotUpdate
      },

      updateDataIncome(index) {
        if (index != null) {
          this.dataUpdate.updateIndex = index,
          this.dataUpdate = this.incomes[index],
          this.isNotUpdate = !this.isNotUpdate
        } else {
          return this.toast.fire({
            icon: "error",
            title: "Index Tidak Tersedia"
          })
        }
      },

      UpdateIncome(){
        if(this.dataUpdate.title === "" || this.dataUpdate.money === "" || this.dataUpdate.category === "" || this.dataUpdate.updateIndex === null) {
          return this.toast.fire({
            icon: "error",
            title: "Gagal Update Data"
          })
        } else {
          this.isNotUpdate = !this.isNotUpdate
          this.$emit('update-income', this.dataUpdate)
        }
      }
    }
  }
</script>

<style scoped>
  .w-action {
    width: 160px;
  }
</style>