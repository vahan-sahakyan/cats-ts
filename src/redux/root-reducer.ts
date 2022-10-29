import { combineReducers } from 'redux';
import catReducer from './cat/cat.reducer';
import categoryReducer from './category/category.reducer';

const rootReducer = combineReducers({
  cat: catReducer,
  category: categoryReducer,
});

export default rootReducer;
