// export const App = () => {
//   return <h1>App</h1>;
// };
import { List } from "./components/to-do-list";

export const App = () => {
  const lists = [
    { title: "first post", details: "my first post body" },
    { title: "second post", details: "my second post body" },
    { title: "third post", details: "my third post body" },
    { title: "forth post", details: "my forth post body" },
  ];
  return (
    <div>
      <h1>Hello from the app</h1>
      {/* <List title={posts[0].title} body={posts[0].body} />
      <List title={posts[1].title} body={posts[1].body} />
      <List title={posts[2].title} body={posts[2].body} />
      <List title={posts[3].title} body={posts[3].body} /> */}
      {lists.map((p) => (
        <List title={p.title} details={p.details} />
      ))}

    </div>
  );
};