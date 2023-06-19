<template>
  <div class="container">
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'income' }">Pemasukan</router-link></li>
      <li><router-link :to="{ name: 'expense' }">Pengeluaran</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>
