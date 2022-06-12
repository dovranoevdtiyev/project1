<template>
  <div class="flex felx-wrap w-full">
    <div
      class="bg-auto background-size: cover; background-size: contain;"
      v-for="(slider, i) in sliders"
      :key="i"
    >
      <img
        :src="slider.image"
        :alt="slider.alt"
        :title="slider.title"
        height="350"
        width="700"
        v-if="currentSlide === i"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          image: "/images/premierleague.jpeg",
          alt: "Some text",
          title: "Some title",
        },
        {
          image: "/images/skysports-premier-league-predictions_5485420.jpeg",
          alt: "Some text 2",
          title: "Some title 2",
        },
        {
          image: "/images/Statement_Graphic_PL_Lilac.png",
          alt: "Some text 3",
          title: "Some title 3",
        },
      ],
      currentSlide: 0,
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currentSlide === this.sliders.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style></style>
