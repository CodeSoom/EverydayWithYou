import reducer from './reducer';

import {
  setRestaurantName,
  setRestaurants,
  filterRestaurantsBySituation,
} from './actions';

jest.mock('react-redux');

describe('reducer', () => {
  // 레스토랑 JSON데이터 셋!
  describe('setRestaurants action', () => {
    it('sets restaurants with JSON data', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "none",
          "2nd-course": "none",
        },
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "성수",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
        },
      ]

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });

  // 필터된 restaurants로 레스토랑 업데이트
  describe('filterRestaurantsBySituation action', () => {
    it('changes state of restaurants with new restaurants', () => {
      const initialState = {
        restaurants: [
          {
            "id": "35",
            "name": "주옥",
            "situation": "기념일",
            "age": "20대",
            "place": "을지로",
            "category": "한식",
            "priceRange": "3~5만원",
            "mood": "고급스러운",
            "2nd-course": "none",
          },
          {
            "id": "36",
            "name": "보이어",
            "situation": "데이트",
            "age": "20대",
            "place": "성수",
            "category": "양식",
            "priceRange": "3만원 이하",
            "mood": "고급스러운",
            "2nd-course": "none",
          },
        ],
        situationRestaurantsData: [],
        color: '',
        sortNumber: '',
      };

      const filteredRestaurants = [
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "성수",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
        },
      ];

      const state = reducer(initialState, filterRestaurantsBySituation(filteredRestaurants));

      expect(state.situationRestaurantsData).toHaveLength(1);
      expect(state.color).toBe('select');
      expect(state.sortNumber).not.toBeNull();
    });
  });

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
});
