<template>
  <div class="card text-dark mt-4 overflow-auto">
    <div class="card-header p-4">
      Expense's List
    </div>
    <ul class="list-group list-group-flush border-bottom-0" v-if="expenses.length !== 0">
      <table>
        <tr class="border-bottom" v-for="expense in expenses" :key="expense.id">
          <td class="p-4">{{ expense.title }}</td>
          <td>{{
              new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
              }).format(expense.money)
            }}
          </td>
          <td>{{ expense.category }}</td>
          <td>{{ expense.date }}</td>
          <td>
            <div class="btn-wrapper">
              <button class="btn me-3" @click="deleteExpense(expense)">
                <IconTrash/>
              </button>
              <button class="btn" @click="updateExpense(expense)">
                <IconPencil/>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </ul>
    <div class="text-center mt-3" v-else>
      <p>No expense found</p>
    </div>
  </div>

  <button @click="createExpense" class="btn btn-sm btn-primary mt-3 ml-auto d-flex">Add Expense</button>
</template>

<script>
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import Swal from "sweetalert2";

export default {
  components: {IconPencil, IconTrash},
  props: ["expenses", "categories"],
  emits: ['create-expense', 'delete-expense', 'update-expense'],
  methods: {
    createExpense() {
      Swal.fire({
        title: "Add new Expense",
        width: "800px",
        html: `
             <div class="form-group text-start">
               <label for="title" class="form-label">Expense Title</label>
               <input type="text" id="title" class="form-control shadow-none">
             </div>
             <div class="form-group text-start mt-3">
               <label for="money" class="form-label">Money</label>
               <input type="number" id="money" class="form-control shadow-none">
             </div>
             <div class="form-group text-start mt-3">
               <label for="category" class="form-label">Category</label>
               <select class="form-select shadow-none" id="category">
                    ${this.categories.map((category) => `<option>${category.title}</option>)`)}
               </select>
             </div>
             <div class="form-group text-start mt-3">
               <label for="date" class="form-label">Expense Date</label>
               <input type="date" id="date" class="form-control shadow-none">
             </div>`,
        confirmButtonText: "Submit!",
        confirmButtonColor: "#3085d6",
        showCancelButton: true,
        cancelButtonColor: "#D33",
        preConfirm: () => {
          const title = Swal.getPopup().querySelector('#title').value
          const money = Swal.getPopup().querySelector('#money').value
          const category = Swal.getPopup().querySelector('#category').value
          const date = Swal.getPopup().querySelector('#date').value

          if (!title || !money || !category || !date) {
            Swal.showValidationMessage('Field is Required')
          }

          return {
            id: Math.floor(Math.random() * 1000),
            title, money, category, date
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit('create-expense', {
            id: result.value.id,
            title: result.value.title,
            money: result.value.money,
            category: result.value.category,
            date: result.value.date
          })
        }
      })
    },
    deleteExpense(expense) {
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
          this.$emit('delete-expense', expense)
        }
      })
    },
    updateExpense(expense) {
      Swal.fire({
        title: "Update Expense",
        width: "800px",
        html: `
             <div class="form-group text-start">
               <label for="title" class="form-label">Expense Title</label>
               <input type="text" id="title" value="${expense.title}" class="form-control shadow-none">
             </div>
             <div class="form-group text-start mt-3">
               <label for="money" class="form-label">Money</label>
               <input type="number" id="money" value="${expense.money}" class="form-control shadow-none">
             </div>
             <div class="form-group text-start mt-3">
               <label for="category" class="form-label">Category</label>
               <select class="form-select shadow-none" id="category">
                    ${this.categories.map((category) => `<option ${expense.category === category.title ? "selected" : ""}>${category.title}</option>)`)}
               </select>
             </div>
             <div class="form-group text-start mt-3">
               <label for="date" class="form-label">Expense Date</label>
               <input type="date" id="date" value="${expense.date}" class="form-control shadow-none">
             </div>`,
        confirmButtonText: "Submit!",
        confirmButtonColor: "#3085d6",
        showCancelButton: true,
        cancelButtonColor: "#D33",
        preConfirm: () => {
          const title = Swal.getPopup().querySelector('#title').value
          const money = Swal.getPopup().querySelector('#money').value
          const category = Swal.getPopup().querySelector('#category').value
          const date = Swal.getPopup().querySelector('#date').value

          if (!title || !money || !category || !date) {
            Swal.showValidationMessage('Field is Required')
          }

          return {
            id: expense.id,
            title, money, category, date
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedExpense = {
            id: result.value.id,
            title: result.value.title,
            money: result.value.money,
            category: result.value.category,
            date: result.value.date
          }

          this.$emit('update-expense', updatedExpense)
        }
      })
    },
  }
}
</script>