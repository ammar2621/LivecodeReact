import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/login";
import Movies from "./page/movies";
import Profile from "./page/profile";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Login} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/profile" component={Profile} />
      {/* <Route component={PatNolPat} /> */}
    </Switch>
  );
};

export default MainRoute;
