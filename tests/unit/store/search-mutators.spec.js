import { expect } from 'chai'
import * as search from '@/store/search'

const { mutations, state } = search.default

describe('Vuex Search Module Mutator', () => {
  it('SET_SEARCH: mutator must be able to change the text state', () => {
    mutations.SET_SEARCH(state, 'changed')
    expect(state.filters.search).to.equal('changed')
  })
  it('SET_SORT_TYPE: mutator must be able to change the sort type state', () => {
    mutations.SET_SORT_TYPE(state, 'title')
    expect(state.sort.type).to.equal('title')
  })
  it('SET_SORT_ASC: mutator must be able to change the sort ASC state', () => {
    mutations.SET_SORT_ASC(state, true)
    expect(state.sort.asc).to.equal(true)
  })
  it('SET_PAGINATE: mutator must be able to change the paginate state', () => {
    mutations.SET_PAGINATE(state, { pages: 20, current: 15, display: 10 })
    expect(state.paginate).to.deep.equal({ pages: 20, current: 15, display: 10 })
  })
  it('ON_PREVIOUS: mutator can move the current page down by 1', () => {
    mutations.SET_PAGINATE(state, { pages: 10, current: 2, display: 10 })
    mutations.ON_PREVIOUS(state)
    expect(state.paginate.current).to.equal(1)
  })
  it('ON_PREVIOUS: if the current page is one, it will not move the page down', () => {
    mutations.SET_PAGINATE(state, { pages: 10, current: 1, display: 10 })
    mutations.ON_PREVIOUS(state)
    expect(state.paginate.current).to.equal(1)
  })
  it('ON_NEXT: mutator can move the current page up by 1', () => {
    mutations.SET_PAGINATE(state, { pages: 10, current: 1, display: 10 })
    mutations.ON_NEXT(state)
    expect(state.paginate.current).to.equal(2)
  })
  it('ON_NEXT: if the pagination is on the last page it will not move up', () => {
    mutations.SET_PAGINATE(state, { pages: 10, current: 10, display: 10 })
    mutations.ON_NEXT(state)
    expect(state.paginate.current).to.equal(10)
  })
  it('SET_RESULTS: mutator must be able to set the results', () => {
    mutations.SET_RESULTS(state, [1, 2, 3])
    expect(state.results).to.deep.equal([1, 2, 3])
  })
  it('SET_RESULTS: mutator must be able to set the full property', () => {
    mutations.SET_RESULTS(state, [1, 2, 3])
    expect(state.full).to.deep.equal([1, 2, 3])
  })
  it('SET_RESULTS: mutator must be able to set pages property in paginate', () => {
    mutations.SET_RESULTS(state, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect(state.paginate.pages).to.equal(2)
  })
  it('ON_RESET: mutator must be able to reset the state', () => {
    mutations.ON_RESET(state)
    expect(state.filters.search).to.equal('')
    expect(state.sort).to.deep.equal({ type: 'none', asc: true })
  })
})
