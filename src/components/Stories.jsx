import './Stories.css';

const Stories = () => {
  const stories = [
    { name: 'Jenny Wilson', initial: 'J' },
    { name: 'Robert Fox', initial: 'R' },
    { name: 'Wade Warren', initial: 'W' },
    { name: 'Esther Howard', initial: 'E' },
  ];

  return (
    <div className="stories-container">
      <div className="create-story-card">
        <div className="create-story-image"></div>
        <div className="create-story-bottom">
          <div className="create-story-plus">+</div>
          <span className="create-story-text">Create story</span>
        </div>
      </div>

      {stories.map((story, index) => (
        <div key={index} className="story-card">
          <div className="story-avatar">{story.initial}</div>
          <span className="story-name">{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
