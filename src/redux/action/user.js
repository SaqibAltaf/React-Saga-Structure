import * as type from 'redux/action/user';

export const setNewUser = (user) => ({
    type: type.set,
    payload: {
        user
    }
});