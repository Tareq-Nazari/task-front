<template>
  <div id="app" class="container mt-5">
    <div class="text-center">
      <h1 class="mb-4">Welcome to Task Manager</h1>
      <div class="btn-group mb-4">
        <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
        <router-link to="/" class="btn btn-secondary">Go to Task List</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style>
  h1 {
    font-weight: bold;
  }
</style>
