import React, {Component} from "react";
import {
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

const PrivateRouteWithRouter = ({ component: Component, accesstoken, areYouLegit, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      areYouLegit ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/"}} />
      )
    }
  />
);

const DefaultRouteWithRouter = ({ component: Component, accesstoken, areYouLegit, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      areYouLegit ? (
        <Redirect
          to={{pathname: "/sakamoto"}}/>
      ) : (
        <Component {...props} />
      )
    }
  />
);

export const PrivateRoute = withRouter(PrivateRouteWithRouter);

export const DefaultRoute = withRouter(DefaultRouteWithRouter);
