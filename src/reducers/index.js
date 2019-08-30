import authReducer from './authReducer'
import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import authUiReducer from "./authUiReducer";

const allReducers = combineReducers({
    authentification: authReducer,
    authentificationUI: authUiReducer,
    drawerMobileOpened: drawerReducer
});

export default allReducers;