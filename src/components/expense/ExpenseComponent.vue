<template>
  <div class="card mx-5 text-dark mt-4 overflow-auto">
    <div class="card-header p-4">
      Expense's List
    </div>
    <ul class="list-group list-group-flush border-bottom-0" v-if="!isEmpty">
      <table>
        <tr class="border-bottom" v-for="expense in state.expenses" :key="expense.id">
          <td class="p-4">{{ expense.title }}</td>
          <td>
            {{ formatRupiah(expense.money) }}
          </td>
          <td>{{ expense.category }}</td>
          <td>{{ expense.date }}</td>
          <td>
            <div class="btn-wrapper">
              <button class="btn me-3" @click="deleteExpense(expense.id)">
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

  <button @click="createExpense" class="btn btn-sm btn-primary mt-3 mx-5 ml-auto d-flex">Add Expense</button>
</template>

<script setup>
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPencil from "@/components/icons/IconPencil.vue";

import {computed, onMounted, reactive} from "vue";

import {useApi} from "@/use/useApi";
import {useSwal} from "@/use/useSwal";

const {Toast, Modal} = useSwal()
const {API} = useApi()

const state = reactive({
  expense: '',
  expenses: [],
  categories: []
})

const setData = async () => {
  await API
      .path('/expenses')
      .get()
      .then((response) => {
        state.expenses = response.data
      })

  await API
      .path('/categories')
      .get()
      .then((response) => {
        state.categories = response.data
      })
}

const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(money)
}

const isEmpty = computed(() => {
  return state.expenses.length === 0
})

onMounted(async () => {
  await setData()
})

const createExpense = () => {
  Modal
      .htmlInput({
        title: 'Create new expenses',
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
               <select class="form-select" id="category">
                ${state.categories.map((category) => `<option>${category.title}</option>`)}
               </select>
             </div>
             <div class="form-group text-start mt-3">
               <label for="date" class="form-label">Expense Date</label>
               <input type="date" id="date" class="form-control shadow-none">
             </div>`,
        preConfirm() {
          const title = document.getElementById('title').value
          const money = document.getElementById('money').value
          const category = document.getElementById('category').value
          const date = document.getElementById('date').value

          if (!title || !money || !date || !category) {
            Modal.validationMessage('Field is Required')
          }

          return {
            title,
            money,
            date,
            category
          }
        }
      })
      .Fire()
      .then((res) => {
        const newExpenses = {
          id: Math.floor(Math.random() * 9999),
          title: res.value.title,
          money: res.value.money,
          category: res.value.category,
          date: res.value.date
        }

        API
            .path('/expenses')
            .post(newExpenses)
            .then(() => {
              state.expenses = [...state.expenses, newExpenses]
              Toast.Success('Added Successfully')
            })
            .catch((e) => {
              Toast.Error(e.message())
            })
      })
}

const deleteExpense = (id) => {
  Modal
      .Confirm({
        title: 'Are you sure?',
        text: "You won't be able to revert this"
      })
      .Fire()
      .then(() => {
        API
            .path('/expenses')
            .delete(id)
            .then(() => {
              const index = state.expenses.findIndex((item) => item.id === id)

              state.expenses.splice(index, 1)
              Toast.Success('Deleted Successfully')
            })
            .catch((e) => {
              Toast.Error(e.message)
            })
      })
}

const updateExpense = (expense) => {
  Modal
      .htmlInput({
        title: 'Create new expenses',
        html: `
             <div class="form-group text-start">
               <label for="title" class="form-label">Expense Title</label>
               <input type="text" value="${expense.title}" id="title" class="form-control shadow-none">
             </div>
             <div class="form-group text-start mt-3">
               <label for="money" class="form-label">Money</label>
               <input type="number" value="${expense.money}" id="money" class="form-control shadow-none">
             </div>
             <div class="form-group text-start mt-3">
               <label for="category" class="form-label">Category</label>
               <select class="form-select" id="category">
                ${state.categories.map((category) => `<option>${category.title}</option>`)}
               </select>
             </div>
             <div class="form-group text-start mt-3">
               <label for="date" class="form-label">Expense Date</label>
               <input type="date" value="${expense.date}" id="date" class="form-control shadow-none">
             </div>`,
        preConfirm() {
          const title = document.getElementById('title').value
          const money = document.getElementById('money').value
          const category = document.getElementById('category').value
          const date = document.getElementById('date').value

          if (!title || !money || !date || !category) {
            Modal.validationMessage('Field is Required')
          }

          return {
            id: expense.id,
            title,
            money,
            date,
            category
          }
        }
      })
      .Fire()
      .then((res) => {
        const updatedExpenses = {
          id: res.value.id,
          title: res.value.title,
          money: res.value.money,
          category: res.value.category,
          date: res.value.date
        }

        API
            .path('/expenses')
            .put(res.value.id, updatedExpenses)
            .then(() => {
              const index = state.expenses.findIndex((item) => item.id === res.value.id)
              state.expenses[index] = updatedExpenses

              Toast.Success('Added Successfully')
            })
            .catch((e) => {
              Toast.Error(e.message())
            })
      })
}
</script>