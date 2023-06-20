<template>
  <div class="card text-dark mt-4 overflow-auto">
    <div class="card-header p-4">
      Expense's Category
    </div>
    <ul class="list-group list-group-flush border-bottom-0" v-if="categories.length !== 0">
      <table>
        <tr class="border-bottom" v-for="category in categories" :key="category.id">
          <td class="p-4">{{ category.title }}</td>
          <td>
            <div class="btn-wrapper">
              <button class="btn me-3" @click="deleteCategory(category)">
                <IconTrash/>
              </button>
              <button class="btn" @click="updateCategory(category)">
                <IconPencil/>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </ul>
    <div class="text-center mt-3" v-else>
      <p>No Category found</p>
    </div>
  </div>

  <button @click="createCategory" class="btn btn-sm btn-primary mt-3 ml-auto d-flex">Add Category</button>
</template>

<script>
import IconPencil from "@/components/icons/IconPencil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import Swal from "sweetalert2";

export default {
  components: {IconTrash, IconPencil},
  props: ["categories"],
  emits: ['create-category', 'delete-category', 'update-category'],
  methods: {
    createCategory() {
      Swal.fire({
        title: 'Add new Category',
        html: `
        <div class="form-group text-start">
         <label for="title" class="form-label">Category Title</label>
         <input type="text" id="title" class="form-control shadow-none">
       </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Submit!",
        preConfirm: () => {
          const title = Swal.getPopup().querySelector('#title').value

          if (!title) {
            Swal.showValidationMessage('Field is Required')
          }

          return {
            id: Math.floor(Math.random() * 1000),
            title
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit('create-category', {
            id: result.value.id,
            title: result.value.title
          })
        }
      })
    },
    deleteCategory(category) {
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
          this.$emit('delete-category', category)
        }
      })
    },
    updateCategory(category) {
      Swal.fire({
        title: 'Update Category',
        html: `
        <div class="form-group text-start">
         <label for="title" class="form-label">Category Title</label>
         <input type="text" id="title" value="${category.title}" class="form-control shadow-none">
       </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Submit!",
        preConfirm: () => {
          const title = Swal.getPopup().querySelector('#title').value

          if (!title) {
            Swal.showValidationMessage('Field is Required')
          }

          return {
            id: category.id,
            title
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit('update-category', {
            id: result.value.id,
            title: result.value.title
          })
        }
      })
    }
  }
}
</script>