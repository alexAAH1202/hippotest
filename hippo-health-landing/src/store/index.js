import { createStore } from 'vuex'

// Import modules if you're using a modular store structure
// import userModule from './modules/user'
// import productModule from './modules/product'

export default createStore({
  state: {
    // Define your root state here
    // For example:
    // user: null,
    // isLoading: false,
  },
  getters: {
    // Define your getters here
    // For example:
    // isLoggedIn: (state) => !!state.user,
  },
  mutations: {
    // Define your mutations here
    // For example:
    // SET_USER(state, user) {
    //   state.user = user
    // },
    // SET_LOADING(state, isLoading) {
    //   state.isLoading = isLoading
    // },
  },
  actions: {
    // Define your actions here
    // For example:
    // async login({ commit }, credentials) {
    //   commit('SET_LOADING', true)
    //   try {
    //     const user = await api.login(credentials)
    //     commit('SET_USER', user)
    //   } finally {
    //     commit('SET_LOADING', false)
    //   }
    // },
  },
  modules: {
    // Register your modules here if you're using them
    // user: userModule,
    // product: productModule,
  },
})
