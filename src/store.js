import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga'

import reducer from 'redux/reducer';
import rootSaga from 'redux/saga';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer, composeEnhancers(
//   applyMiddleware(sagaMiddleware)
// ));


const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;