<template>
  <q-page class="flex flex-center">
    <h2>Schody</h2>
    <div
      v-masonry
      transition-duration="3s"
      item-selector=".item"
      class="masonry-container"
      origin-top="true"
      horizontal-order="true"
      gutter="10"
    >
      <div
        v-masonry-tile
        class="grid-item item"
        :key="index"
        v-for="(item, index) in items"
      >
        <div class>
          <img class="img" :src="item.src" alt="" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Stairs",
  data: () => ({
    items: [
      {
        src: "http://picsum.photos/602/660/"
      },
      {
        src: "http://picsum.photos/660/646/"
      },
      {
        src: "http://picsum.photos/741/375/"
      },
      {
        src: "http://picsum.photos/813/455/"
      },
      {
        src: "http://picsum.photos/813/455/"
      },
      {
        src: "http://picsum.photos/813/455/"
      },
      {
        src: "http://picsum.photos/813/455/"
      }
    ]
  }),
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  }
};
</script>
<style lang="scss">
.masonry-container {
  width: 100%;
  margin: 50px 20px;
  .grid-item {
    width: 32.5%;
    .img {
      width: 100%;
    }
  }
}
</style>
