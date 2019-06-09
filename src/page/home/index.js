import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends Component {
  render() {
    const { carousel } = this.props;

    return (
      <HomeWrapper>
        <HomeLeft>
          <Carousel>
            {carousel.map(item => {
              return <img className="carouselImg" src={item} alt="" />;
            })}
          </Carousel>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    carousel: state.getIn(["home", "carousel"])
  };
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
