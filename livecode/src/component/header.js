import React from "react";
import logo from "../logo.svg";
import "../assets/main.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../component/store";

function Header(props) {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img className="logo" src={logo} />
        <a class="navbar-brand" href="#">
          Movie
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav" />
          <a class="nav-link" href="#">
            <Link to="/">Home</Link>
          </a>
          <a class="nav-link" href="#">
            <Link to="/profile">Profile</Link>
          </a>
          <a class="nav-link" href="#">
            <Link to="/auth">Login</Link>
          </a>
          <a class="nav-link" href="#">
            <Link
              to="/"
              onClick={() => {
                props.signOut();
              }}
            >
              Logout
            </Link>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default connect(
  "nama, email, isLogin",
  actions
)(Header);
