import React from 'react'
import { DarkModeToggle } from '../../src/components/DarkModeToggle'
import { shallow } from 'enzyme'
import * as themeActions from '../../src/actions/themeActions'

const mockProps = () => {
  const darkThemeTriggered = jest.spyOn(themeActions, 'darkThemeTriggered')
  return {
    darkThemeTriggered
  }
}

describe('DarkModeToggle component tests', () => {
  test('should render custom control with type switch', () => {
    const props = {
      ...mockProps(),
      darkTheme: false
    }
    const wrapper = shallow(<DarkModeToggle {...props}/>)
    const customControl = wrapper.find('div')
    const controlClasses = customControl.props().className.split(' ')
    expect(controlClasses).toContain('custom-control')
    expect(controlClasses).toContain('custom-switch')
  })

  test('should render input field', () => {
    const props = {
      ...mockProps(),
      darkTheme: false
    }
    const wrapper = shallow(<DarkModeToggle {...props}/>)
    const input = wrapper.find('input')
    const inputClass = input.props().className
    const inputType = input.props().type
    const inputId = input.props().id
    expect(inputClass).toEqual('custom-control-input')
    expect(inputType).toEqual('checkbox')
    expect(inputId).toEqual('customSwitch1')
  })
  
  test('should render Dark Mode label', () => {
    const props = {
      ...mockProps(),
      darkTheme: false
    }
    const wrapper = shallow(<DarkModeToggle {...props}/>)
    const label = wrapper.find('label')
    const labelClasses = label.props().className.split(' ')
    const labelHtmlFor = label.props().htmlFor
    const labelText = label.props().children
    expect(labelClasses).toContain('custom-control-label')
    expect(labelClasses).toContain('text-white')
    expect(labelHtmlFor).toEqual('customSwitch1')
    expect(labelText).toEqual('Dark Mode')
  })

  test('should call darkThemeTriggered action with true when enabling dark mode', () => {
    const { darkThemeTriggered } = mockProps()
    const props = {
      darkThemeTriggered,
      darkTheme: false
    }
    const wrapper = shallow(<DarkModeToggle {...props}/>)
    const input = wrapper.find('input')
    input.simulate('change')

    expect(darkThemeTriggered).toHaveBeenCalledWith(true)
  })
  

  test('should call darkThemeTriggered action with false when disabling dark mode', () => {
    const { darkThemeTriggered } = mockProps()
    const props = {
      darkThemeTriggered,
      darkTheme: true
    }
    const wrapper = shallow(<DarkModeToggle {...props}/>)
    const input = wrapper.find('input')
    input.simulate('change')

    expect(darkThemeTriggered).toHaveBeenCalledWith(false)
  })
})