
<template lang="pug">
  swiper.mySwiper(ref="mySwiper" :options="swiperOptions")
    swiper-slide.d-flex.justify-content-center(v-for="image in defaultImages")
      img.swiper-image.border-gradient(:src="image" alt="unknown image")
    .swiper-button-prev(slot='button-prev')
    .swiper-button-next(slot='button-next')
    .swiper-pagination(slot="pagination")
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { map } from 'ramda';

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiperDefault .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        init: true,
        loop: true,
        autoplay: true,
        slidesPerView: 1,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    defaultImages() {
      return map(
        e => require(`../assets/images/default/${e}.jpg`),
        Array.from({length: this.itemNumber}, (_, i) => i + 1)
      )
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  props: {
    itemNumber: Number,
  },
  created() {
    console.log('defaultImages:', this.defaultImages);
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 100%;
}

.swiper-image {
}

img {
  height: 60vh;
  object-fit: contain;
}

.swiper-button-prev,
.swiper-button-next {
  outline: none;
  background-color: var(--black);
  opacity: 0.2;
  transition-duration: 0.2s;
  margin-top: 0;
  top: 50%;
  transform: translateY(-50%);
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 1rem;
  color: var(--white);
  font-weight: 1000;
}

.swiper:hover {
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0.8;
  }
}

/* https://dev.to/afif/border-with-gradient-and-radius-387f */
.border-gradient {
  border: 10px solid;
  border-image: linear-gradient(45deg,#0ae8f0,#00a8ff) 10;
}
</style>
