import reducer from './reducer';

import {
  setRestaurantName,
  selectConditionTag,
  selectRegionTag,
  selectCategoryTag,
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
        selectedCondition: {},
      }

      const state = reducer(initialState, selectConditionTag(1));

      expect(state.selectedCondition).toEqual({
        id: 1, name: '#혼밥',
      });
    });
  });

  describe('selectRegionTag action', () => {
    it('finds clicked tag with selectedId', () => {
      const initialState = {
        selectedRegion: {},
      }

      const state = reducer(initialState, selectRegionTag(1));

      expect(state.selectedRegion).toEqual({
        id: 1, name: '#서울 송파구',
      });
    });
  });

  describe('selectCategoryTag action', () => {
    it('finds clicked tag with selectedId', () => {
      const initialState = {
        selectedCategory: {},
      }

      const state = reducer(initialState, selectCategoryTag(1));

      expect(state.selectedCategory).toEqual({
        id: 1, name: '#면',
      });
    });
  });
});
