export default ({ route, app }) => {
  // 網站種類: 崎崎、10校聯展、鈺嬿。不過還是以崎崎網站為主支
  const genre = route.meta.reduce((genre, meta) => meta.genre || genre, 'chi')
  app.store.commit('SET_WEBSITE_TYPE', genre)
}
