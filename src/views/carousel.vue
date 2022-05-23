<template>
  <div class="flex felx-wrap w-full">
    <div v-if="currentSlide === 0" class="color1">
      <img src="../assets/premierleague.jpeg" alt="" />
    </div>
    <div v-if="currentSlide === 1" class="color2">
      <img
        src="../assets/skysports-premier-league-predictions_5485420.jpeg"
        alt=""
      />
    </div>
    <div v-if="currentSlide === 2" class="color3">
      <img src="../assets/Statement_Graphic_PL_Lilac.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
    };
  },
};
</script>

<style>
.color1 {
  position: absolute;
  width: 100%;
  height: 350px;
}
.color2 {
  position: absolute;
  width: 100%;
  height: 350px;
}
.color3 {
  position: absolute;
  width: 100%;
  height: 350px;
}
</style>
