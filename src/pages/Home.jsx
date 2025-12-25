import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Stories from '../components/Stories';
import './Home.css';
import CreatePost from '../components/CreatePost'; 
import Postcard from '../components/Postcard';

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
