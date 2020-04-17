import React from "react";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
import { connect } from "react-redux";
import Loading from "react-fullscreen-loading";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 2 auto;
  border-color: red;
  height: 15;
  width: 5;
  radius: 2;
`;

class SpinnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loading } = this.props;
    console.log("Loading " + loading);
    if (!loading) return'';
    return (
      //        return ;
      //   <div className="sweet-loading">
      //     <FadeLoader
      //       css={override}
      //       size={150}
      //       color={"#123abc"}
      //       loading={loading}
      //     />
      //   </div>
      <Loading loading background="#2ecc71" loaderColor="#3498db" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.showSpinner,
  };
};

export default connect(mapStateToProps)(SpinnerComponent);
