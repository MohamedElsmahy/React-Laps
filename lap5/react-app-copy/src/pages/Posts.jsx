import { useEffect, useState } from "react";
import { useGetPosts } from "../hooks";
import { ViewPosts } from "../components";
import { AddPost } from "../components";
import { Navbar } from "../components";

export const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const getPosts = useGetPosts();

  useEffect(() => {
        getPosts().then(setPosts);
  }, []);

  const handleDelete = () => {
    setPosts([]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  if (!posts.length) return <h1>Loading...</h1>;
  return (
    <>
      <Navbar/>
      <h1>Posts-Page</h1>
      <div className="row">
        <div className="col-6">
          <AddPost addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewPosts posts={posts} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};
// export const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const getPosts = useGetPosts();

//   // useEffect(() => {
//   //   getPosts().then((data) => {
//   //     setPosts(data);
//   //   });
//   // });

//   // component did mount

//   useEffect(() => {
//     getPosts().then(setPosts);
//   }, []);

//   if (!posts.length) return <h1>Loading...</h1>;
//   return (
//     <>
//       <h1>Posts</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h4>{post.title}</h4>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </>
//   );
// };
