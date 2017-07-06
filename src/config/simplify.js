const simplify = function simplify() {
  const simplifier = {};
  const mainState = {};
  const mainReducerCollection = {};
  // 不用combineReducer的方法，生成一個聚合各個reducer后的reducer
  function mainReducer(state, action) {
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
    const subState = mainState[identifier];
    const subReducer = mainReducerCollection[identifier][type];
    // subReducer的處理結果
    const newSubState = subReducer(subState, action);
    const newState = Object.assign();
  }
  function model(newModel) {
    this.model = newModel;
  }
  // const run = function run() {
  //
  // };
  simplifier.model = model.bind(simplifier);
  return simplifier;
};

export default simplify;
