import { expect } from 'chai'
import * as search from '@/store/search'

const { mutations, state } = search.default

describe('search', () => {
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
    mutations.SET_PAGINATE(state, { pages: 20, current: 15, display: 5 })
    expect(state.paginate).to.deep.equal({ pages: 20, current: 15, display: 5 })
  })
  it('SET_RESULTS: mutator must be able to set the results', () => {
    mutations.SET_RESULTS(state, [1, 2, 3])
    expect(state.results).to.deep.equal([1, 2, 3])
  })
  it('ON_RESET: mutator must be able to reset the state', () => {
    mutations.ON_RESET(state)
    expect(state.filters.search).to.equal('')
    expect(state.sort).to.deep.equal({ type: 'none', asc: true })
  })
})
