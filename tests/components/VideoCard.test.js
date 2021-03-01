import React from 'react'
import { VideoCard } from '../../src/components/VideoCard'
import { shallow } from 'enzyme'
import { mockVideoObject } from '../helpers/mocks'

describe('VideoCard Component Tests', () => {
  it('should div with light theme class', () => {
    const video = mockVideoObject()
    const props = {
      darkTheme: false,
      video
    }
    const wrapper = shallow(<VideoCard {...props}/>)
    const card = wrapper.find('.card')
    const classes = card.props().className.split(' ')
    expect(classes).toContain('light-theme')
  })

  it('should div with dark theme class', () => {
    const video = mockVideoObject()
    const props = {
      darkTheme: true,
      video
    }
    const wrapper = shallow(<VideoCard {...props}/>)
    const card = wrapper.find('.card')
    const classes = card.props().className.split(' ')
    expect(classes).toContain('dark-theme')
  })

  it('should contain video thumbnail', () => {
    const video = mockVideoObject()
    const props = {
      darkTheme: true,
      video
    }
    const wrapper = shallow(<VideoCard {...props}/>)
    const image = wrapper.find('img')
    const imageProps = image.props()
    expect(imageProps.className).toEqual('card-img-top')
    expect(imageProps.src).toEqual(video.thumbnail)
  })

  it('should contain card body with title and description', () => {
    const video = mockVideoObject()
    const props = {
      darkTheme: true,
      video
    }
    const wrapper = shallow(<VideoCard {...props}/>)
    const cardBody = wrapper.find('.card-body')
    const bodyElements = cardBody.props().children
    const cardTitle = bodyElements.find(element => element.type === 'h5')
    const cardTitleClasses = cardTitle.props.className.split(' ')
    expect(cardTitleClasses).toContain('card-title')
    expect(cardTitleClasses).toContain('dark-theme')
    expect(cardTitle.props.children).toEqual(video.title)

    const cardDescription = bodyElements.find(element => element.type === 'p')
    const cardDescriptionClasses = cardDescription.props.className.split(' ')
    expect(cardDescriptionClasses).toContain('card-text')
    expect(cardDescriptionClasses).toContain('dark-theme')
    expect(cardDescription.props.children).toEqual(video.description)
  })
})