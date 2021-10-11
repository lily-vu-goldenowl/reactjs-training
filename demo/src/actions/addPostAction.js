const addPost = (title, body) => {
  return {
    type: 'ADD_POST',
    title,
    body
  }
}

export default addPost;
