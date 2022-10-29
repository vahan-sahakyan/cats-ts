import { ActionTypes } from './cat.types';
const {
  FETCH_CATS_START,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  FETCH_MORE_CATS_START,
  FETCH_MORE_CATS_SUCCESS,
  FETCH_MORE_CATS_FAILURE,
  TOGGLE_IS_ZOOMED,
} = ActionTypes;

// FETCH CATS
export const fetchCatsStart = (page: number, categoryId: number): CatAction => {
  return {
    type: FETCH_CATS_START,
    payload: { page, categoryId },
  };
};
export const fetchCatsSuccess = (cats: object[]): CatAction => {
  return {
    type: FETCH_CATS_SUCCESS,
    payload: cats,
  };
};
export const fetchCatsFailure = (error: Error): CatAction => {
  return {
    type: FETCH_CATS_FAILURE,
    payload: error,
  };
};

// FETCH MORE CATS
export const fetchMoreCatsStart = (
  page: number,
  categoryId: number
): CatAction => {
  return {
    type: FETCH_MORE_CATS_START,
    payload: { page, categoryId },
  };
};
export const fetchMoreCatsSuccess = (cats: object[]): CatAction => {
  return {
    type: FETCH_MORE_CATS_SUCCESS,
    payload: cats,
  };
};
export const fetchMoreCatsFailure = (error: Error): CatAction => {
  return {
    type: FETCH_MORE_CATS_FAILURE,
    payload: error,
  };
};
export const toggleIsZoomed = (id: string): CatAction => {
  return {
    type: TOGGLE_IS_ZOOMED,
    payload: id,
  };
};
///////////////
// CAT TYPES //
///////////////

// FETCH CATS
export type FetchCatsStartAction = {
  type: string;
  payload: {
    page: number;
    categoryId: number;
  };
};
export type FetchCatsSuccessAction = {
  type: string;
  payload: object[];
};
export type FetchCatsFailureAction = {
  type: string;
  payload: Error | string;
};

// FETCH MORE CATS
export type FetchMoreCatsStartAction = {
  type: string;
  payload: {
    page: number;
    categoryId: number;
  };
};
export type FetchMoreCatsSuccessAction = {
  type: string;
  payload: object[];
};
export type FetchMoreCatsFailureAction = {
  type: string;
  payload: Error | string;
};

// Toggle isZoomed
export type ToggleIsZoomedAction = {
  type: string;
  payload: string;
};

export type CatAction =
  | FetchCatsStartAction
  | FetchCatsSuccessAction
  | FetchCatsFailureAction
  | FetchMoreCatsStartAction
  | FetchMoreCatsSuccessAction
  | FetchMoreCatsFailureAction
  | ToggleIsZoomedAction;
