import React from 'react'
import { VideosGrid } from '../../src/components/VideosGrid'
import { shallow } from 'enzyme'
import { mockSearchExecutedAction } from '../helpers/mocks'
import {searchExecuted} from '../../src/actions/searchActions'

describe('VideosGrid Component Tests', () => {
  it('should render card group div', () => {
    const videos = mockSearchExecutedAction()
    const props = {
      query: 'test',
      videos,
      searchExecuted
    }
    const wrapper = shallow(<VideosGrid {...props}/>)
    const cardGroup = wrapper.find('.card-group')
    const cardGroupClasses = cardGroup.props().className.split(' ')
    expect(cardGroupClasses).toContain('row-cols-5')  
  })

  it('should render as many links as number of videos', () => {
    const videos = mockSearchExecutedAction()
    const props = {
      query: 'test',
      videos,
      searchExecuted
    }
    const wrapper = shallow(<VideosGrid {...props}/>)
    const links = wrapper.find('Link')
    expect(links.length).toEqual(2)
  })

  it('should render links containing div that contains the VideoCard', () => {
    const videos = mockSearchExecutedAction()
    const props = {
      query: 'test',
      videos,
      searchExecuted
    }
    const wrapper = shallow(<VideosGrid {...props}/>)
    const cols = wrapper.find('.col').getElements()
    expect(cols.length).toEqual(2)
    const card = cols[0].props.children
    expect(card.props.video).toEqual(videos[0])
  })
})