import React from 'react'
import Home from '../../src/components/Home'
import { shallow } from 'enzyme'

describe('Home Component Tests', () => {
  it('should have black colored header as default', () => {
    const wrapper = shallow(<Home/>)
    const header = wrapper.select('h1')
    console.log({props: header.props()})
  })
})