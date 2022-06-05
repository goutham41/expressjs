import React, { useState } from "react";

function App() {
  const [fileData, setFileData] = useState();
  const [show,setshow] = useState(false);
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("image", fileData);

    fetch("http://localhost:8080/single", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successfully");
       
       
      })
      .catch((err) => {
        console.log(err.message);
      });
       setshow(true);
  
  };

  return (
    <div className="App">
      {!show && <h1>File Uploading </h1>}
      {show && <h1> File Uploaded</h1>}
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
      </form>
    </div>
  );
}

export default App;
