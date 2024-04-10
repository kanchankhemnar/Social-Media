const WelcomeMessage = ({setSelectedTab}) => {
  return (
    <>
      <center className=" m-4">
        <h1>There are no posts !</h1>
        <button
          type="button"
          className="btn btn-primary border border-success"
        onClick={()=>setSelectedTab("Create Post")}
        >
          Create new post
        </button>
      </center>
    </>
  );
};
export default WelcomeMessage;
