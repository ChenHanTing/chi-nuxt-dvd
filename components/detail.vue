<template lang="pug">
  .activity-layout
    .container.d-flex.title.justify-content-between
      .left.d-flex.flex-column
        span.chinese {{titleId}}
        span.english {{titleEn}}
      .right
        nuxt-link.hover-bounce(:to="returnTo")
          span 返回
        nuxt-link.hover-bounce(to="/")
          span 回首頁
    .container.slide-container
      photo-swiper(:images="relatedImagesWithFallback")
</template>

<script>
import {map} from "ramda";
import ClassRoom from '@/mixins/class'
import PhotoSwiper from '@/components/photo-swiper'
import {photoNum} from "@/constant/website";

export default {
  props: {
    titleEn: String,
  },
  mixins: [ClassRoom],
  computed: {
    titleId() {
      return this.$route.params.id
    },
    entryType() {
      return this.$route.name.split('-')[0];
    },
    returnTo() {
      return `/${this.entryType}`;
    },
    itemNumber() {
      return 5
    },
    /* 相關照片 */
    relatedImages() {
      return map(
        e => `../assets/images/${this.entryType}/${this.titleId}/${e}.jpg`,
        Array.from({length: photoNum}, (_, i) => i + 1)
      )
    },
    /* 錯誤處理過的照片 */
    relatedImagesWithFallback() {
      return this.relatedImages.map((e, i) => {
        try {
          console.log('What is e:', e);
          /* 找不到路徑 */
          // return require(e);
          return require(`../assets/images/${this.entryType}/${this.titleId}/${i+1}.jpg`);
        } catch(error) {
          console.log('Error:', error);
          return require(`@/assets/images/default/${i+1}.jpg`);
        }
      })
    }
  },
  created() {
    console.log(this.$route);
  },
  components: {
    PhotoSwiper
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/components/list-and-detail.scss";

.slide-container {
  /* 輪播區高度 */
  height: 55vh;
}

.right {
  a + a {
    margin-left: 20px;
  }

  a {
    /* 字體 */
    span {
      font-size: 2.0rem;
    }
    font-family: "Wt07", Serif;
    color: white;
    letter-spacing: 3px;
  }
}

.right {
  span {
    &:hover {
      color: yellow;
    }
  }
}
</style>
