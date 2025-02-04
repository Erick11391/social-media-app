function Comment({ comment, onDeleteComment }) {
    return (
      <div className="comment">
        <p>{comment}</p>
        <button onClick={onDeleteComment}>Delete</button>
      </div>
    );
  }
  
  export default Comment;
  