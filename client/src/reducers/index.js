import { combineReducers} from 'redux';
import caseReducer from './caseReducer';


export default combineReducers({
    case: caseReducer
});