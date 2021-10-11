const editPost = (id, title, body) => {
  return {
    type: 'EDIT_POST',
    id,
    title,
    body
  }
}

export default editPost;
