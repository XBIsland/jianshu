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
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
            <CSSTransition in={focused} timeout={500} classNames="silde">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
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
    const {
      focused,
      list,
      page,
      mouseIn,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props; // 这里list为immutable对象，无法直接引用
    const jsList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (jsList[i]) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe606;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div style={{ marginBottom: "10px", overflow: "hidden" }}>
            {pageList}
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
    focused: state.getIn(["header", "focused"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    // focused: state.get("header").get("focused")
    mouseIn: state.getIn(["header", "mouseIn"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      // 符合条件 执行函数
      list.size <= 0 && dispatch(creators.getList());
      dispatch(creators.searchFocus());
    },

    handleInputBlur() {
      dispatch(creators.searchBlur());
    },

    handleMouseEnter() {
      dispatch(creators.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(creators.mouseLeave());
    },

    handleChangePage(page, totalPage, spin) {
      let deg = spin.style.transform.replace(/[^0-9]/gi, "");
      if (spin.style.transform) {
        deg = parseInt(deg, 10);
      } else {
        deg = 0;
      }
      spin.style.transform = `rotate(${deg + 360}deg)`;
      // console.log(spin.style.transform.replace(/[^0-9]ig, ''/))
      const pageNum = page < totalPage ? page + 1 : 1;
      dispatch(creators.changePage(pageNum));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
