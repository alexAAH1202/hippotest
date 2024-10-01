import { createStore } from 'vuex'

// Import modules if you're using a modular store structure
// import userModule from './modules/user'
// import productModule from './modules/product'

export default createStore({
  state: {
    signups: [],
    isSubmitting: false,
    submissionError: null,
  },
  getters: {
    totalSignups: (state) => state.signups.length,
  },
  mutations: {
    ADD_SIGNUP(state, signup) {
      state.signups.push(signup)
    },
    SET_SUBMITTING(state, isSubmitting) {
      state.isSubmitting = isSubmitting
    },
    SET_SUBMISSION_ERROR(state, error) {
      state.submissionError = error
    },
  },
  actions: {
    async submitSignup({ commit }, signupData) {
      commit('SET_SUBMITTING', true)
      commit('SET_SUBMISSION_ERROR', null)
      try {
        // Here you would typically make an API call
        // For example: await api.submitSignup(signupData)
        console.log('Submitting signup:', signupData)
        
        // Simulating an API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        commit('ADD_SIGNUP', signupData)
      } catch (error) {
        commit('SET_SUBMISSION_ERROR', error.message)
      } finally {
        commit('SET_SUBMITTING', false)
      }
    },
  },
})
