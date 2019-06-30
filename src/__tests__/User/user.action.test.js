/* eslint-disable no-undef */
import { getUser } from '../../store/actions/user';

describe('getUser ACTION', () => {
  it('should create an action with the correct type', () => {
    const expectedAction = {
      type: 'GET_USER',
      payload: {
        username: undefined
      }
    };
    expect(getUser()).toEqual(expectedAction);
  });
});
