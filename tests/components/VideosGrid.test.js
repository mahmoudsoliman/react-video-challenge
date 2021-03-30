import React from 'react'
import VideosGrid from '../../src/components/VideosGrid'
import { shallow } from 'enzyme'
import { mockSearchExecutedAction, mockSearchResults } from '../helpers/mocks'
import {searchExecuted} from '../../src/actions/searchActions'
import * as reactredux from 'react-redux'

describe('VideosGrid Component Tests', () => {
  it('should render card group div', () => {
    const query = 'test'
    const videos = mockSearchResults()
    const useSelectorMock = jest.fn().mockReturnValueOnce(query).mockReturnValueOnce(videos)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)
    
    const wrapper = shallow(<VideosGrid />)
    const cardGroup = wrapper.find('.card-group')
    const cardGroupClasses = cardGroup.props().className.split(' ')
    expect(cardGroupClasses).toContain('row-cols-5')  
  })

  it('should render as many links as number of videos', () => {
    const query = 'test'
    const videos = mockSearchResults()
    const useSelectorMock = jest.fn().mockReturnValueOnce(query).mockReturnValueOnce(videos)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)

    const wrapper = shallow(<VideosGrid />)
    const links = wrapper.find('Link')
    expect(links.length).toEqual(2)
  })

  it('should render links containing div that contains the VideoCard', () => {
     const query = 'test'
    const videos = mockSearchResults()
    const useSelectorMock = jest.fn().mockReturnValueOnce(query).mockReturnValueOnce(videos)
    reactredux.useSelector = useSelectorMock
    const dispatch = jest.fn()
    reactredux.useDispatch = jest.fn( () => dispatch)

    const wrapper = shallow(<VideosGrid />)
    const cols = wrapper.find('.col').getElements()
    expect(cols.length).toEqual(2)
    const card = cols[0].props.children
    expect(card.props.video).toEqual(videos[0])
  })
})