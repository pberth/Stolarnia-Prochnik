<template>
  <div class="width">
    <div class="flex flex-center">
      <q-list
        v-for="(card, index) in cards"
        :key="index"
        class="width_list shadow-5 "
      >
        <q-expansion-item
          class="q-ma-md"
          :label="card.title"
          expand-icon="none"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              {{ card.description }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Schody",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.`
      },
      {
        title: "Altany",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.`
      },
      {
        title: "Drzwi",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.`
      },
      {
        title: "Inne",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.`
      }
    ]
  })
};
</script>
<style lang="scss">
.width {
  width: 100%;
  .width_list {
    width: 350px;
    overflow: hidden;
    .q-expansion-item--popup.q-expansion-item--collapsed {
      background-color: #333;
      padding: 0px;
      margin: 20px;
      color: #666;
    }
    .q-expansion-item--expanded {
      background-color: rgb(196, 45, 45);
      padding: 0px;
      margin: 20px;
    }
    .q-item {
      font-size: 32px;
      width: 350px;
      text-align: center;
      .q-card__section--vert {
        font-size: 18px;
      }
    }
  }
}
</style>
