<template>
  <div class="app">
    <header>
      <h1>
        The
        <strong>Manga</strong>
        BookClub
      </h1>

      <form class="search-box" @submit.prevent="HandleSearch">
        <input type="search" class="search-field" placeholder="Search for manga..." required v-model="search_query" />
      </form>
    </header>
    <main>
      <div class="cards" v-if="mangalist.length > 0">
        <CardView v-for="manga in mangalist" :key="manga.mal_id" :manga="manga" />
      </div>
      <div class="no-results" v-else></div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import CardView from "./CardView.vue";
export default {
  setup() {
    const search_query = ref("");
    const mangalist = ref([]);
    const HandleSearch = async () => {
      mangalist.value = await fetch(`https://api.jikan.moe/v3/search/manga?q=${search_query.value}`)
        .then((res) => res.json())
        .then((data) => data.results);
      search_query.value = "";
    };
    return {
      CardView,
      search_query,
      mangalist,
      HandleSearch,
    };
  },
  components: { CardView },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
a {
  text-decoration: none;
}
header {
  padding-top: 50px;
  padding-bottom: 50px;
  h1 {
    color: #888;
    font-size: 42px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    strong {
      color: #313131;
    }
    &:hover {
      color: #313131;
    }
  }
  .search-box {
    display: flex;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    .search-field {
      appearance: none;
      background: none;
      border: none;
      outline: none;
      background-color: #f3f3f3;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      display: block;
      width: 100%;
      max-width: 600px;
      padding: 15px;
      border-radius: 8px;
      color: #313131;
      font-size: 20px;
      transition: 0.4s;
      &::placeholder {
        color: #aaa;
      }
      &:focus,
      &:valid {
        color: #fff;
        background-color: #313131;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
main {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
}
</style>
