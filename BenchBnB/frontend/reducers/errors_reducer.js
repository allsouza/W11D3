import sessionErrorsReducer from './session_errors_reducer';
import { combineReducers } from 'redux'
import benchErrorsReducer from './benches_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    bench: benchErrorsReducer
});

export default errorsReducer;