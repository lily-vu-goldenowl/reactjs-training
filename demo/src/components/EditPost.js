import React, { Component } from 'react';
import { connect } from 'react-redux';
import editPost from '../actions/editPostAction';

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.post.title,
      body: this.props.post.body
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.editPost(this.props.post.id, this.state.title, this.state.body);
    this.props.history.push('/' + this.props.post.id);
  }

  render() {
    return (
      <div className="edit">
        <h2>Edit Blog</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Blog title</label>
          <input
            type="text"
            required
            value={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
            className="focus-only"
          />
          <br />
          <label>Blog body:</label>
          <textarea
            name="textarea"
            required
            value={this.state.body}
            onChange={(e) => this.setState({body: e.target.value})}
            rows="15"
            cols="20"
            className="focus-only"
          />
          <button>Edit Post</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;

  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, title, body) => {dispatch(editPost(id, title, body))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
