import reducer from './reducer';

import {
  setRestaurantName,
  selectConditionTag,
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

  describe('selectConditionTag action', () => {
    it('finds clicked tag with selectedId', () => {
      const initialState = {
        conditions: [
          { id: 1, name: '#혼밥' },
          { id: 2, name: '#데이트' },
        ],
      }

      const state = reducer(initialState, selectConditionTag(1));

      expect(state.conditions).toEqual({
        id: 1, name: '#혼밥',
      });
    });
  });
});
