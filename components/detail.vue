<template lang="pug">
  .activity-layout
    .container.d-flex.title.justify-content-between
      .left.d-flex.flex-column
        span.chinese {{titleId}}
        span.english {{titleEn}}
        hr
      nuxt-link.right.hover-bounce(to="/")
        span 返回
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
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/components/list-and-detail.scss";

.slide-container {
  /* 輪播區高度 */
  height: 55vh;
}
</style>
