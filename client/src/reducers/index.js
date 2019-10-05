import { combineReducers} from 'redux';
import caseReducer from './caseReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';


export default combineReducers({
    case: caseReducer,
    auth: authReducer,
    error: errorReducer
});