import { paginate } from '@/services/paginate/PaginateService'
import { expect } from 'chai'

describe('PaginateService', function () {
  let items
  beforeEach(function () {
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  })
  it('paginate should be able to paginated results', function () {
    const paginated = paginate(2, 3, items)
    expect(paginated).to.deep.equal([4, 5, 6])
  })
})
