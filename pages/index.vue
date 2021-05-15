<template lang="pug">
  .index-layout.container
    .index-title.d-flex
      h1.m-auto {{ school }}
    .index-subtitle.d-flex
      h2.m-auto {{ schoolEnglish }}
    .row
      entry-cloud.col-4(
        v-for="entry in entryLink"
        :entry-image="entry.image"
        :entry-text="entry.text"
        :entry-link="entry.link"
        :top="entry.top"
        :left="entry.left"
      )
</template>

<script>
/* 標題 */
import { school, schoolEnglish } from "@/constant/website";
/* 元件 */
import EntryCloud from "@/components/entry-cloud";
/* 圖片 */
import CloudLeft from '@/assets/images/index/cloud_01.png';
import CloudMiddle from '@/assets/images/index/cloud_02.png';
import CloudRight from '@/assets/images/index/cloud_03.png';


const data = function () {
  return {
    school,
    schoolEnglish,
    entryLink: [
      { image: CloudLeft, link: '/class', text: '畢業班級', top: 43, left: 30 },
      { image: CloudMiddle, link: '/activity', text: '校園生活照', top: 45, left: 24 },
      { image: CloudRight, link: '#', text: '畢冊電子書', top: 42, left: 24 },
    ]
  };
};

export default {
  data,
  components: { EntryCloud }
};
</script>

<style scoped lang="scss">
/*======== title ========*/
.index-title {
  margin-top: 130px;
}

.index-subtitle {
  padding-top: 10px;
  h2 {
    /* 部署相關調整參數 */
    width: 77vh;
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
  /* 部署相關調整參數 */
  margin-bottom: 40px;
}
</style>
