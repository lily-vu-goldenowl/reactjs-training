import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Banner from "../banner";

const Home = (props) => {
  const posts = props.posts;

  const postList = posts ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title center">{post.title}</span>
              <img src={post.image} alt={post.title} />
              <p>{post.body.split(" ").slice(0, 49).join(" ")} ...</p>
            </Link>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posts yet</div>
  );

  return (
    <div className="home">
      <Banner title="Wellcome to Lily Blog!" />

      {postList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
