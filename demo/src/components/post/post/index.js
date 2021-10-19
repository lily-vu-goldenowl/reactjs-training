import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import deletePost from "../../../actions/postAction";

const Post = (props) => {
  const handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push("/");
  };

  const post = props.post ? (
    <div className="post card">
      <div className="card-content">
        <h4 className="center">{props.post.title}</h4>
        <img src={props.post.image} alt={props.post.title} />
        <p>{props.post.body}</p>
        <br />
        <div className="center button">
          <Link to={"/" + props.post.id + "/edit_post"}>Edit Post</Link>
        </div>
        <br />
        <div className="center">
          <button onClick={handleClick}>Delete Post</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading post ...</div>
  );

  return <div className="home">{post}</div>;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;

  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
