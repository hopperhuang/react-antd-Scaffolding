import 'babel-polyfill';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware, { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
// import update from 'immutability-helper';
// import deepcopy from 'deepcopy';

const simplify = function simplify() {
  const simplifier = {};
  const mainState = {};
  const mainReducerCollection = {};
  const sagas = [];
  function makeReducer(State, Identifier, reducers) {
    return (state = State, action) => {
      const { identifier, type } = action;
      if (!identifier) {
        return state;
      }
      if (identifier !== Identifier) {
        return state;
      }
      return reducers[type] ? reducers[type](state, type) : state;
    };
  }
  function model(newModel) {
    const { state, reducers, effects, identifier } = newModel;
    // 新增model的時候，需要將model裏面的state根據identifier放進去mainState裏面
    // 首先需要判斷之前的subState是否存在，如果存在了，報錯，不允許重命名。
    if (mainState[identifier]) {
      throw new Error('you couldn\'t rewrite a model already existed');
    }
    // 将Model里面的state房东mainState里面。
    mainState[identifier] = state;
    // 根據reducers的key值，和identifier屬性，將reducer按照key分類，添加到mainReducerCollection裏面
    mainReducerCollection[identifier] = makeReducer(state, identifier, reducers);
    // 将公共sagas 和 私有sagas进行分类
    const { publicSagas, privateSagas } = effects;
    const publicSagasKeys = Object.keys(publicSagas);
    // 一个Model只有一个rootSaga
    function* rootSaga() {
      for (let publicSagasKeysIndex = 0;
        publicSagasKeysIndex < publicSagasKeys.length; publicSagasKeysIndex += 1) {
        const publicSagasKey = publicSagasKeys[publicSagasKeysIndex];
        const publicSaga = publicSagas[publicSagasKey];
        // fork 每个publicSaga
        yield fork(function* watcher() {
          // 根据identifier和publicSagasKey来takeEvery，监听action,
          // publicSaga(privateSagas)， 生成的是真正的saga方法，
          // 调用私有saga方法时，可以在privateSagas对象上调用。
          yield takeEvery(`${identifier}-${publicSagasKey}`, publicSaga(privateSagas));
        });
      }
    }
    sagas.push(rootSaga);
  }
  function run() {
    const sagaMiddleware = createSagaMiddleware();
    const store = process.env.NODE_ENV === 'development' ? createStore(
        combineReducers(mainReducerCollection),
        compose(applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    ) : createStore(
        combineReducers(mainReducerCollection),
        // 打包模式下，不能加入插件，否则会报错。
        applyMiddleware(sagaMiddleware),
    );
    this.sagas.forEach(sagaMiddleware.run);
    return store;
  }
  simplifier.model = model.bind(simplifier);
  simplifier.run = run.bind(simplifier);
  simplifier.sagas = sagas;
  return simplifier;
};

export default simplify;
