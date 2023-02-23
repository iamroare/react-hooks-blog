// import {useState} from "react";
import {firestore} from "../firebase.js";
import {useFormInput} from "./hooks.js";





function CreatePost() {

  const title=useFormInput("");
  const subtitle=useFormInput("");
  const content=useFormInput("");

  function handleSubmit(e)
  {
    e.preventDefault();
    console.log("title", title);
    console.log("subtitle", subtitle);
    console.log("content", content);

    firestore.collection("posts").add({
      title: title.value,
      subtitle: subtitle.value,
      content:content.value,
      createdAt: new Date()
    })
  }
    return (
      <div className="create-post">
        <form onSubmit={handleSubmit}>
         <div className="form-field">
          <label>Title</label>
          <input {...title} />
         </div>

         <div className="form-field">
          <label>Sub-Title</label>
          {/* <input value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} /> */}
          <input {...subtitle} />
          
         </div>

         <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
         </div>

        <button className="create-post-btn">Create Post</button>
        </form>
  
        
      </div>
    );
  }
  
  export default CreatePost;