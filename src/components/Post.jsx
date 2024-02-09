import { HiDotsHorizontal, HiOutlineEmojiHappy } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { MdBookmarkBorder } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function Post({ img, userImg, caption, username, id }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }
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
      {/* Post Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <FiHeart className="btn" />
            <BsChatDots className="btn" />
          </div>
          <MdBookmarkBorder className="btn" />
        </div>
      )}

      {/* Post Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {/* Post Comments */}
      {session && (
        <form className="flex items-center p-4">
          <HiOutlineEmojiHappy className=" text-2xl" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border-none focus:ring-0"
            type="text"
            placeholder="Enter your comment..."
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
