import React from 'react'
import { SearchForm } from '../../src/components/SearchForm'
import { shallow } from 'enzyme'
import * as searchActions from '../../src/actions/searchActions'

const mockProps = () => {
  const queryChanged = jest.spyOn(searchActions, 'queryChanged')
  const searchExecuted = jest.spyOn(searchActions, 'searchExecuted')
  return {
    queryChanged,
    searchExecuted
  }
}

describe('SearchForm Component Tests', () => {
  test('should render form', () => {

    const query = 'test'
    const props = {
      ...mockProps(),
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
      ...mockProps(),
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
    const {queryChanged, searchExecuted} = mockProps()
    const props = {
      queryChanged,
      searchExecuted,
      query
    }
    
    const wrapper = shallow(<SearchForm {...props}/>)
    const input = wrapper.find('input')
    const preventDefault = jest.fn()
    input.simulate('change', {
      target: {
        value: 'wizeline'
      },
      preventDefault 
    });
    
    expect(queryChanged).toHaveBeenCalledWith('wizeline')
  })
  
  test('should call search executed action with input value when pressing enter', () => {
    const query = 'test'
    const {queryChanged, searchExecuted} = mockProps()
    const props = {
      queryChanged,
      searchExecuted,
      query
    }
    
    const wrapper = shallow(<SearchForm {...props}/>)
    const input = wrapper.find('input')
    const preventDefault = jest.fn()
    
    input.simulate('keypress', {
      target: {
        value: 'wizeline' 
      }, 
      key: 'Enter',
      preventDefault
    })
    
    expect(searchExecuted).toHaveBeenCalledWith('wizeline')
  })
})
