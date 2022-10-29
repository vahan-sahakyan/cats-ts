import { CategoryAction } from './category.actions';
import { ActionTypes } from './category.types';
const {
  //
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} = ActionTypes;

const initialState = {
  categories: [] as object[],
  loading: false,
  error: null,
  categoryFromUrl: '',
};
const categoryReducer = (state = initialState, action: CategoryAction) => {
  switch (action.type) {
    // FETCH CATEGORIES
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        error: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default categoryReducer;
