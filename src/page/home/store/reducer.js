import * as type from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  carousel: [
    "//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    "//upload.jianshu.io/admin_banners/web_images/4671/8fd7b261d35b4e91e2ccec5a2ec5a56f005309a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  ]
});

export default (state = defaultState, action) => {
  return state;
};
