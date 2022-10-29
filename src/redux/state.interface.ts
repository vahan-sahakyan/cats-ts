import { CatAction } from './cat/cat.actions';
import { CategoryAction } from './category/category.actions';

interface IState {
  cat: {
    cats: object[];
    loading: boolean;
    error: string | null;
  };
  category: {
    categories: object[];
    loading: boolean;
    error: string | null;
    categoryFromUrl: string | number | null;
  };
}

export interface IResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export type Action = CategoryAction | CatAction;

export default IState;
