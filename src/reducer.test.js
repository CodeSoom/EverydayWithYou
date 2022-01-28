import reducer from './reducer';

import {
  setRestaurantName,
} from './actions';

describe('reducer', () => {
  describe('setRestaurantName action', () => {
    it('changes state of restaurantName from "" to "입력값"', () => {
      const initialState = {
        restaurant: {
          name: '',
        },
      }

      const state = reducer(initialState, setRestaurantName({ value: '입력값' }));

      expect(state).toEqual({
        restaurant: {
          name: '입력값',
        },
      });
    });
  });
});
