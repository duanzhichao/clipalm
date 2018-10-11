const state = {
  activeTab: -1,
  menu: '病案'
}

const mutations = {
  SET_activeTab (state, x) {
    state.activeTab = x
  },
  SET_menu (state, x) {
    state.menu = x
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    commit('SET_activeTab')
    commit('SET_menu')
  }
}

export default {
  state,
  mutations,
  actions
}
