import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new_post' component={NewPost} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/:post_id' component={Post} />
            <Route path='/:post_id/edit_post' component={EditPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
