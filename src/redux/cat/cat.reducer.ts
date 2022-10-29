import { nanoid } from 'nanoid';
import CatType from '../../types/cat.type';
import { CatAction } from './cat.actions';

import { ActionTypes } from './cat.types';
const {
  FETCH_CATS_START,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  //
  FETCH_MORE_CATS_START,
  FETCH_MORE_CATS_SUCCESS,
  FETCH_MORE_CATS_FAILURE,
  //
  TOGGLE_IS_ZOOMED,
} = ActionTypes;

const initialState = {
  cats: [] as object[],
  uniqueId: 0,
  loading: false,
};

const catReducer = (state = initialState, action: CatAction) => {
  switch (action.type) {
    // FETCH CATS
    case FETCH_CATS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        cats: [...(action.payload as [])].map(cat => ({
          ...(cat as object),
          id: nanoid(6),
          isZoomed: false,
        })),
        loading: false,
        error: null,
      };
    case FETCH_CATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // FETCH MORE CATS
    case FETCH_MORE_CATS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MORE_CATS_SUCCESS:
      return {
        ...state,
        cats: [...state.cats, ...(action.payload as [])].map(cat => ({
          ...(cat as object),
          id: nanoid(6),
        })),
        loading: false,
        error: null,
      };
    case FETCH_MORE_CATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TOGGLE_IS_ZOOMED:
      return {
        ...state,

        cats: [
          // ...state.cats,
          ...(state.cats.map((cat: any) =>
            cat.id === action.payload
              ? { ...cat, isZoomed: !cat.isZoomed }
              : { ...cat, isZoomed: false }
          ) as CatType[]),
        ],
      };

    default:
      return state;
  }
};
export default catReducer;
