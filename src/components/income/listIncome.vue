<script setup>

import IconTrash from "@/components/icons/IconTrash.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
</script>

<template>
  <div class="bg-white shadow-sm rounded p-2" >
    <div class="container me-2 mt-2">
      <h5 class="text-body">Daftar Pemasukan</h5><br>

      <table class="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td class="w-action">
              <button class="btn btn-danger ms-2"> <IconTrash /> </button>
              <button class="btn btn-warning text-white ms-2"> <IconPencil /> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td class="w-action">
              <button class="btn btn-danger ms-2"> <IconTrash /> </button>
              <button class="btn btn-warning text-white ms-2"> <IconPencil /> </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .w-action {
    width: 160px;
  }
</style>