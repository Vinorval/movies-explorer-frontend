import React from "react";
import { Route, Redirect } from "react-router-dom";

//HOC-компонент для Переадресации не зарегестрированного пользователя
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;