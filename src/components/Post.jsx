import { HiDotsHorizontal } from "react-icons/hi";

export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <HiDotsHorizontal className="h-5" />
      </div>
      {/* Post Image */}
      <div>
        <img className="object-cover w-full" src={img} alt={id} />
      </div>
    </div>
  );
}
