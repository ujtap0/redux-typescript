import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
// ReturnType: take this function(reducers) and give us back the type of whatever that function returns
// we're then going to assign that type to RootState