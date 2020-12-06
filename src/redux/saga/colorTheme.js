import { put, takeEvery, all } from 'redux-saga/effects'

import * as type from 'redux/action/type/colorTheme';




function* requestThemeColor(payload) {
    yield put({ type: type.SET_COLOR_THEME, payload });
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(type.SET_COLOR_THEME, requestThemeColor),
    ])
}