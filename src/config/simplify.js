import createStore from 'redux';

const simplify = function simplify() {
  const simplifier = {};
  const mainState = {};
  const mainReducerCollection = {};
  // 不用combineReducer的方法，生成一個聚合各個reducer后的reducer
  function mainReducer(state = mainState, action) {
    // 取出identifier 和 type 定位subState 和相應的subReducer
    const { identifier, type } = action;
    // 初始化的時候mainReducer可以生成第一個reducer
    if (!type) {
      // 類型不存在則返回默認的state
      return state;
    }
    // 用於判斷外部disptach方法中, identifier屬性是否存在，不存在則報錯，並返回原來的statea
    if (!identifier) {
      return state;
    }
    // 獲取subState
    const subState = mainState[identifier];
    if (!subState) {
      // 如果想要操作的subState不能存在，則報錯
      return state;
    }
    // 後去subReducer
    const subReducer = mainReducerCollection[identifier][type];
    // subReducer的處理結果, 生成新的state
    const newSubState = subReducer(subState, action);
    const newState = Object.assign(state, newSubState);
    return newState;
  }
  function model(newModel) {
    const { state, reducers, effects, identifier, subScriptions } = newModel;
    // 新增model的時候，需要將model裏面的state根據identifier放進去mainState裏面
    // 首先需要判斷之前的subState是否存在，如果存在了，報錯，不允許重命名。
    if (mainState[identifier]) {
      throw new Error('you couldn\'t rewrite a model already existed');
    }
    mainState[identifier] = state;
    // 根據reducers的key值，和identifier屬性，將reducer按照key分類，添加到mainReducerCollection裏面
    mainReducerCollection[identifier] = {};
    const reducersKeys = Object.keys(reducers);
    for (let index = 0; index < reducersKeys.length; index += 1) {
      const reducerKey = reducersKeys[index];
      mainReducerCollection[identifier][reducerKey] = reducers[reducerKey];
    }
  }
  function run() {
    const store = createStore(mainReducer);
    return store;
  }
  simplifier.model = model.bind(simplifier);
  simplifier.run = run;
  return simplifier;
};

export default simplify;
