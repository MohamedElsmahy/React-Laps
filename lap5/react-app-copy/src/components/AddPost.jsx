import { useState } from "react";
import { Input } from "./Input";
import { useCreatePosts } from "../hooks"

export const AddPost = (props) => {
  const [title, setTitle] = useState("Please enter post title");
  const [body, setBody] = useState("Please enter post body");
  const createPost = useCreatePosts();

  const handleSubmit = () => {
    createPost({ title, body }).then(console.log);
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Post</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
      </button>
    </div>
  );
};
