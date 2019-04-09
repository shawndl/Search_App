import { expect } from 'chai'
import * as search from '@/store/search'

const { getters } = search.default

describe('Vuex Search Module Getters', () => {
  let testState
  let results

  beforeEach(() => {
    results = [
      { 'id': 1, 'title': 'Pensions funding', 'rate': 3.5 },
      { 'id': 1, 'title': 'Business immigration', 'rate': 2.9 },
      { 'id': 1, 'title': 'UK business insurance law', 'rate': 4.9 }
    ]
    testState = {
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
      results: results
    }
  })

  it('search: get must be able to return the filter search from the state', () => {
    testState.filters.search = 'changed'
    expect(getters.search(testState)).to.equal('changed')
  })
  it('sortType: get must be able to return the sort type from the state', () => {
    testState.sort.type = 'title'
    expect(getters.sortType(testState)).to.equal('title')
  })
  it('sortAsc: get must be able to return if the sort is asc', () => {
    testState.sort.asc = false
    expect(getters.sortAsc(testState)).to.equal(false)
  })
  it('paginate: get must be able to return the paginate from the state', () => {
    testState.paginate = { pages: 50, current: 32 }
    expect(getters.paginate(testState).pages).to.equal(50)
    expect(getters.paginate(testState).current).to.equal(32)
  })
  it('results: get must return all results if filter and sort are set to default', () => {
    testState.results = results
    expect(getters.results(testState)).to.deep.equal(results)
  })
  it('results: it can filter results by the filter search', () => {
    testState.filters.search = 'immi'
    expect(getters.results(testState)).to.deep.equal(
      [{ 'id': 1, 'title': 'Business immigration', 'rate': 2.9 }]
    )
  })
  it('results: get can sort by title:asc', () => {
    testState.sort.type = 'title'
    expect(getters.results(testState)).to.deep.equal([
      { 'id': 1, 'title': 'Business immigration', 'rate': 2.9 },
      { 'id': 1, 'title': 'Pensions funding', 'rate': 3.5 },
      { 'id': 1, 'title': 'UK business insurance law', 'rate': 4.9 }
    ])
  })
  it('results: get can sort by title:desc', () => {
    testState.sort.type = 'title'
    testState.sort.asc = false
    expect(getters.results(testState)).to.deep.equal([
      { 'id': 1, 'title': 'UK business insurance law', 'rate': 4.9 },
      { 'id': 1, 'title': 'Pensions funding', 'rate': 3.5 },
      { 'id': 1, 'title': 'Business immigration', 'rate': 2.9 }
    ])
  })
  it('results: get can sort by rate:asc', () => {
    testState.sort.type = 'rate'
    expect(getters.results(testState)).to.deep.equal([
      { 'id': 1, 'title': 'UK business insurance law', 'rate': 4.9 },
      { 'id': 1, 'title': 'Pensions funding', 'rate': 3.5 },
      { 'id': 1, 'title': 'Business immigration', 'rate': 2.9 }
    ])
  })
  it('results: get can sort by rate:desc', () => {
    testState.sort.type = 'rate'
    testState.sort.asc = false
    expect(getters.results(testState)).to.deep.equal([
      { 'id': 1, 'title': 'Business immigration', 'rate': 2.9 },
      { 'id': 1, 'title': 'Pensions funding', 'rate': 3.5 },
      { 'id': 1, 'title': 'UK business insurance law', 'rate': 4.9 }
    ])
  })
})
