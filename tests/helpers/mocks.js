import * as searchActions from '../../src/actions/searchActions'
import * as videoService from '../../src/services/videoService'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'


export const mockSearchExecutedAction = () => {
  searchActions.searchExecuted = jest.fn()
  return [
    {
      id: '1234',
      title: 'Video 1',
      description: 'test vidoe 1',
      thumbnail: 'testimage.png',
      url: `https://www.youtube.com/watch?v=1234`
    },
    {
      id: '1742',
      title: 'Video 2',
      description: 'test vidoe 2',
      thumbnail: 'testimage.png',
      url: `https://www.youtube.com/watch?v=1742`
    }
  ]
}

export const mockQueryChangedAction = () => {
  searchActions.queryChanged = jest.fn()
}

export const mockVideoObject = () => {
  return {
    id: '1234',
    title: 'Video 1',
    description: 'test vidoe 1',
    thumbnail: 'testimage.png',
    url: `https://www.youtube.com/watch?v=1234`
  }
}

export const mockSearchResults = () => {
  return [
    {
      id: '1234',
      title: 'Video 1',
      description: 'test vidoe 1',
      thumbnail: 'testimage.png',
      url: `https://www.youtube.com/watch?v=1234`
    },
    {
      id: '1742',
      title: 'Video 2',
      description: 'test vidoe 2',
      thumbnail: 'testimage.png',
      url: `https://www.youtube.com/watch?v=1742`
    }
  ]
}

export const mockVideoSearch = () => {
  const result = [mockVideoObject()]
  videoService.search = jest.fn(() => { 
    return result
  })
  return result
}

export const getMockStore = () => {
  const middlewares = [thunk]
  return configureMockStore(middlewares)
}