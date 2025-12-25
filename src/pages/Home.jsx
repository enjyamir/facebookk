import React from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Stories from '../components/Stories';
import CreatePost from '../components/CreatePost';
import Postcard from '../components/Postcard';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__container" style={{ display: 'flex' }}>
        <LeftSidebar />
        <div className="home__feed" style={{ flex: 1 }}>
          <Stories />
          <CreatePost />
          <Postcard />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
