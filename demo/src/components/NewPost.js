import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPost from '../actions/addPostAction';

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      body: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addPost(this.state.title, this.state.body);
    this.props.history.push('/new_post')

    this.setState({
      title: "",
      body: ""
    })
  }

  render() {
    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
            className="focus-only"
          />
          <br/>
          <label>Blog body:</label>
          <textarea
            required
            value={this.state.body}
            onChange={(e) => this.setState({body: e.target.value})}
            className="focus-only"
          />
          <button>Add blog</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, body) => { dispatch(addPost(title, body)) }
  }
}

export default connect(null, mapDispatchToProps)(NewPost);
