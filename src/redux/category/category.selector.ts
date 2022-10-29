import { createSelector } from 'reselect';
import CategoryType from '../../types/category.type';
import IState from '../state.interface';

const selectCategory = (state: IState) => state.category;

export const selectAllCategories = createSelector(
  [selectCategory],
  category => category.categories
);
