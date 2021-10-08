import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props.posts.find(post => post.id === 1))
    const posts = this.props.posts;
    const postList = posts ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <img src={logo} alt="A Smile" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
