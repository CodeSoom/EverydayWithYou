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
    const selectedId = 1;

    it('sorts "conditions" array by selected id and sets "selectedCondition" obj', () => {
      const initialState = {
        conditions: [
          {id: 1, name: '청와옥', condition: '과음한 다음 날'},
          {id: 2, name: '멘카야', condition: '혼밥'}
        ],
        selectedCondition: null,
      }

      const state = reducer(initialState, selectConditionTag(selectedId));

      expect(state.selectedCondition).toEqual({
        id: 1, name: '청와옥', condition: '과음한 다음 날', color: 'blue',
      });
    });
  });

  describe('selectRegionTag action', () => {
    const selectedId = 1;

    it('sorts "regions" array by selected id and sets "selectedRegion" obj', () => {
      const initialState = {
        regions: [
          {id: 1, name: '청와옥', region: '서울 송파구'},
          {id: 2, name: '멘카야', region: '서울 강남구'}
        ],
        selectedRegion: null,
      }

      const state = reducer(initialState, selectRegionTag(selectedId));

      expect(state.selectedRegion).toEqual({
        id: 1, name: '청와옥', region: '서울 송파구', color: 'blue',
      });
    });
  });

  describe('selectCategoryTag action', () => {
    const selectedId = 1;

    it('sorts "categories" array by selected id and sets "selectedCategory" obj', () => {
      const initialState = {
        categories: [
          {id: 1, name: '청와옥', category: '순대국밥'},
          {id: 2, name: '멘카야', category: '라멘'}
        ],
        selectedCategory: null,
      }

      const state = reducer(initialState, selectCategoryTag(selectedId));

      expect(state.selectedCategory).toEqual({
        id: 1, name: '청와옥', category: '순대국밥', color: 'blue',
      });
    });
  });

  describe('sortByCondition action', () => {
    it('sorts "conditions" array by condition keyword and puts data in "sortedConditions" array', () => {
      const selectedName = '과음한 다음 날';

      const initialState = {
        conditions: [
          {id: 1, name: '청와옥', condition: '과음한 다음 날'},
          {id: 2, name: '멘카야', condition: '혼밥'}
        ],
        sortedConditions: [],
      }

      const state = reducer(initialState, sortByCondition(selectedName));

      expect(state.sortedConditions).toHaveLength(1);
    });
  });

  describe('sortByRegion action', () => {
    it('sorts "regions" array by region keyword and puts data in "sortedRegions" array', () => {
      const selectedName = '서울 송파구';

      const initialState = {
        regions: [
          {id: 1, name: '청와옥', region: '서울 송파구'},
          {id: 2, name: '멘카야', region: '서울 강남구'}
        ],
        sortedRegions: [],
      }

      const state = reducer(initialState, sortByRegion(selectedName));

      expect(state.sortedRegions).toHaveLength(1);
    });
  });

  describe('sortByCategory action', () => {
    it('sorts "categories" array by categorie keyword and puts data in "sortedCategories" array', () => {
      const selectedName = '순대국밥';

      const initialState = {
        categories: [
          {id: 1, name: '청와옥', categorie: '순대국밥'},
          {id: 2, name: '멘카야', categorie: '라멘'}
        ],
        sortedCategories: [],
      }

      const state = reducer(initialState, sortByCategory(selectedName));

      expect(state.sortedCategories).toHaveLength(1);
    });
  });
});
