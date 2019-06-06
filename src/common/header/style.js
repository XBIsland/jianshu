import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #e7e7e7;
`;
export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  height: 56px;
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  z-index: 999;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    &.focused {
      background: #969696;
      color: #eee;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  /* &.silde-enter {
    transition: all 0.5s ease-out;
  }
  &.silde-enter-active {
    width: 320px;
  }
  &.silde-exit {
    transition: all 0.5s ease-out;
  }
  &.silde-exit-active {
    width: 240px;
  } */
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  color: #666;
  transition: all 0.5s;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 250px;
  padding: 0 20px;
  /* background: red; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 5px;
    transition: all 0.2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #969696;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #333;
    border: 1px solid #b4b4b4;
  }
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 24px;
  border-radius: 20px;
  margin-top: 9px;
  margin-right: 20px;
  border: 1px solid #ec6149;
  padding: 6px 24px;
  font-size: 15px;
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    background: #ea6f5a;
    color: #fff;
  }
  .iconfont {
    margin-right: 5px;
  }
`;
