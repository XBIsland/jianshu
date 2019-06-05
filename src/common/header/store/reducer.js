import * as type from "./actionType";
import { fromJS } from "immutable";

// immutable对象
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === type.SEARCH_FOCUS) {
    // set方法，会生成新的对象，不会直接修改state
    const newStore = state.set("focused", true);
    return newStore;
  }
  if (action.type === type.SEARCH_BLUR) {
    const newStore = state.set("focused", false);
    return newStore;
  }
  if (action.type === type.CHANGE_LIST) {
    const newStore = state.set("list", action.data);
    return newStore
  }
  return state;
};
