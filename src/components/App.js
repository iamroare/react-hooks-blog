import React  from 'react';
import {Routes, Route} from 'react-router-dom';
// import { Home, CreatePost, PostDetail} from "./";
import Navbar from './Navbar.js';
import Home from './Home.js';
import CreatePost from './CreatePost.js';
import PostDetail from './PostDetail.js';

function App() {
  return (
    <div className="container">

       {/* <p>hello world</p> */}
       <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
      </Routes> 
    </div>
  );
}

export default App;
