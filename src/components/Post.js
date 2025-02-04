import axios from 'axios';

function Post({ post, onDelete }) {
  const handleDelete = async () => {
    try {
      //  delete the file
      await axios.delete('http://localhost:5000/delete', {
        data: { filePath: post.imageUrl },
      });

      //  remove the post
      onDelete(post.id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" className="post-image" />
      <p>{post.content}</p>
      <button onClick={handleDelete} className="delete-button">
        Delete Post
      </button>
    </div>
  );
}

export default Post;

