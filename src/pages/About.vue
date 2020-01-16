<template>
  <q-page class="flex flex-center column">
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
    <div class="text_container flex flex-center">
      <div class="flex flex-center column text-white">
        <h2 class="text header">O nas</h2>
        <p class="q-mx-auto text description">
          Jesteśmy firmą pokoleniową. Zajmujemy się obróbką drewna od ponad 20
          lat. Co sprawia, że posiadamy wieloletnie doświadczenie w branży. Nie
          ma dla nas rzeczy niemozliwych. Zawsze staramy się jak najlepiej
          doradzić klientowi w doborze odpowiedniego drewna, aby jego marzenie
          było jak najtrwalsze.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "About",
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
.text_container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  .text {
    width: 70%;
  }
  .header {
    font-size: 60px;
  }
  .description {
    font-size: 26px;
  }
}
</style>
