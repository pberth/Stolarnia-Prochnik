<template>
  <q-page class="flex flex-start">
    <div class="column q-mx-xl contact">
      <h5>Skontaktuj się z nami</h5>
      <div class="q-ma-md row no-wrap items-center justify-start">
        <q-icon name="phone" size="20px" />
        <span class="q-pl-sm">+48609750975</span>
      </div>
      <div class="q-ma-md row no-wrap items-center justify-start">
        <q-icon name="email" size="20px" />
        <span class="q-pl-sm">stolarnia.ireneusz@gmail.com</span>
      </div>
      <div class="q-ma-md row no-wrap items-center justify-start">
        <q-icon name="home" size="20px" />
        <div class="justify-start column">
          <span class="q-pl-sm">
            Usługi stolarskie Ireneusz Czesław Sielicki</span
          >
          <span class="q-pl-sm">82-300 Elbląg</span>
          <span class="q-pl-sm">ul. Strumykowa 78</span>
        </div>
      </div>
    </div>
    <q-card class="flex flex-start map" style="flex:1">
      <l-map :zoom="zoom" :center="center">
        <l-marker :lat-lng="marker">
          <l-popup>
            <div class="flex flex-center column">
              <span> Usługi stolarskie Ireneusz Czesław Sielicki</span>
              <span>82-300 Elbląg</span>
              <span>ul. Strumykowa 78</span>
            </div>
          </l-popup>
        </l-marker>
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import Vue from "vue";
import L from "leaflet";

export default {
  name: "About",
  data() {
    return {
      slide: 1,
      zoom: 13,
      center: L.latLng(54.241861, 19.449365),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(54.241861, 19.449365)
    };
  },
  methods: {
    openPopup: function(event) {
      Vue.nextTick(() => {
        event.target.openPopup();
      });
    }
  }
};
</script>
<style lang="scss">
.contact {
  width: 32%;
}
.map {
  height: 415px;
}
</style>
