import React from 'react'
import Home from '../../src/components/Home'
import { shallow } from 'enzyme'
import * as reactredux from 'react-redux'

describe('Home Component Tests', () => {
  it('should have light theme header', () => {
    const darkTheme = false
    const useSelectorMock = jest.fn().mockReturnValueOnce(darkTheme)
    reactredux.useSelector = useSelectorMock

    const wrapper = shallow(<Home />)
    const header = wrapper.find('h1')
    const classes = header.props().className.split(' ')
    expect(classes).toContain('home-title')
    expect(classes).toContain('light-theme')
    expect(header.props().children).toEqual('Welcome To The Challenge!')
  })

  it('should have dark theme header', () => {
    const darkTheme = true
    const useSelectorMock = jest.fn().mockReturnValueOnce(darkTheme)
    reactredux.useSelector = useSelectorMock

    const wrapper = shallow(<Home />)
    const header = wrapper.find('h1')
    const classes = header.props().className.split(' ')
    expect(classes).toContain('home-title')
    expect(classes).toContain('dark-theme')
    expect(header.props().children).toEqual('Welcome To The Challenge!')
  })
})