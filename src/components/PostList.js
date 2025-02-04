function PostList({ posts, onDelete, onEdit }) {
  return (
    <div className="post-list">
      <h3>Posts</h3>
      {posts.length === 0 && <p>No posts yet. Create one!</p>}
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.image && (
            <img
              src={URL.createObjectURL(post.image)} 
              alt="Post"
              className="post-image"
            />
          )}
          <p>{post.content}</p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;

