import * as type from "./actionType";
import { fromJS } from "immutable";

// immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case type.SEARCH_FOCUS:
      return state.set("focused", true);
    case type.SEARCH_BLUR:
      return state.set("focused", false);
    case type.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case type.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case type.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case type.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
