import authReducer from './authReducer'
import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";

const allReducers = combineReducers({
    authentificated: authReducer,
    drawerMobileOpened: drawerReducer
});

export default allReducers;