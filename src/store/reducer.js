import { combineReducers } from "redux-immutable"; // 合并零散reducer函数, 生成为immutable类型的数据
import { reducer as headerReducer } from "../common/header/store";

const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
