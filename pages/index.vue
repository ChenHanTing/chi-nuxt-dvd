<template lang="pug">
  .index-layout
    .index-title.d-flex
      h1.m-auto {{ school }}
    .index-subtitle.d-flex
      h2.m-auto {{ schoolEnglish }}
    .row
      nuxt-link.col-4.entry(
        v-for="(entry, index) in entryLink"
        :to="entry.link"
        :class="`entry-${index}`"
      )
        .entry-image(:class="`entry-img-${index}`")
          img(:src="entry.image" alt="Logo")
        .entry-desc(:class="`entry-desc-${index}`")
          span {{ entry.text }}
</template>

<script>
/* 標題 */
import { school, schoolEnglish } from "@/constant/website";
/* 圖片 */
import CloudLeft from '@/assets/images/index/cloud_01.png';
import CloudMiddle from '@/assets/images/index/cloud_02.png';
import CloudRight from '@/assets/images/index/cloud_03.png';

const data = function () {
  return {
    school,
    schoolEnglish,
    entryLink: [
      { image: CloudLeft, link: '/graduation', text: '畢業班級' },
      { image: CloudMiddle, link: '/activity', text: '校園生活照' },
      { image: CloudRight, link: '/ebook', text: '畢冊電子書' },
    ]
  };
};

export default {
  data,
};
</script>

<style scoped lang="scss">
/*======== index-page ========*/
.index-layout {
}

/*======== title ========*/
.index-title {
  margin-top: 130px;
}

.index-subtitle {
  padding-top: 10px;
  h2 {
    width: 66vh;
    text-align: center;
    letter-spacing: 4px;
  }
}

h1, h2, a {
  font-family: "Wt11", Serif;
}

h1, h2, a {
  color: white;
}

h1 {
  font-size: 6rem;
  font-family: "Wt09", Serif;
}

.index-subtitle {
  margin-bottom: 60px;
}

/*======== card ========*/
.entry {
}

.entry-image {
  img {
    width: 100%;
    object-fit: contain;
  }
}

.entry-desc {
  position: absolute;
  font-size: 3rem;
  left: 150px;
  top: 120px;
}

.entry-0,
.entry-1,
.entry-2 {
  position: relative;
}

.entry-0 {
  transform: translateY(-80px);
}

.entry-1 {
  transform: translateY(-20px);
}

.entry-2 {
  transform: translateY(-100px);
}

</style>
