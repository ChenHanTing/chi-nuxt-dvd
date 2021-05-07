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
.chi-layout {
  height: 100vh;
}
</style>
