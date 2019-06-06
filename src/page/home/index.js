import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

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
        </HomeLeft>
        <HomeRight>2</HomeRight>
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
