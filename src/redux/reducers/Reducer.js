import { combineReducers } from 'redux';
import arrWordsReducer from './ArrWordsReducer';
import filterStatusReducer from './FilterStatusReducer';
import isAddingReducer from './IsAddingReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
});

export default reducer;
