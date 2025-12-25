import './CreatePost.css';

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="create-post-top">
        <div className="create-post-avatar">J</div>
        <div className="create-post-input">What's on your mind, Jenny?</div>
      </div>
      <div className="create-post-actions">
        <button className="action-btn">
          <span className="action-icon live">📹</span>
          <span>Live video</span>
        </button>
        <button className="action-btn">
          <span className="action-icon photo">🖼️</span>
          <span>Photo/video</span>
        </button>
        <button className="action-btn">
          <span className="action-icon feeling">😊</span>
          <span>Feeling/activity</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
