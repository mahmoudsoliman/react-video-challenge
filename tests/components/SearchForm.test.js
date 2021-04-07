import React from 'react'
import SearchForm from '../../src/components/SearchForm'
import { shallow } from 'enzyme'
import * as reactredux from 'react-redux'

describe('SearchForm Component Tests', () => {
  test('should render form', () => {
    const query = 'test'
    const useSelectorMock = jest.fn().mockReturnValueOnce(query)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));

    const wrapper = shallow(<SearchForm />)
    const form = wrapper.find('form')
    const formClass = form.props().className
    expect(formClass).toEqual('d-flex')
  })
  
  test('should render input field', () => {
    const query = 'test'
    const useSelectorMock = jest.fn().mockReturnValueOnce(query)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));

    const wrapper = shallow(<SearchForm />)
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
    const useSelectorMock = jest.fn().mockReturnValueOnce(query)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
    
    const wrapper = shallow(<SearchForm />)
    const input = wrapper.find('input')
    const preventDefault = jest.fn()
    input.simulate('change', {
      target: {
        value: 'wizeline'
      },
      preventDefault 
    });
    
    expect(dispatch).toHaveBeenCalled()
  })
  
  test('should call search executed action with input value when pressing enter', () => {
    const query = 'test'
    const useSelectorMock = jest.fn().mockReturnValueOnce(query)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
          push: jest.fn()
      }),
    }));
    
    const wrapper = shallow(<SearchForm />)
    const input = wrapper.find('input')
    const preventDefault = jest.fn()
    
    input.simulate('keypress', {
      target: {
        value: 'wizeline' 
      }, 
      key: 'Enter',
      preventDefault
    })
    
    expect(dispatch).toHaveBeenCalled()
  })
})
