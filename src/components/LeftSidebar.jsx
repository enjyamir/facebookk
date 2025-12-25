import './LeftSidebar.css';

const LeftSidebar = () => {
  const watchItems = [
    { icon: '▶️', label: 'Reels' },
    { icon: '📺', label: 'Live' },
    { icon: '🎬', label: 'Shows' },
    { icon: '📽️', label: 'Explore' },
  ];

  const groups = [
    'UI / UX Designers & Developers',
    'UI / UX Designers & Developers',
    'UI / UX Designers & Developers',
    'UI / UX Designers & Developers',
    'UI / UX Designers & Developers',
    'UI / UX Designers & Developers',
  ];

  return (
    <aside className="left-sidebar">
      <div className="sidebar-section">
        <div className="watch-grid">
          {watchItems.map((item, index) => (
            <div key={index} className="watch-item">
              <div className="watch-icon">{item.icon}</div>
              <span className="watch-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title">Title</span>
          <a href="#" className="see-all-link">See all</a>
        </div>
        <div className="group-list">
          {groups.map((group, index) => (
            <div key={index} className="group-item">
              <div className="group-thumbnail">UI</div>
              <span className="group-name">{group}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
