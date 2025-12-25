import './Postcard.css';

const Postcard = ({ username, initial, timestamp, imageText }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-user-info">
          <div className="post-avatar">{initial}</div>
          <div className="post-meta">
            <span className="post-username">{username}</span>
            <span className="post-timestamp">{timestamp}</span>
          </div>
        </div>
        <button className="post-menu-btn">⋯</button>
      </div>
      <div className="post-image">{imageText || 'Placeholder Image'}</div>
      <div className="post-actions">
        <button className="post-action-btn">
          <span>👍</span>
          <span>Like</span>
        </button>
        <button className="post-action-btn">
          <span>💬</span>
          <span>Comment</span>
        </button>
        <button className="post-action-btn">
          <span>↗️</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Postcard;
