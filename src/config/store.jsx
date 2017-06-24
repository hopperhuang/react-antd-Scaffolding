import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import saga from '../sagas/index';
// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers(reducer),
    compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
// sagaMiddleware.run必须放再store下面。sagaMiddleware必须再处理中间件后run。
sagaMiddleware.run(saga);
export default store;
