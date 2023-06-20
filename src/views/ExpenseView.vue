<template>
  <Card
      title="Expenses Amount"
      :value="this.currentExpensesAmount"
  />

  <Category
      :categories="categories"
      @create-category="handleCreateCategory"
      @delete-category="handleDeleteCategory"
      @update-category="handleUpdateCategory"
  />

  <Expense
      :expenses="expenses"
      :categories="categories"
      @delete-expense="handleDeleteExpense"
      @update-expense="handleUpdateExpense"
      @create-expense="handleCreateExpense"
  />
</template>

<script>
import Swal from "sweetalert2";
import Category from "@/components/Category.vue";
import Expense from "@/components/Expense.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  components: {Card, Expense, Category},
  mounted() {
    axios.get(this.backendURL + '/categories')
        .then((res) => {
          console.log(res.data)
          this.categories = res.data
        }).catch((err) => {
      console.log(err)
    })

    axios.get(this.backendURL + '/expenses')
        .then((res) => {
          this.expenses = res.data
        }).catch((err) => {
      console.log(err)
    })
  },
  data() {
    return {
      backendURL: 'http://localhost:3000',
      categories: [],
      expenses: [],
      currentExpensesAmount: 100000,
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
    handleUpdateCategory(category) {
      const categoryIndex = this.categories.findIndex(item => item.id === category.id)
      this.categories[categoryIndex] = category

      this.toast.fire({
        icon: "success",
        title: "Updated Successfully"
      })
    },
    handleCreateCategory(category) {
      axios.post(this.backendURL + '/categories', category)
      this.categories = [...this.categories, category]

      this.toast.fire({
        icon: "success",
        title: "Added Successfully"
      })
    },
    handleDeleteCategory(category) {
      axios.delete()
      this.categories = this.categories.filter(item => item !== category);

      this.toast.fire({
        icon: "success",
        title: "Deleted Successfully!"
      })
    },
    handleCreateExpense(expense) {
      this.expenses = [...this.expenses, expense]

      this.currentExpensesAmount += Number(expense.money)

      return this.toast.fire({
        icon: "success",
        title: "Added Successfully"
      })
    },
    handleDeleteExpense(expense) {
      this.expenses = this.expenses.filter((e) => e.id !== expense.id)

      return this.toast.fire({
        icon: "success",
        title: "Deleted Successfully"
      })
    },
    handleUpdateExpense(expense) {
      let expenseIndex = this.expenses.findIndex((e) => e.id === expense.id)
      this.expenses[expenseIndex] = expense

      let sum = 0
      this.expenses.forEach((item) => {
        sum += Number(item.money)
      })

      this.currentExpensesAmount = sum

      this.toast.fire({
        icon: "success",
        title: "Updated Successfully!"
      })
    }
  },
}
</script>