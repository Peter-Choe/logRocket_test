import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";


<html>
<head>
<script src="https://cdn.lr-ingest.io/LogRocket.min.js" crossorigin="anonymous"></script>
<script>window.LogRocket && window.LogRocket.init('b8z2ak/logrocket_testing_app');</script>
</head>
</html>

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;
