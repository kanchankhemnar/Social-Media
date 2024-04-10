import { useContext, useRef ,useNavigate} from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = ({setSelectedTab}) => {
  const { addPost } = useContext(PostList);
 
  const titleRef = useRef();
  const bodyRef = useRef();
  const reactionRef = useRef();
  const tagsRef = useRef();

  const handleOnChange = (event) => {
    event.preventDefault();
    let title = titleRef.current.value;
    let body = bodyRef.current.value;
    let reactions = reactionRef.current.value;
    let tags = tagsRef.current.value.split(" ");
    addPost(title, body, reactions, tags);
    alert("Post added successfully");
    setSelectedTab("Home");
    titleRef.current.value = "";
    bodyRef.current.value = "";
    reactionRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(event) => {
          handleOnChange(event);
        }} style={{marginLeft:"2rem",width:"600px"}}
      >
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            className="form-control input"
            type="text"
            aria-describedby="emailHelp"
            ref={titleRef}
            placeholder="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Body" className="form-label">
            Post Content
          </label>
          <textarea type="text" className="form-control " ref={bodyRef} placeholder="enter your post content..."/>
        </div>

        <div className="mb-3">
          <label htmlFor="Reactions" className="form-label">
            Reactions
          </label>
          <input
            className="form-control input"
            type="text"
            aria-describedby="emailHelp"
            ref={reactionRef}
            placeholder="5"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Tags
          </label>
          <input type="text" className="form-control input" ref={tagsRef} placeholder="separated by spaces" />
        </div>

        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary ">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
