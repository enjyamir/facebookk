import './RightSidebar.css';

const RightSidebar = () => {
  const friendRequests = [
    { name: 'Leslie Alexander', mutual: '12 mutual friends', initial: 'L' },
    { name: 'Cameron Williamson', mutual: '8 mutual friends', initial: 'C' },
  ];

  const newsItems = [
    { headline: 'Top Headlines in Technology and Innovation', source: 'Tech News • 2h' },
    { headline: 'Breaking: Major Updates in Global Markets', source: 'Finance Daily • 4h' },
    { headline: 'Sports: Championship Finals Preview', source: 'Sports Network • 6h' },
  ];

  return (
    <aside className="right-sidebar">
      <div className="sidebar-card">
        <div className="card-header">
          <span className="card-title">Friend requests</span>
          <a href="#" className="card-link">See all</a>
        </div>
        {friendRequests.map((friend, index) => (
          <div key={index} className="friend-request">
            <div className="friend-avatar">{friend.initial}</div>
            <div className="friend-info">
              <div className="friend-name">{friend.name}</div>
              <div className="mutual-friends">{friend.mutual}</div>
              <div className="friend-actions">
                <button className="confirm-friend-btn">Confirm</button>
                <button className="delete-friend-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-card">
        <div className="card-header">
          <span className="card-title">Sponsored</span>
        </div>
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-thumbnail"></div>
            <div className="news-content">
              <div className="news-headline">{item.headline}</div>
              <div className="news-source">{item.source}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
