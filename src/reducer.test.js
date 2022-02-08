import reducer from './reducer';

import {
  setRestaurantName,
  setConditions,
  setRegions,
  setCategories,
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

  describe('setConditions action', () => {
    it('changes state of newConditions with sorted JSON data', () => {
      const initialState = {
        newConditions: [],
      };

      const conditionsArr = [
        { id: 10, name: '청와옥', condition: '과음한 다음 날' },
      ]

      const state = reducer(initialState, setConditions(conditionsArr));

      expect(state.newConditions).toHaveLength(1);
    });
  });

  describe('setRegions action', () => {
    it('changes state of newRegions with sorted JSON data', () => {
      const initialState = {
        newRegions: [],
      };

      const regionsArr = [
        { id: 10, name: '청와옥', region: '서울 송파구' },
      ]

      const state = reducer(initialState, setRegions(regionsArr));

      expect(state.newRegions).toHaveLength(1);
    });
  });

  describe('setCategories action', () => {
    it('changes state of newCategories with sorted JSON data', () => {
      const initialState = {
        newCategories: [],
      };

      const categoriesArr = [
        { id: 10, name: '청와옥', category: '순대국밥' },
      ]

      const state = reducer(initialState, setCategories(categoriesArr));

      expect(state.newCategories).toHaveLength(1);
    });
  });


  describe('selectConditionTag action', () => {
    it('finds clicked tag with selectedId', () => {
      const initialState = {
        selectedCondition: {},
      }

      const state = reducer(initialState, selectConditionTag(1));

      expect(state.selectedCondition).toEqual({
        color: 'blue', id: 1, name: '#혼밥',
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
        color: 'blue', id: 1, name: '#서울 송파구',
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
        color: 'blue', id: 1, name: '#면',
      });
    });
  });
});
