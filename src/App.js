import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import "./components/style.css";

function App() {
  const [username] = useState("Erick Mutai");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const savePost = (newPost) => {
    if (editingPost) {
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? { ...post, ...newPost } : post
        )
      );
    } else {
      setPosts([...posts, { id: Date.now(), ...newPost }]);
    }
    setEditingPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (post) => {
    setEditingPost(post);
  };

  return (
    <div className="App">
      <Header />
      <Profile username={username} />
      <PostForm onSave={savePost} initialData={editingPost} />
      <PostList posts={posts} onDelete={deletePost} onEdit={editPost} />
      <Footer postCount={posts.length} />
    </div>
  );
}

export default App;


