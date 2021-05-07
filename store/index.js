export const state = () => ({
  genre: 'chi'
})

export const mutations = {
  SET_WEBSITE_TYPE(state, genre) {
    state.genre = genre
  }
}

export const getters = {
  getWebsite: state => state.genre,
};
