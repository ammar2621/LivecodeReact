import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../component/store";
import Header from "../component/header";

function Profile(props) {
  if (props.isLogin === false) {
    return <Redirect to={{ pathname: "/auth" }} />;
  } else {
    return (
      <div>
        <Header />
        <h4>username : </h4>
        <h4>{props.username}</h4>
        <h4>email : </h4>
        <h4>{props.email}</h4>
      </div>
    );
  }
}

export default connect(
  "username, email, isLogin",
  actions
)(Profile);
