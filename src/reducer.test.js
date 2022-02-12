import reducer from './reducer';

import {
  setRestaurantName,
  setRestaurants,

  selectConditionTag,
  selectRegionTag,
  selectCategoryTag,

  sortRestaurantsByCondition,
  sortRestaurantsByRegion,
  sortRestaurantsByCategory,
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

  describe('setRestaurants action', () => {
    it('changes state of restaurants with sorted JSON data', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurantsData = [
        { id: 10, name: '청와옥', condition: '과음한 다음 날' },
      ]

      const state = reducer(initialState, setRestaurants(restaurantsData));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectConditionTag action', () => {
    const selectedId = 1;

    it('sorts "restaurants" array by selected id and sets "selectedCondition" obj', () => {
      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', condition: '과음한 다음 날' },
          { id: 2, name: '멘카야', condition: '혼밥' },
        ],
        selectedCondition: null,
      }

      const state = reducer(initialState, selectConditionTag(selectedId));

      expect(state.selectedCondition).toEqual({
        id: 1, name: '청와옥', condition: '과음한 다음 날',
      });
    });
  });

  describe('selectRegionTag action', () => {
    const selectedId = 1;

    it('sorts "restaurants" array by selected id and sets "selectedRegion" obj', () => {
      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', region: '서울 송파구' },
          { id: 2, name: '멘카야', region: '서울 강남구' },
        ],
        selectedRegion: null,
      }

      const state = reducer(initialState, selectRegionTag(selectedId));

      expect(state.selectedRegion).toEqual({
        id: 1, name: '청와옥', region: '서울 송파구',
      });
    });
  });

  describe('selectCategoryTag action', () => {
    const selectedId = 1;

    it('sorts "restaurants" array by selected id and sets "selectedCategory" obj', () => {
      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', category: '순대국밥' },
          { id: 2, name: '멘카야', category: '라멘' },
        ],
        selectedCategory: null,
      }

      const state = reducer(initialState, selectCategoryTag(selectedId));

      expect(state.selectedCategory).toEqual({
        id: 1, name: '청와옥', category: '순대국밥',
      });
    });
  });

  describe('sortRestaurantsByCondition action', () => {
    it('sorts "restaurants" array by hash tag keyword and puts data in "sortedRestaurantsByCondition" array', () => {
      const selectedTag = '과음한 다음 날';

      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', condition: '과음한 다음 날' },
          { id: 2, name: '멘카야', condition: '혼밥' },
        ],
        sortedRestaurantsByCondition: [],
      }

      const state = reducer(initialState, sortRestaurantsByCondition(selectedTag));

      expect(state.sortedRestaurantsByCondition).toHaveLength(1);
    });
  });

  describe('sortRestaurantsByRegion action', () => {
    it('sorts "sortedRestaurantsByCondition" array by hash tag keyword and puts data in "sortedRestaurantsByRegion" array', () => {
      const selectedTag = '서울 송파구';

      const initialState = {
        sortedRestaurantsByCondition: [
          { id: 1, name: '청와옥', region: '서울 송파구' },
          { id: 2, name: '멘카야', region: '서울 강남구' },
        ],
        sortedRestaurantsByRegion: [],
      }

      const state = reducer(initialState, sortRestaurantsByRegion(selectedTag));

      expect(state.sortedRestaurantsByRegion).toHaveLength(1);
    });
  });

  describe('sortRestaurantsByCategory action', () => {
    it('sorts "sortedRestaurantsByRegion" array by hash tag keyword and puts data in "sortedRestaurantsByCategory" array', () => {
      const selectedTag = '순대국밥';

      const initialState = {
        sortedRestaurantsByRegion: [
          { id: 1, name: '청와옥', category: '순대국밥' },
          { id: 2, name: '멘카야', category: '일본식 라면' },
        ],
        sortedRestaurantsByCategory: [],
      }

      const state = reducer(initialState, sortRestaurantsByCategory(selectedTag));

      expect(state.sortedRestaurantsByCategory).toHaveLength(1);
    });
  });
});
