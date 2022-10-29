import { createSelector } from 'reselect';
import IState from '../state.interface';

const selectCat = (state: IState) => state.cat;

export const selectAllCats = createSelector([selectCat], cat => cat.cats);
