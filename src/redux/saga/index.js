import { all, fork } from 'redux-saga/effects';

import colorTheme from './colorTheme';

export default function* rootSaga() {
  yield all([
    yield fork(colorTheme),
  ])
}