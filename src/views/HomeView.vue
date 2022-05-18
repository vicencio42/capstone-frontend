<script>
export default {
  data: function () {
    return {
      message: "Manga Book Club!",
      usersManga: [],
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <body>
      <h1>
        The
        <strong>Manga</strong>
        BookClub!
      </h1>
    </body>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: #888;
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  strong {
    color: #313131;
  }
  &:hover {
    color: #d60a0a;
  }
}
body {
  background-image: url("/Users/vicenciomendez/Actualize/capstone-frontend/public/img/anime/tumblr_nzj7apQciH1v1bvfro1_1280.png");
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 18px;
  padding-bottom: 700px;
}
</style>
