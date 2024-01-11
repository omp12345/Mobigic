import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
import {thunk} from "redux-thunk"
import { reducer as userReducer } from "./user/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as fileReducer } from "./FileReducer/reducer";
const rootReducer = combineReducers({
    userReducer,
    authReducer,
    fileReducer
    
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
