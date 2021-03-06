import KintellService from '@/api/kintell/KintellService'
import { paginate } from '@/services/paginate/PaginateService'
import { sortBy } from '@/services/sort/SortService'

/**
 * module state object
 */
const state = {
  filters: {
    search: ''
  },
  sort: {
    type: 'none',
    asc: true
  },
  paginate: {
    pages: 0,
    current: 1,
    display: 10
  },
  results: [],
  full: []
}

/**
 * List all getters for the modules
 */
const getters = {
  search: (state) => {
    return state.filters.search
  },
  sortType: (state, getters, rootState) => {
    return state.sort.type
  },
  sortAsc: (state, getters, rootState) => {
    return state.sort.asc
  },
  paginate: (state, getters, rootState) => {
    return state.paginate
  },
  results: (state, getters, rootState) => {
    let clone = { ...state }
    if (clone.filters.search !== '') {
      clone.results = clone.results
        .filter(kintell => kintell.title.toLowerCase()
          .includes(state.filters.search.toLowerCase()))
    }
    if (clone.sort.type !== 'none') {
      clone.results = sortBy(clone.sort.type, clone.results, clone.sort.asc)
    }
    clone.results = paginate(state.paginate.current, state.paginate.display, clone.results)

    return clone.results
  }
}

/**
 * Module Mutations
 */
const mutations = {
  SET_SEARCH (state, payload) {
    state.filters.search = payload
  },
  SET_SORT_TYPE (state, payload) {
    if (payload === 'none') {
      state.results = [ ...state.full ]
    }
    state.sort.type = payload
  },
  SET_SORT_ASC (state, payload) {
    state.sort.asc = payload
  },
  SET_PAGINATE (state, payload) {
    state.paginate = payload
  },
  ON_NEXT (state) {
    if (state.paginate.current < state.paginate.pages) {
      state.paginate.current++
    }
  },
  ON_PREVIOUS (state) {
    if (state.paginate.current > 1) {
      state.paginate.current--
    }
  },
  SET_RESULTS (state, payload) {
    state.results = payload
    state.full = [ ...payload ]
    state.paginate.pages = Math.ceil(payload.length / state.paginate.display)
  },
  ON_RESET (state) {
    state.filters.search = ''
    state.sort = { type: 'none', asc: true }
    state.results = [ ...state.full ]
  }
}

/**
 * module actions
 */
const actions = {
  setResults ({ commit }) {
    KintellService.get()
      .then(response => commit('SET_RESULTS', response.data.data))
  },
  setPaginate ({ commit, state }, payload) {
    commit('SET_PAGINATE', payload)
  },
  onNext ({ commit, state }) {
    commit('ON_NEXT')
  },
  onPrevious ({ commit }) {
    commit('ON_PREVIOUS')
  },
  onReset ({ commit, state }, payload) {
    commit('ON_RESET', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
