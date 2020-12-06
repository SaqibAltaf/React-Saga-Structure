import produce from "immer";
import * as type from 'redux/action/type/user';

const initialState = {
    user: {
        name: "Ali",
        loggedIn: false
    }
};

const User = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case type.SET_USER_DETAIL: {
            draft.user = action.payload.user;
            break;
        }

        default:
            break;
    }
});

export default User;