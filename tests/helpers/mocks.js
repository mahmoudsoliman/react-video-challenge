import * as searchActions from '../../src/actions/searchActions'

export const mockVideoSearch = () => {
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

export const mockVideoObject = () => {
  return {
    id: '1234',
    title: 'Video 1',
    description: 'test vidoe 1',
    thumbnail: 'testimage.png',
    url: `https://www.youtube.com/watch?v=1234`
  }
}