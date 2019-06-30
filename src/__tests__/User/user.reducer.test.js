/* eslint-disable no-undef */
import reducer from '../../store/reducers/user';

const initialState = {
  data: {},
  loading: false,
  error: ''
};

const mockData = {
  login: 'callamwilliams',
  id: 1899003,
  avatar_url: 'https://avatars3.githubusercontent.com/u/1899003?v=4',
  html_url: 'https://github.com/callamwilliams',
  type: 'User',
  name: 'Callam',
  public_repos: 15
};

describe('getUser REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle "GET_USER" action', () => {
    expect(reducer({}, { type: 'GET_USER' })).toEqual({ loading: true });
  });
  it('should handle "GET_USER_SUCCESS" action', () => {
    expect(
      reducer(
        {},
        {
          type: 'GET_USER_SUCCESS',
          payload: mockData,
          loading: false,
          error: ''
        }
      )
    ).toEqual({
      data: mockData,
      loading: false,
      error: ''
    });
  });
});
