import reducer from './reducer';

import {
  setRestaurantName,
  setRestaurants,

  selectSituationTag,
  selectPlaceTag,
  selectCategoryTag,

  sortRestaurantsBySituation,
  sortRestaurantsByPlace,
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
        { id: 10, name: '청와옥', situation: '과음한 다음 날' },
      ]

      const state = reducer(initialState, setRestaurants(restaurantsData));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectSituationTag action', () => {
    const selectedId = 1;

    it('sorts "restaurants" array by selected id and sets "selectedSituation" obj', () => {
      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', situation: '과음한 다음 날' },
          { id: 2, name: '멘카야', situation: '혼밥' },
        ],
        selectedSituation: null,
      }

      const state = reducer(initialState, selectSituationTag(selectedId));

      expect(state.selectedSituation).toEqual({
        id: 1, name: '청와옥', situation: '과음한 다음 날',
      });
    });
  });

  describe('selectPlaceTag action', () => {
    const selectedId = 1;

    it('sorts "restaurants" array by selected id and sets "selectedPlace" obj', () => {
      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', place: '서울 송파구' },
          { id: 2, name: '멘카야', place: '서울 강남구' },
        ],
        selectedPlace: null,
      }

      const state = reducer(initialState, selectPlaceTag(selectedId));

      expect(state.selectedPlace).toEqual({
        id: 1, name: '청와옥', place: '서울 송파구',
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

  describe('sortRestaurantsBySituation action', () => {
    it('sorts "restaurants" array by hash tag keyword and puts data in "sortedRestaurantsBySituation" array', () => {
      const selectedTag = '과음한 다음 날';

      const initialState = {
        restaurants: [
          { id: 1, name: '청와옥', situation: '과음한 다음 날' },
          { id: 2, name: '멘카야', situation: '혼밥' },
        ],
        sortedRestaurantsBySituation: [],
      }

      const state = reducer(initialState, sortRestaurantsBySituation(selectedTag));

      expect(state.sortedRestaurantsBySituation).toHaveLength(1);
    });
  });

  describe('sortRestaurantsByPlace action', () => {
    it('sorts "sortedRestaurantsBySituation" array by hash tag keyword and puts data in "sortedRestaurantsByPlace" array', () => {
      const selectedTag = '서울 송파구';

      const initialState = {
        sortedRestaurantsBySituation: [
          { id: 1, name: '청와옥', place: '서울 송파구' },
          { id: 2, name: '멘카야', place: '서울 강남구' },
        ],
        sortedRestaurantsByPlace: [],
      }

      const state = reducer(initialState, sortRestaurantsByPlace(selectedTag));

      expect(state.sortedRestaurantsByPlace).toHaveLength(1);
    });
  });

  describe('sortRestaurantsByCategory action', () => {
    it('sorts "sortedRestaurantsByPlace" array by hash tag keyword and puts data in "sortedRestaurantsByCategory" array', () => {
      const selectedTag = '순대국밥';

      const initialState = {
        sortedRestaurantsByPlace: [
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
