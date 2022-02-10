import reducer from './reducer';

import {
  setRestaurantName,
  setConditions,
  setRegions,
  setCategories,
  selectConditionTag,
  selectRegionTag,
  selectCategoryTag,
  getConditionTag,
  getRegionTag,
  getCategoryTag,
} from './actions';

describe('reducer', () => {
  describe('setRestaurantName action', () => {
    it('changes state of restaurantName from "" to "입력값" and update id', () => {
      const initialState = {
        newId: 100,
        restaurant: {
          id: '',
          name: '',
        },
      }
      
      const state = reducer(initialState, setRestaurantName({ value: '입력값' }));

      expect(state).toEqual({
        newId: 101,
        restaurant: {
          id: 100,
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
    it('set selectedCondition', () => {
      const initialState = {
        selectedCondition: null,
      }

      const state = reducer(initialState, selectConditionTag(1));

      expect(state.selectedCondition).toEqual({
        id: 1, name: '#혼밥', color: 'blue',
      });
    });
  });

  describe('selectRegionTag action', () => {
    it('set selectedRegion', () => {
      const initialState = {
        selectedRegion: null,
      }

      const state = reducer(initialState, selectRegionTag(1));

      expect(state.selectedRegion).toEqual({
        id: 1, name: '#서울 송파구', color: 'blue',
      });
    });
  });

  describe('selectCategoryTag action', () => {
    it('set selectedCategory', () => {
      const initialState = {
        selectedCategory: null,
      }

      const state = reducer(initialState, selectCategoryTag(1));

      expect(state.selectedCategory).toEqual({
        id: 1, name: '#면', color: 'blue',
      });
    });
  });

  describe('getConditionTag action', () => {
    it('set getCondtion', () => {
      const conditionObj = 
      { id: 10, name: '청와옥', condition: '과음한 다음 날' };

      const initialState = {
        getCondition: null,
      }

      const state = reducer(initialState, getConditionTag(conditionObj));

      expect(state.getCondition).toEqual({
        id: 10, name: '청와옥', condition: '과음한 다음 날', color: 'blue',
      });
    });
  });

  describe('getRegionTag action', () => {
    it('set getCondtion', () => {
    const regionObj = 
    { id: 10, name: '청와옥', region: '서울 송파구' };

      const initialState = {
        getRegion: null,
      }

      const state = reducer(initialState, getRegionTag(regionObj));

      expect(state.getRegion).toEqual({
        id: 10, name: '청와옥', region: '서울 송파구', color: 'blue'
      });
    });
  });

  describe('getCategoryTag action', () => {
    it('set getCategory', () => {
    const categoryObj = 
    { id: 10, name: '청와옥', category: '순대국밥' };

      const initialState = {
        getCategory: null,
      }

      const state = reducer(initialState, getCategoryTag(categoryObj));

      expect(state.getCategory).toEqual({
        id: 10, name: '청와옥', category: '순대국밥', color: 'blue'
      });
    });
  });
});
