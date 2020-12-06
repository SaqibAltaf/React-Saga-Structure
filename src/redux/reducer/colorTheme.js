import produce from "immer";
import * as type from 'redux/action/type/colorTheme';

const initialState = {
    color: 'RED',
};

const colorTheme = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case type.SET_COLOR_THEME: {
            draft.color = action.payload.color;
            break;
        }
        

        default:
            break;
    }
});

export default colorTheme;