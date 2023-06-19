<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="ps-5 py-2">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{name : 'home'}" class="nav-link" exact-active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'income'}" class="nav-link" exact-active-class="active">Income</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'expense'}" class="nav-link" exact-active-class="active">Expense</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="vh-100 m-5">
      <router-view></router-view>
    </main>
</template>