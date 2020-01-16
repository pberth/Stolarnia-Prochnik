<template>
  <q-page class="flex flex-center">
    <div class="carousel">
      <q-carousel
        class="dimmed bg"
        animated
        v-model="slide"
        infinite
        :autoplay="3000"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
    <div class="typed_container flex flex-center">
      <div class="typed flex flex-center column text-white">
        <vue-typed-js
          :strings="['Schody!', 'Altany!', 'Wszystko co sobie wymarzysz!']"
          :startDelay="1000"
          :typeSpeed="100"
          :backSpeed="100"
          :backDelay="1000"
          :loop="true"
        >
          <div class="q-mx-auto">
            <div class="flex column">
              <h2 class="font">Cześć,</h2>
              <h2 class="font">
                Jestem Irek i wykonuję z drewna
              </h2>
              <h2 class="font"><span class="typing"></span></h2>
            </div>
          </div>
        </vue-typed-js>
      </div>
    </div>
    <div class="flex flex-center column section_two">
      <h2 class="font mar">Wykonujemy:</h2>
      <Cards />
    </div>
  </q-page>
</template>

<script>
import Cards from "../components/Cards";
export default {
  components: {
    Cards
  },
  name: "Home",
  data() {
    return {
      slide: 1
    };
  }
};
</script>

<style lang="scss">
.carousel {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;

  .bg {
    height: 100vh;
  }
}
.typed_container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  .typed {
    width: 70%;
    .font {
      margin: 0;
      line-height: 1.4;
      .typing {
        border-bottom: 5px solid green;
      }
    }
  }
}
.section_two {
  width: 100%;
  min-height: 80vh;
  background-color: #333;
  .font.mar {
    margin: 20px;
    color: #aaa;
  }
}
</style>
