import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "sadyplabon",
      userImg: "/Instagram2.png",
      img: "/Instagram2.png",
      caption: "ugabuga",
    },
    {
      id: "2",
      username: "sadyplabon",
      userImg: "/Instagram2.png",
      img: "/Instagram2.png",
      caption: "ugabuga",
    },
    {
      id: "3",
      username: "sadyplabon",
      userImg: "/Instagram2.png",
      img: "/Instagram2.png",
      caption: "ugabuga",
    },
    {
      id: "4",
      username: "sadyplabon",
      userImg: "/Instagram2.png",
      img: "/Instagram2.png",
      caption: "ugabuga",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
