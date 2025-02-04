import Comment from './Comment';

function CommentList({ comments, onDeleteComment }) {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          onDeleteComment={() => onDeleteComment(index)}
        />
      ))}
    </div>
  );
}

export default CommentList;
