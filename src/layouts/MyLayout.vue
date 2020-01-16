<template>
  <q-layout view="lHh lpr fff">
    <q-header reveal elevated class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <h4>Stolarnia Próchnik</h4>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile" elevated>
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item clickable tag="a" href="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Strona główna</q-item-label>
            <!-- <q-item-label caption>Informacje o nas</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/onas">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>O nas</q-item-label>
            <q-item-label caption>Informacje o nas</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/kontakt">
          <q-item-section avatar>
            <q-icon name="email" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Kontakt</q-item-label>
            <q-item-label caption>Skontaktuj się z nami</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="padding">
          <q-item-section>
            <q-btn-dropdown
              class="dropdown"
              menu-anchor="top left"
              flat
              icon="photo"
              text-color="black"
              color="transparent"
              label="Galeria"
              no-caps
              stretch
              cover
              align="left"
            >
              <q-list>
                <q-item clickable tag="a" href="/schody">
                  <q-item-section>
                    <q-item-label>Schody</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable tag="a" href="/altany">
                  <q-item-section>
                    <q-item-label>Altany</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable tag="a" href="/inne">
                  <q-item-section>
                    <q-item-label>Inne</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://www.facebook.com/IrekStolarz/"
        >
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@IrekStolarz</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white row items-center">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <div
          class="flex flex-center column q-pa-sm col-xs-10 col-sm-10 col-md-9"
        >
          <span class="align">
            Usługi stolarskie Ireneusz Czesław Sielicki</span
          >
          <span>82-300 Elbląg</span>
          <span>ul. Strumykowa 78</span>
        </div>
        <div class="flex flex-center col-xs-12 col-sm-12 col-md-2">
          <q-btn
            class="q-pa-sm"
            type="a"
            href="tel:+48609750975"
            dense
            flat
            round
            icon="phone"
          />
          <q-btn
            class="q-pa-sm"
            type="a"
            href="mailto:stolarnia.ireneusz@gmail.com"
            dense
            flat
            round
            icon="email"
          />
          <q-btn
            class="q-pa-sm"
            type="a"
            href="https://www.facebook.com/IrekStolarz/"
            dense
            flat
            round
            icon="public"
          />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false
    };
  }
};
</script>
<style lang="scss">
.padding {
  padding: 0;
  .dropdown {
    min-height: 49px;
    width: 300px;
    padding: 8px 16px;
  }
}
.q-btn__wrapper {
  padding: 0;
}
.q-btn {
  font-weight: 400;
}
.on-left {
  margin-right: 30px;
}

.no-wrap {
  flex-wrap: wrap;
  .align {
    text-align: center;
  }
}
</style>
