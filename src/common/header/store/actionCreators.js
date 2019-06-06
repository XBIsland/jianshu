import * as type from "./actionType";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = data => ({
  type: type.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: type.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: type.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: type.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: type.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: type.CHANGE_PAGE,
  page: page
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        dispatch(changeList(res.data.data));
      })
      .catch(e => {
        console.log("error");
      });
  };
};
