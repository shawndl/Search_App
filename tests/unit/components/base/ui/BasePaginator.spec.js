import { expect } from 'chai'
import Helpers from 'mwangaben-vthelpers'
import { mount } from '@vue/test-utils'
import BasePaginate from '@/components/base/ui/BasePaginator'

describe('BasePaginate', () => {
  let wrapper, helpers

  beforeEach(() => {
    wrapper = mount(BasePaginate, {
      propsData: {
        pages: 10,
        current: 3,
        display: 10
      } })

    helpers = new Helpers(wrapper, expect)
  })

  it('BaseCard: it must tell the user the current page', function () {
    helpers.see('Page 3 of 10', 'span')
  })
})
