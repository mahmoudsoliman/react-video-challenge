import { getMockStore, mockVideoSearch} from '../helpers/mocks'
import * as searchActions from '../../src/actions/searchActions'
import * as actionTypes from '../../src/actions/actionTypes'

describe('Search Actions Tests', () => {
  test('should call query changed and update the store with the new query', async () => {
    const mockStore = getMockStore()
    const store = mockStore({
      query: '',
      videos: []
    })

    const expectedActions = [
      {
        type: actionTypes.QUERY_CHANGED,
        payload: {
          query: 'test'
        }
      }
    ]

    await store.dispatch(searchActions.queryChanged('test'))
    const dispatchedActions = store.getActions()
    expect(dispatchedActions).toEqual(expectedActions)
  })
  
  test('should call video search and update the store and update the store with the videos', async () => {
    const mockedVideos = mockVideoSearch()
    const mockStore = getMockStore()
    const store = mockStore({
      query: 'test',
      videos: []
    })

    const expectedActions = [
      {
        type: actionTypes.SEARCH_EXECUTED,
        payload: {
          query: 'test',
          videos: mockedVideos
        }
      }
    ]
    await store.dispatch(searchActions.searchExecuted('test'))
    const dispatchedActions = store.getActions()
    expect(dispatchedActions).toEqual(expectedActions)
  })
})