<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link v-if="isLoggedIn" to="/about">List of Manga</router-link>
    |
    <router-link v-if="!isLoggedIn" to="/signup">Sign Up</router-link>
    |
    <router-link v-if="isLoggedIn" to="/wishlist">Wishlist</router-link>
    |
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    |
    <router-link v-if="isLoggedIn" to="/manga">Browse</router-link>
    |
    <router-link v-if="isLoggedIn" to="/logout">Logout</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
#app {
  background-image: url("/Users/vicenciomendez/Actualize/capstone-frontend/public/img/anime/943064.jpg");
  background-position: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #ff0000;
}
</style>
