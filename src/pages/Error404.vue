<template>
  <div class="fixed-center text-center">
    <p>
      <img class="img" src="~assets/sad.svg" />
    </p>
    <p class="text-faded">
      Przepraszamy, ale nic tu nie ma...
    </p>
    <q-btn color="secondary" class="btn" to="/" label="Wróć" />
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>
<style lang="scss">
.img {
  width: 30vw;
  max-width: 150px;
}
.btn {
  width: 200px;
}
</style>
