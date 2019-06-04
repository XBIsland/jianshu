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
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
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
  &::placeholder {
    color: #999;
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
`;
