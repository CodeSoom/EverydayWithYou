import reducer from './reducer';

import {
  setRestaurants,
  filterRestaurantsBySituation,
  filterRestaurantsByCategory,
  filterRestaurantsByPlace,
} from './actions';

jest.mock('react-redux');

describe('reducer', () => {
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
          "place": "마포구/홍대",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": null,
          "after_course": null,
        },
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "왕십리/성동",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "after_course": null,
        },
      ]

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });

  describe('filterRestaurantsBySituation action', () => {
    it('changes state of restaurants with new restaurants', () => {
      const initialState = {
        restaurants: [
          {
            "id": "35",
            "name": "주옥",
            "situation": "기념일",
            "age": "20대",
            "place": "중구/을지로",
            "category": "한식",
            "priceRange": "3~5만원",
            "mood": "고급스러운",
            "after_course": null,
          },
          {
            "id": "36",
            "name": "보이어",
            "situation": "데이트",
            "age": "20대",
            "place": "왕십리/성동",
            "category": "양식",
            "priceRange": "3만원 이하",
            "mood": "고급스러운",
            "after_course": null,
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
          "place": "왕십리/성동",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "after_course": null,
        },
      ];

      const state = reducer(initialState, filterRestaurantsBySituation(filteredRestaurants));

      expect(state.situationRestaurantsData).toHaveLength(1);
      expect(state.color).toBe('select');
      expect(state.sortNumber).not.toBeNull();
    });
  });

  describe('filterRestaurantsByCategory action', () => {
    it('changes state of restaurants with new restaurants', () => {
      const initialState = {
        restaurantsData: [
          {
            "id": "35",
            "name": "주옥",
            "situation": "기념일",
            "age": "20대",
            "place": "중구/을지로",
            "category": "한식",
            "priceRange": "3~5만원",
            "mood": "고급스러운",
            "after_course": null,
          },
          {
            "id": "36",
            "name": "보이어",
            "situation": "데이트",
            "age": "20대",
            "place": "왕십리/성동",
            "category": "양식",
            "priceRange": "3만원 이하",
            "mood": "고급스러운",
            "after_course": null,
          },
        ],
        categoryRestaurantsData: [],
        filteredRestaurantsData: [],
        categoryColor: '',
      };

      const filteredRestaurantsByCategory = [
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "왕십리/성동",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "after_course": null,
        },
      ];

      const state = reducer(initialState, filterRestaurantsByCategory(filteredRestaurantsByCategory));

      expect(state.categoryRestaurantsData).toHaveLength(1);
      expect(state.filteredRestaurantsData).toHaveLength(1);
      expect(state.categoryColor).toBe('select');
    });
  });

  describe('filterRestaurantsByPlace action', () => {
    it('changes state of restaurants with new restaurants', () => {
      const initialState = {
        restaurantsData: [
          {
            "id": "35",
            "name": "주옥",
            "situation": "기념일",
            "age": "20대",
            "place": "중구/을지로",
            "category": "한식",
            "priceRange": "3~5만원",
            "mood": "고급스러운",
            "after_course": null,
          },
          {
            "id": "36",
            "name": "보이어",
            "situation": "데이트",
            "age": "20대",
            "place": "왕십리/성동",
            "category": "양식",
            "priceRange": "3만원 이하",
            "mood": "고급스러운",
            "after_course": null,
          },
        ],
        placeRestaurantsData: [],
        filteredRestaurantsData: [],
        placeColor: '',
      };

      const filteredRestaurantsByPlace = [
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "왕십리/성동",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "after_course": null,
        },
      ];

      const state = reducer(initialState, filterRestaurantsByPlace(filteredRestaurantsByPlace));

      expect(state.placeRestaurantsData).toHaveLength(1);
      expect(state.filteredRestaurantsData).toHaveLength(1);
      expect(state.placeColor).toBe('select');
    });
  });
});
