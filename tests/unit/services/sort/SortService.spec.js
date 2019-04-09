import { sortBy } from '@/services/sort/SortService'
import { expect } from 'chai'

describe('SortService', function () {
  let items
  beforeEach(function () {
    items = [
      { id: 2, name: 'Jake', email: 'jake@gmail.com', created_at: '2019-02-03 00:09:26' },
      { id: 1, name: 'Tom', email: 'tom@gmail.com', created_at: '2019-04-03 00:09:26' },
      { id: 3, name: 'Jen', email: 'jen@gmail.com', created_at: '2019-04-03 00:07:26' }
    ]
  })
  it('sortBy: can sort by name in asc order', function () {
    const sorted = sortBy('name', items)
    expect(sorted).to.deep.equal([
      { id: 2, name: 'Jake', email: 'jake@gmail.com', created_at: '2019-02-03 00:09:26' },
      { id: 3, name: 'Jen', email: 'jen@gmail.com', created_at: '2019-04-03 00:07:26' },
      { id: 1, name: 'Tom', email: 'tom@gmail.com', created_at: '2019-04-03 00:09:26' }
    ])
  })
  it('sortBy: can sort by name in desc order', function () {
    const sorted = sortBy('name', items, false)
    expect(sorted).to.deep.equal([
      { id: 1, name: 'Tom', email: 'tom@gmail.com', created_at: '2019-04-03 00:09:26' },
      { id: 3, name: 'Jen', email: 'jen@gmail.com', created_at: '2019-04-03 00:07:26' },
      { id: 2, name: 'Jake', email: 'jake@gmail.com', created_at: '2019-02-03 00:09:26' }
    ])
  })
  it('sortBy: can sort by number in asc order (largest number first)', function () {
    const sorted = sortBy('id', items)
    expect(sorted).to.deep.equal([
      { id: 3, name: 'Jen', email: 'jen@gmail.com', created_at: '2019-04-03 00:07:26' },
      { id: 2, name: 'Jake', email: 'jake@gmail.com', created_at: '2019-02-03 00:09:26' },
      { id: 1, name: 'Tom', email: 'tom@gmail.com', created_at: '2019-04-03 00:09:26' }
    ])
  })
  it('sortBy: can sort by date in desc order (smallest number first)', function () {
    const sorted = sortBy('id', items, false)
    expect(sorted).to.deep.equal([
      { id: 1, name: 'Tom', email: 'tom@gmail.com', created_at: '2019-04-03 00:09:26' },
      { id: 2, name: 'Jake', email: 'jake@gmail.com', created_at: '2019-02-03 00:09:26' },
      { id: 3, name: 'Jen', email: 'jen@gmail.com', created_at: '2019-04-03 00:07:26' }
    ])
  })
})
