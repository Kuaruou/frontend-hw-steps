import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      lang: 'en'
    }
  },
  getters: {
    currentLang: state => {
      return state.lang
    }
  },
  mutations: {
    updateLang (state, value) {
      state.lang = value
      console.log('newlang', state.lang)
    }
  }
})