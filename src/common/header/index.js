import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { creators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from "./style";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={500}
              classNames="silde"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
              &#xe69d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe845;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  getListArea = () => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div style={{ marginBottom: "10px", overflow: "hidden" }}>
            {
              this.props.list.map((item) => {
                return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
              })
            }
          </div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
}

const mapStateToProps = state => {
  return {
    list: state.getIn(["header", "list"]),
    focused: state.getIn(["header", "focused"])
    // focused: state.get("header").get("focused")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(creators.getList());
      dispatch(creators.searchFocus());
    },

    handleInputBlur() {
      dispatch(creators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
