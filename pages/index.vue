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
    .index-pic.container
      .airplane
        img(:src="otherImages.airplane" alt="airplane")
      .pigeon
        img(:src="otherImages.pigeon" alt="pigeon")
      .balloon
        img(:src="otherImages.balloon" alt="balloon" style="--i:2;")
      .cloud-bottom.d-flex.justify-content-center
        img(v-for="(cloud, index) in otherImages.bottom"
          :src="cloud" alt="cloud" :style="`--i:${index + 1};`")
</template>

<script>
/* 標題 */
import { school, schoolEnglish, ebookName } from "@/constant/website";
/* 元件 */
import EntryCloud from "@/components/entry-cloud";
/* 圖片 */
import CloudLeft from '@/assets/images/index/22-04.png';
import CloudMiddle from '@/assets/images/index/22-03.png';
import CloudRight from '@/assets/images/index/22-02.png';
import Airplane from '@/assets/images/index/airplane.png';
import Balloon from '@/assets/images/index/balloon.png';
import Pigeon from '@/assets/images/index/pigeon.png';
import C1 from '@/assets/images/index/c1.png';
import C2 from '@/assets/images/index/c2.png';
import C3 from '@/assets/images/index/c3.png';

const data = function () {
  return {
    school,
    schoolEnglish,
    entryLink: [
      { image: CloudLeft, link: '/class', text: '畢業班級', top: 43, left: 30 },
      { image: CloudMiddle, link: '/activity', text: '校園生活照', top: 45, left: 24 },
      { image: CloudRight, text: '畢冊電子書', top: 42, left: 24,
        link: `http://super-ninenine.synology.me/${ebookName}/index.html` },
    ],
    otherImages: {
      airplane: Airplane,
      balloon: Balloon,
      pigeon: Pigeon,
      bottom: [C1, C2, C3, C1, C2, C3, C1, C2, C3, C1, C2, C3,
               C1, C2, C3, C1, C2, C3, C1, C2, C3, C1, C2, C3]
    }
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
  font-weight: 200;
  letter-spacing: 15px;
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
  font-family: "Wt07", Serif;
}

h1, h2, a {
  color: white;
}

h1 {
  font-size: 6rem;
  font-family: "Wt07", Serif;
}

.index-subtitle {
  /* 部署相關調整參數 */
  margin-bottom: 40px;
}

.index-layout {
  position: relative;
}

.airplane,
.pigeon,
.balloon,
.cloud-bottom {
  position: absolute;
}

.airplane {
  top: -20%;
  left: -16%;
  img {
    width: 70%;
  }
}

.balloon {
  top: -0%;
  left: -10%;
  img {
    width: 50%;
    animation: animateY calc(8s * var(--i)) linear infinite;
  }
}

.pigeon {
  top: -20%;
  left: 80%;
  img {
    width: 120%;
  }
}

.cloud-bottom {
  top: 100vh;
  img {
    top: -30vh;
    width: 500px;
    position: absolute;
    animation: animateX calc(8s * var(--i)) linear infinite;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .airplane {
    img {
      width: 50%;
    }
  }

  .balloon {
    img {
      width: 50%;
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .balloon {
    img {
      width: 30%;
    }
  }
}
</style>
