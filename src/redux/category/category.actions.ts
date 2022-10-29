import CategoryType from '../../types/category.type';
import { ActionTypes } from './category.types';
const {
  //
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} = ActionTypes;

// FETCH CATEGORIES
export const fetchCategoriesStart = (): CategoryAction => {
  return {
    type: FETCH_CATEGORIES_START,
  };
};
export const fetchCategoriesSuccess = (
  categories: CategoryType[]
): CategoryAction => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};
export const fetchCategoriesFailure = (error: Error): CategoryAction => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};

////////////////////
// CATEGORY TYPES //
////////////////////

// FETCH CATEGORIES
export type FetchCategoriesStartAction = {
  type: string;
  payload?: any;
};
export type FetchCategoriesSuccessAction = {
  type: string;
  payload: CategoryType[];
};
export type FetchCategoriesFailureAction = {
  type: string;
  payload: Error | string;
};

export type CategoryAction =
  | FetchCategoriesStartAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction;
