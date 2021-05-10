<template lang="pug">
  .chi-layout
    nuxt
</template>

<script>
export default {
  head () {
    return {
      title: '畢業光碟',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '畢業光碟影片'
        }
      ],
    }
  },
  name: "navbar",
  methods: {
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
/**
 * gradient: https://cssgradient.io
 * colorPicker: https://imagecolorpicker.com/
 */
.chi-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: radial-gradient(circle, rgba(85,210,222,255) 0%, rgba(1,175,201,255) 35%, rgba(0,173,205,255) 100%);
}
</style>
