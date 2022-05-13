<template>
  <div class="card">
    <a :href="manga.url" target="_blank">
      <img :src="manga.image_url" :alt="manga.title + ' Poster'" />
      <h3>{{ manga.title }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  props: ["manga"],
};
</script>

<style lang="scss" scoped>
.card {
  flex: 1 1 25%;
  width: 33%;
  max-width: 33%;
  padding: 0px 8px;
  margin-bottom: 16px;
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
