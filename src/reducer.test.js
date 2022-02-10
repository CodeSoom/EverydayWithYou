import reducer from './reducer';

import {
  setRestaurantName,
  setConditions,
  setRegions,
  setCategories,

  selectConditionTag,
  selectRegionTag,
  selectCategoryTag,
  
  sortByCondition,
  sortByRegion,
  sortByCategory,
} from './actions';

jest.mock('react-redux');

describe('reducer', () => {
  // find, filter 메서드 모킹하는 방법?
  const find = jest.fn();
  const filter = jest.fn();

  find.mockImplementation(() => find());
  find.mockImplementation(() => filter());

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
    it('changes state of conditions with sorted JSON data', () => {
      const initialState = {
        conditions: [],
      };

      const conditionsArr = [
        { id: 10, name: '청와옥', condition: '과음한 다음 날' },
      ]

      const state = reducer(initialState, setConditions(conditionsArr));

      expect(state.conditions).toHaveLength(1);
    });
  });

  describe('setRegions action', () => {
    it('changes state of regions with sorted JSON data', () => {
      const initialState = {
        regions: [],
      };

      const regionsArr = [
        { id: 10, name: '청와옥', region: '서울 송파구' },
      ]

      const state = reducer(initialState, setRegions(regionsArr));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories action', () => {
    it('changes state of categories with sorted JSON data', () => {
      const initialState = {
        categories: [],
      };

      const categoriesArr = [
        { id: 10, name: '청와옥', category: '순대국밥' },
      ]

      const state = reducer(initialState, setCategories(categoriesArr));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectConditionTag action', () => {
    it('set selectedCondition', () => {
      const initialState = {
        selectedCondition: null,
      }

      const state = reducer(initialState, selectConditionTag(1));

      expect(state.selectedCondition).toEqual({
        id: 1, name: '청와옥', condition: '혼밥', color: 'blue',
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
        id: 1, name: '청와옥', condition: '서울 송파구', color: 'blue',
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
        id: 1, name: '청와옥', condition: '순대국밥', color: 'blue',
      });
    });
  });

  describe('sortByCondition action', () => {
    it('sorts conditions array', () => {
      const selectedName = '청와옥';

      const initialState = {
        sortedConditions: [],
      }

      const state = reducer(initialState, sortByCondition(selectedName));

      expect(state.sortedConditions).toHaveLength(1);
    });
  });

  describe('sortByRegion action', () => {
    it('sorts regions array', () => {
      const selectedName = '청와옥';

      const initialState = {
        sortedRegions: [],
      }

      const state = reducer(initialState, sortByRegion(selectedName));

      expect(state.sortedRegions).toHaveLength(1);
    });
  });

  describe('sortByCategory action', () => {
    it('sorts categories array', () => {
      const selectedName = '청와옥';

      const initialState = {
        sortedCategories: [],
      }

      const state = reducer(initialState, sortByCategory(selectedName));

      expect(state.sortedCategories).toHaveLength(1);
    });
  });
});
