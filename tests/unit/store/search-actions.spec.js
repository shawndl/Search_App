import { expect } from 'chai'
import * as search from '@/store/search'
import KintellService from '@/api/kintell/KintellService'
import sinon from 'sinon'
import { testAction } from '../helpers'

const { actions } = search.default

describe('Vuex Search Module Actions', () => {
  let newState

  beforeEach(() => {
    newState = {}
  })
  it('setResults: it must be able to make an api call to get kintell', (done) => {
    sinon.stub(KintellService, 'get')
      .resolves({ data: { data: [1, 2, 3] } })
    testAction(actions.setResults, null, newState, [
      { type: 'SET_RESULTS', payload: [1, 2, 3] }
    ], done, expect)
  })
  it('onNext: set paginate must call the ON_NEXT commit', (done) => {
    testAction(actions.onNext, null, newState, [
      { type: 'ON_NEXT', payload: null }
    ], done, expect)
  })
  it('onPrevious: set paginate must call the ON_PREVIOUS commit', (done) => {
    testAction(actions.onPrevious, null, newState, [
      { type: 'ON_PREVIOUS', payload: null }
    ], done, expect)
  })
  it('setPaginate: set paginate must call the SET_PAGINATE commit with the payload', (done) => {
    testAction(actions.setPaginate, { pages: 3, current: 2, display: 10 }, newState, [
      { type: 'SET_PAGINATE', payload: { pages: 3, current: 2, display: 10 } }
    ], done, expect)
  })
  it('onReset: the on reset must call the ON_RESET commit', (done) => {
    testAction(actions.onReset, null, newState, [
      { type: 'ON_RESET' }
    ], done, expect)
  })
})
