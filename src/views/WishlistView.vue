<template>
  <div class="wishlist">
    <header>
      <h1>
        This
        <strong>Wishlist</strong>
        YO!
      </h1>
    </header>
    <main>
      <div v-for="wishlist in wishlists" v-bind:key="wishlist.id">
        <div class="manga-cover">
          <strong>
            <h2 class="manga-name">{{ wishlist.title }}</h2>
          </strong>
          <div v-for="wishlist in wishlists" v-bind:key="wishlist.id"></div>
          <img class="img-fit" v-bind:src="wishlist.image_url" v-bind:alt="wishlist.title" />
        </div>

        <br />
        <div class="removeButton">
          <button v-on:click="deleteManga(wishlist)" class="btn btn-block btn-danger w-100">Remove</button>
        </div>
        <div class="manga-box-caption"></div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Here is your wishlist",
      wishlists: [],
    };
  },
  created: function () {
    // this.comicsManga();
    this.wishlistManga();
  },
  methods: {
    wishlistManga() {
      axios.get("/wishlists").then((response) => {
        console.log(response.data);
        this.wishlists = response.data;
      });
    },
    deleteManga(wishlist) {
      console.log(wishlist);
      axios.delete(`/wishlists/${wishlist.id}`).then((response) => {
        console.log(response);
        var index = this.wishlists.indexOf(wishlist);
        this.wishlists.splice(index, 1);
      });
    },

    // deleteManga(wishlist) {
    //   axios.delete("/wishlists/" + wishlist.id).then((response) => {
    //     console.log(response.data);
    //     this.$router.push("/wishlists");
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  .img {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
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
.manga-cover {
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
      transform: scale(1.05);
    }
    h3 {
      color: #ff0000;
    }
  }
}
</style>
