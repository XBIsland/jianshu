import * as type from "./actionType";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFocus = () => ({
  type: type.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: type.SEARCH_BLUR
});

const changeList = data => ({
  type: type.CHANGE_LIST,
  data: fromJS(data)
});
export const getList = () => {
  return dispatch => {
    axios.get("/api/headerList.json").then(res => {
      dispatch(changeList(res.data.data));
    })
    .catch(e => {
      console.log("error");
    });
  };
};
