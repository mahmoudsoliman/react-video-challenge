import React from 'react'
import { SearchForm } from '../../src/components/SearchForm'
import { shallow } from 'enzyme'
import { queryChanged, searchExecuted } from '../../src/actions/searchActions'

describe('SearchForm Component Tests', () => {
  test('should render form', () => {
    const query = 'test'
    const props = {
      queryChanged,
      searchExecuted,
      query
    }
    const wrapper = shallow(<SearchForm {...props}/>)
    const form = wrapper.find('form')
    const formClass = form.props().className
    expect(formClass).toEqual('d-flex')
  })
  
  test('should render input field', () => {
    const query = 'test'
    const props = {
      queryChanged,
      searchExecuted,
      query
    }
    const wrapper = shallow(<SearchForm {...props}/>)
    const input = wrapper.find('input')
    const inputProps = input.props()
    const inputClasses = inputProps.className.split(' ')
    expect(inputClasses).toContain('form-control')
    expect(inputClasses).toContain('form-control')
    expect(inputProps.type).toEqual('search')
    expect(inputProps.placeholder).toEqual('Search')
    expect(inputProps.value).toEqual(query)
  })

  test('should call query changed action when changing input value', () => {
    const query = 'test'
    const props = {
      queryChanged,
      searchExecuted,
      query
    }
    const wrapper = shallow(<SearchForm {...props}/>)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'wizeline' } });
    input.simulate('keypress', {key: 'Enter'})
    expect(queryChanged).toBeCalledWith('wizeline')
  })
  
})
