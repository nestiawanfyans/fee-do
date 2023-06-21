<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-nav sticky-top">
      <div class="container-xxl">
        <div class="collapse navbar-collapse" id="navbarNav">
          <h4 class="font-fredoka text-white mt-2 me-5">Fee Do</h4>

          <ul class="navbar-nav ms-2">
            <li class="nav-item ms-2 me-2">
              <router-link :to="{name : 'home'}" class="nav-link" exact-active-class="active">Home</router-link>
            </li>
            <li class="nav-item ms-2 me-2">
              <router-link :to="{name: 'income'}" class="nav-link" exact-active-class="active">Income</router-link>
            </li>
            <li class="nav-item ms-2 me-2">
              <router-link :to="{name: 'expense'}" class="nav-link" exact-active-class="active">Expense</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
</template>

<style>
  .bg-nav {
    background-color: #0c101c;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
    background-color: hsl(0deg 0% 85.97% / 9%);
    color: white;
    border-radius: 50px;
    padding: 8px 40px;
  }
</style>