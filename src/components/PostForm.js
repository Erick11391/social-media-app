import { useState, useEffect } from "react";

function PostForm({ onSave, initialData }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setContent(initialData.content || "");
      setImage(initialData.image || null);
    }
  }, [initialData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Set the file in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      // Pass the content and file (image) to the parent component
      onSave({ content, image });
      setContent(""); // Reset form content
      setImage(null); // Reset file input
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      ></textarea>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button type="submit">{initialData ? "Update Post" : "Post"}</button>
    </form>
  );
}

export default PostForm;
