import Navbar from '../components/Navbar/Navbar';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Stories from '../components/Stories/Stories';
import CreatePost from '../components/CreatePost/CreatePost';
import PostCard from '../components/PostCard/PostCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      
      <main className="main-content">
        <div className="feed-container">
          <Stories />
          <CreatePost />
          <PostCard 
            username="Albert Flores"
            initial="A"
            timestamp="2 d"
            imageText="Landscape Photo"
          />
          <PostCard 
            username="Jenny Wilson"
            initial="J"
            timestamp="3 d"
            imageText="Travel Photo"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
