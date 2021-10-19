import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NewPost from "./components/post/new_post";
import About from "./components/about";
import Contact from "./components/contact";
import Post from "./components/post/post";
import EditPost from "./components/post/edit_post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/new_post" component={NewPost} />
            <Route exact path="/:post_id" component={Post} />
            <Route path="/:post_id/edit_post" component={EditPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
