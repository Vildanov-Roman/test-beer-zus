import create from 'zustand';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2';

export const useStore = create((set) => ({
  beers: [],
  beer: null,
  getBeers: async (page, perPage) => {
    try {
      const response = await axios.get(`/beers?page=${page}&per_page=${perPage}`);
      set({ beers: response.data });
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  },
  getBeerById: async (id) => {
    try {
      const response = await axios.get(`/beers/${id}`);
      set({ beer: response.data });
    } catch (error) {
      console.error('Error fetching beer:', error);
    }
  },

  removeBeer: (beer) =>
    set((state) => ({ beers: state.beers.filter((el) => el !== beer) })),

  visibleButtonId: [],

  toggleButtonVisibility: (id) => {
    set((state) => {
      const visibleButtonId = state.visibleButtonId.includes(id)
      ? state.visibleButtonId.filter((buttonId) => buttonId !== id)
        : [...state.visibleButtonId, id]
      return ({visibleButtonId})
    })
  },

  deleteBeer: (id) => {
    set((state) => ({
      beers: state.beers.filter((beer) => beer.id !== id),
    }));
  },

}));

export default useStore;

