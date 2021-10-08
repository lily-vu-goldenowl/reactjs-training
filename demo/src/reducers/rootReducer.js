const initState = {
  posts: [
    {id: '1', title: 'Title 1', body: 'Body 1'},
    {id: '2', title: 'Title 2', body: 'Body 2'},
    {id: '3', title: 'Title 3', body: 'Body 3'},
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter((post) => {
      return post.id !== action.id
    });

    return {
      ...state, 
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer
