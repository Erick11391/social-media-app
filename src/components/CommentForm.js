import { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default CommentForm;
