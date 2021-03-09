import React from 'react'
import { Home } from '../../src/components/Home'
import { shallow } from 'enzyme'
import { mockVideoSearch } from '../helpers/mocks'

describe('Home Component Tests', () => {
  it('should have light theme header', () => {
    mockVideoSearch()
    const props = {
      darkTheme: false
    }
    const wrapper = shallow(<Home {...props}/>)
    const header = wrapper.find('h1')
    const classes = header.props().className.split(' ')
    expect(classes).toContain('home-title')
    expect(classes).toContain('light-theme')
    expect(header.props().children).toEqual('Welcome To The Challenge!')
  })

  it('should have dark theme header', () => {
    mockVideoSearch()
    const props = {
      dispatch: jest.fn(),
      darkTheme: true
    }
    const wrapper = shallow(<Home {...props}/>)
    const header = wrapper.find('h1')
    const classes = header.props().className.split(' ')
    expect(classes).toContain('home-title')
    expect(classes).toContain('dark-theme')
    expect(header.props().children).toEqual('Welcome To The Challenge!')
  })
})