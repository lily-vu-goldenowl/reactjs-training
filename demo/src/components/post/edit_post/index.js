import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import editPost from "../../../actions/editPostAction";

const EditPost = (props) => {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.editPost(props.post.id, title, body);
    props.history.push("/" + props.post.id);
  };

  return (
    <div className="edit">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="focus-only"
        />
        <br />
        <label>Blog body:</label>
        <textarea
          name="textarea"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="15"
          cols="20"
          className="focus-only"
        />
        <button>Edit Post</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;

  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, title, body) => {
      dispatch(editPost(id, title, body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
