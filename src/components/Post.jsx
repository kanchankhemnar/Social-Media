import { MdDeleteSweep } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import {PostList} from "../store/Post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card " style={{ minWidth: "18rem", margin: "20px" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() =>deletePost(post.id)}
            >
              
              <MdDeleteSweep />
            </span>
          </h5>

          <p className="card-text">{post.body}.</p>
          {(post.tags).map((tag) => (
            <span key={tag}
              className="badge rounded-pill text-bg-primary"
              style={{ margin: "2px", padding: "5px", fontWeight: "normal" }}
            >
              {tag}
            </span>
          ))}
          <span style={{ margin: "5px" }}>
            {" "}
            {` ${post.reactions} `} <FcLike />
          </span>
        </div>
      </div>
    </>
  );
};
export default Post;
