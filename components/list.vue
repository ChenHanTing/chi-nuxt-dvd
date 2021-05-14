<template lang="pug">
  .activity-layout
    .container.d-flex.title.justify-content-between
      .left.d-flex.flex-column
        span.chinese {{titleZh}}
        span.english {{titleEn}}
        hr
      nuxt-link.right.hover-bounce(to="/")
        span 返回
    .container.activity
      nuxt-link.class-room.hover-popout(v-for="cls in classInfo" :to="cls.link")
        span {{ cls.name }}
</template>

<script>
import ClassRoom from '@/mixins/class'

export default {
  props: {
    titleZh: String,
    titleEn: String,
  },
  mixins: [ClassRoom]
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.activity-layout {
  /* 垂直置中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 總高度 */
  height: 100vh;
  flex-direction: column;
  /* 提供hr定位 */
  position: relative;
}

.title {
  padding-bottom: 80px;
  color: white;
}

.chinese,
.right {
  /* 字體 */
  font-family: "Wt40", Serif;
}

.left {
  /* 置右＋白色 */
  letter-spacing: 3px;
  text-align: right;

  .chinese {
    font-size: 2.0rem;
  }
  .english {
    font-size: 1.28rem;
  }
}

a.right {
  color: white;
  font-size: 2.0rem;
  letter-spacing: 3px;
}

.activity {
  display: flex;
  flex-wrap: wrap;
  outline: white .5rem solid;
  padding: 0;
  margin: 0;
  /* 毛玻璃 */
  background: rgba(255, 255, 255, .2);
}
.class-room {
  width: 20%;
}

a.class-room {
  color: white;
  margin: 30px 0;
  text-align: center;
  font-size: 2.0rem;
  letter-spacing: 3px;
  /* Google Font */
  font-family: 'Montserrat', sans-serif;
}

hr {
  position: absolute;
  color: white;
  width: 23vw;
  height: 3px;
  top: 23vh;
  left: -20px
}

@media screen and (min-width: 992px) and (max-width: 1279px) {
  hr {
    width: 30vw;
  }
}

@media screen and (max-width: 991px) and (min-width: 768px) {
  hr {
    width: 31vw;
  }
}

@media screen and (max-width: 767px) {
  hr {
    display: none;
  }
}
</style>
