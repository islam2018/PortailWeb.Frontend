const authReducer = (state = false, action ) => {
    switch (action.type) {
        case "SIGNED_IN": {
            return true;
        }
        case "SIGNED_OUT": {
            return false;
        }
        default:{
            return state;
        }
    }
};
export default authReducer;