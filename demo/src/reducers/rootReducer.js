const initState = {
  posts: [
    {
      id: "1",
      title: "My First Blog",
      body: "Why do we use it?",
      image: "https://picsum.photos/id/649/900/300",
    },
    {
      id: "2",
      title: "Opening Party!",
      body: "Why do we use it?",
      image: "https://picsum.photos/id/110/900/300",
    },
    {
      id: "3",
      title: "Who am I?",
      body: "Why do we use it?",
      image: "https://picsum.photos/id/859/900/300",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return post.id !== action.id;
    });

    return {
      ...state,
      posts: newPosts,
    };
  } else if (action.type === "ADD_POST") {
    let newPost = { id: "4", title: action.title, body: action.body };

    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  } else if (action.type === "EDIT_POST") {
    let index = state.posts.findIndex((post) => post.id === action.id);
    let newPosts = state.posts;
    newPosts[index] = { id: action.id, title: action.title, body: action.body };

    return {
      ...state,
      posts: newPosts,
    };
  }

  return state;
};

export default rootReducer;
