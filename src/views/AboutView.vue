<template>
  <div class="about">
    <header>
      <h1>
        List
        <strong>of</strong>
        Manga
      </h1>
    </header>
    <main>
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12" v-for="comic in comics" v-bind:key="comic.mal_id">
          <strong>
            <h2 class="manga-name">{{ comic.title }}</h2>
          </strong>
          <br />
          <img class="img-fit" v-bind:src="comic.images.jpg.large_image_url" v-bind:alt="comic.title" />
          <div class="manga-box-caption"></div>
          <p>{{ comic.synopsis }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "List of Manga",
      comics: [],
    };
  },
  created: function () {
    this.comicsManga();
  },
  methods: {
    comicsManga() {
      axios.get("/mangas").then((response) => {
        console.log(response.data);
        this.comics = response.data.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
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
      color: #d60a0a;
    }
  }
}
.row {
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
  }
  h3 {
    padding: 16px;
    color: #313131;
    transition: 0.4s;
  }
  &:hover {
    img {
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(100%);
      transform: scale(1.02);
    }
    h3 {
      color: #ff0000;
    }
  }
}
main {
  max-width: 800px;
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
