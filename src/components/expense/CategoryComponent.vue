<template>
  <div class="card text-dark mx-5 mt-5 overflow-auto">
    <div class="card-header p-4">
      Expense's Category
    </div>
    <ul class="list-group list-group-flush border-bottom-0" v-if="state.categories.length !== 0">
      <table>
        <tr class="border-bottom" v-for="category in state.categories" :key="category.id">
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
  <button @click="createCategory" class="btn btn-sm btn-primary mt-3 ms-5 ml-auto d-flex">Add Category</button>
</template>

<script setup>
import IconPencil from "@/components/icons/IconPencil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";

import {onMounted, reactive} from "vue";
import {useApi} from "@/use/useApi";
import {useSwal} from "@/use/useSwal";

const {Modal, Toast} = useSwal()
const {API} = useApi()

const state = reactive({
  category: '',
  categories: []
})

const setData = () => {
  API
      .path('/categories')
      .get()
      .then((response) => {
        state.categories = response.data
      })
}

onMounted(setData)

const deleteCategory = (category) => {
  Modal
      .Confirm({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
      })
      .Fire()
      .then(() => {
        API
            .path('/categories')
            .delete(category.id)
            .then(() => {
              const index = state.categories.findIndex((item) => item.id === category.id)

              state.categories.splice(index, 1)
              Toast.Success('Deleted Successfully')
            })
            .catch((e) => {
              Toast.Error(e.message)
            })
      })
}

const updateCategory = (category) => {
  Modal
      .Input({
        title: 'Update Category',
        input: 'text',
        inputValue: category.title,
        confirmButtonText: 'Submit!'
      })
      .Fire()
      .then((res) => {
        const updatedCategory = {
          id: category.id,
          title: res.value
        }

        API
            .path('/categories')
            .put(category.id, updatedCategory)
            .then(() => {
              const index = state.categories.findIndex((item) => item.id === category.id)

              state.categories[index] = updatedCategory
              Toast.Success('Updated Successfully')
            })
            .catch((e) => {
              Toast.Error(e.message)
            })
      })
}

const createCategory = () => {
  Modal
      .Input({
        title: 'Add new category',
        input: 'text',
        confirmButtonText: 'Submit!'
      })
      .Fire()
      .then((res) => {
        const newCategory = {
          id: id(),
          title: res.value
        }

        API
            .path('/categories')
            .post(newCategory)
            .then(() => {
              state.categories = [...state.categories, newCategory]
              Toast.Success('Added Successfully')
            })
            .catch((e) => {
              Toast.Error(e.message)
            })
      })
}

const id = () => {
  return Math.floor(Math.random() * 9999)
}
</script>

<style scoped>
.card {
  width: 50%;
  height: 500px;
  overflow: scroll;
}
</style>