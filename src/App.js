import React, { Component } from "react";
import Problems from "./Problems";
import Home from "./Home";
import Team from "./Component/Team";
import Video from "./Component/Video";
import Compile from "./Component/Compile";
import Profile from "./Component/Profile.js";
import Error from "./Component/Error";

import {
  Route,
  Switch,
  NavLink,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import MyNavbar from "./Component/MyNavbar";
import { connect } from "react-redux";
import axios from "axios";


import ApolloClient from 'apollo-boost';
import { getBooksQuery } from './queries/queries';





const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

let local="http://localhost:8080/";
let heroku="https://frozen-atoll-01566.herokuapp.com/";


class App extends Component {
  componentDidMount() {
    
    client
    .query({
      query: getBooksQuery
    }).then(result => {
      console.log("graphql ",result);
    })
    .catch((err)=>{
      console.log('graph err ',err);
    });


    let token = localStorage.getItem("token");
    if (token !== null) {
      this.props.setToken(token);
    }

    const config = {
      headers: { Authorization: `${token}` },
    };
    axios
      .post(heroku+`autologin`, {}, config)
      .then((res) => {
        //user information will be added later,first lunch
        if (res.status === 200) {
          console.log("authenticate");
          let email=res.data.user.email;
          this.props.login();
          this.props.setEmail(email);
          this.props.setSolved(res.data.user.solved)
        }
      })
      .catch((err) => {
        console.log("not authenticate");
      });
  }

  render() {

    return (
        <div>
          <HashRouter>
            <MyNavbar />
          </HashRouter>

          <HashRouter>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/course"} component={Video} />
              <Route exact path={"/problems"} component={Problems} />
              <Route exact path="/problems/:id" component={Compile} />
              <Route exact path={"/about"} component={Team} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route component={Error} />;
            </Switch>
          </HashRouter>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    email: state.email,
    solved:state.solved
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({ type: "setToken", val: token }),
    setEmail: (email) => dispatch({ type: "setEmail", val: email }),
    setSolved: (solved) => dispatch({ type: "setSolved", val: solved }),
    login: (token) => dispatch({ type: "login" }),
  };
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
