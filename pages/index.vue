<template lang="pug">
  .index-layout
    .index-title.d-flex
      h1.m-auto {{ school }}
    .index-subtitle.d-flex
      h2.m-auto 關於我們
    .row
      .col-4.entry(v-for="entry in entryLink")
        .entry-image
          img(:src="entry.image" alt="Logo")
        .entry-desc
          nuxt-link(:to="entry.link")
            span {{ entry.text }}
</template>

<script>
/* 標題 */
import { school } from "@/constant/website";
/* 圖片 */
import Graduation from '@/assets/images/graduate.png';
import Activity from '@/assets/images/activity.png';
import Ebook from '@/assets/images/book.png';

const data = function () {
  return {
    school,
    entryLink: [
      { image: Graduation, link: '/graduation', text: '畢業班級' },
      { image: Activity, link: '/activity', text: '校園生活照' },
      { image: Ebook, link: '/ebook', text: '畢冊電子書' },
    ]
  };
};

export default {
  data,
};
</script>

<style scoped lang="scss">
/*======== title ========*/
.index-title {
  outline: 1px blue solid;
}

h1 {
  font-family: "Wt28", Serif;
}

h2 {
  font-family: "Wt64", Serif;
}

.index-subtitle {
  margin-bottom: 60px;
}

/*======== card ========*/
.entry {
  position: relative;
  outline: 1px black solid;
}

.entry-image {
  img {
    width: 100%;
    object-fit: contain;
  }
}

.entry-desc {
  position: absolute;
  top: 50%;
  left: 36%;

  a {
    color: black;
    font-size: 2rem;
    font-family: "Wt24", Serif;

    &:hover {
      color: var(--yellowish-orange)
    }
  }
}
</style>
