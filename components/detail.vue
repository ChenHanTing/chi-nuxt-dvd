<template lang="pug">
  .activity-layout
    .container.d-flex.title.justify-content-between
      .left.d-flex.flex-column
        span.chinese {{titleId}}
        span.english {{titleEn}}
        hr
      .right
        nuxt-link.hover-bounce(:to="returnTo")
          span 返回
        nuxt-link.hover-bounce(to="/")
          span 回首頁
    .container.slide-container
</template>

<script>
import ClassRoom from '@/mixins/class'

export default {
  props: {
    titleEn: String,
  },
  mixins: [ClassRoom],
  computed: {
    titleId() {
      return this.$route.params.id
    },
    returnTo() {
      return `/${this.$route.name.split('-')[0]}`;
    }
  },
  created() {
    console.log(this.$route);
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
    font-family: "Wt40", Serif;
    color: white;
    font-size: 2.0rem;
    letter-spacing: 3px;
  }
}
</style>
