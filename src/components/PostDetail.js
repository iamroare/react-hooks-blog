import {firestore} from "../firebase.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetail() {

  const [post, setPost]=useState({});
  const {postId}= useParams();

  useEffect(()=>{
    firestore.
    collection("posts")
    .doc(postId)
    .get()
    .then((snapshot)=>{
      console.log("snapshot", snapshot.data());
      setPost(snapshot.data());
    });
  },[]);

    return (
      <div className="post-detal">
  
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <p>{post.content} </p>
      </div>
    );
  }
  
  export default PostDetail;