import { getCurrentUser } from '../utils/getCurrentUser';

export const INITIAL_STATE = {
  user: getCurrentUser()?._id,
  title: '',
  category: '',
  cover: '',
  images: [],
  desc: '',
  shortTitle: '',
  shortDesc: '',
  deliveryTime: 0,
  revisionNumber: 0,
  features: '',
  price: 0,
};

export const gigReducer = (state, { payload, type }) => {
  switch (type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case 'ADD_IMAGES':
      return {
        ...state,
        cover: payload.cover,
        images: payload.images,
      };

    case 'ADD_FEATURES':
      return {
        ...state,
        features: [...state.features, payload],
      };

    case 'REMOVE_FEATURE':
      return {
        ...state,
        features: state.features.filter((feature) => feature !== payload),
      };

    default:
      return state;
  }
};
