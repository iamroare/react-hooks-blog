import {useState, useEffect} from "react";
import {firestore} from "../firebase.js"
import {Link} from "react-router-dom";

//importing styled components
import styled from "styled-components";


const BlogHeading= styled.h1`

  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubTitle= styled.p`

font-size: 13px;

`;

const Post= styled.div`
border: 1px solid #e1e1e1;
padding: 10px 10px;
border-radius: 5px;
margin-top: 10px;

h3{
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: bold;
  color: black;
}
h3:hover{
  color: #2196f3;
}

a{
  text-decoration:none;
}

@media (max-width: 900px){
  border: 1px solid black;
}
`;

function Home() {

  const [posts, setPosts]=useState([]);

  useEffect(()=>{
    firestore.collection("posts")
    .get()
    .then((snapshot)=>{
      const posts= snapshot.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data(),
        };
      });

      console.log("posts", posts);
      setPosts(posts);
    });
  },[]);


    return (
      <div  className="home">
        <BlogHeading>Prajapati Blog</BlogHeading>
        
        {/* <h1 style={myStyle.heading}>Prajapati Blog</h1> */}
        <div id="blog-by">Rahul</div>


        {posts.map((post, index)=>(
          <Post className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
            </Link>
            <PostSubTitle>{post.subtitle}</PostSubTitle>
            {/* <p>{post.subtitle} </p> */}
             </Post>
        ))}
      </div>
    );
  }
  
  export default Home;


  const myStyle={ 
    heading: { 
      marginTop:100,
      backgroundColor:"pink",
    }
  }