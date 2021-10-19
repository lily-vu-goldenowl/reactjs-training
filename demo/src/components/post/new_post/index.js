import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import addPost from "../../../actions/addPostAction";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addPost(title, body);
    props.history.push("/new_post");

    setTitle("");
    setBody("");
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
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
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="focus-only"
        />
        <button>Add blog</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, body) => {
      dispatch(addPost(title, body));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewPost);
