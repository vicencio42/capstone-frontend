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
    <header>
      <h1>
        The
        <strong>Manga</strong>
        BookClub!
      </h1>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  padding-top: 50px;
  padding-bottom: 50px;
}
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
</style>
