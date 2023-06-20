<template>
  <h3>Halaman Pengeluaran</h3>
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

export default {
  components: {Expense, Category},
  data() {
    return {
      categories: [
        {
          id: Math.floor(Math.random() * 1000),
          title: "Vape"
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Jajan"
        },
      ],
      expenses: [
        {
          id: Math.floor(Math.random() * 1000),
          title: "Jajan Bakso",
          money: 100000,
          category: "Vape",
          date: `${new Date().getFullYear()}-${new Date().getMonth().toLocaleString('id-ID', {
            minimumIntegerDigits: 2
          })}-${new Date().getDate().toLocaleString('id-ID', {
            minimumIntegerDigits: 2
          })}`,
        },
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
    handleUpdateCategory(category) {
      const categoryIndex = this.categories.findIndex(item => item.id === category.id)
      this.categories[categoryIndex] = category

      this.toast.fire({
        icon: "success",
        title: "Updated Successfully"
      })
    },
    handleCreateCategory(category) {
      this.categories = [...this.categories, category]

      this.toast.fire({
        icon: "success",
        title: "Added Successfully"
      })
    },
    handleDeleteCategory(category) {
      this.categories = this.categories.filter(item => item !== category);

      this.toast.fire({
        icon: "success",
        title: "Deleted Successfully!"
      })
    },
    handleCreateExpense(expense) {
      this.expenses = [...this.expenses, expense]

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

      this.toast.fire({
        icon: "success",
        title: "Updated Successfully!"
      })
    }
  },
}
</script>