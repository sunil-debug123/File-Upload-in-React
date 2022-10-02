import React, { useState } from "react";

export default function FileUploader() {
    const [selectedImage, setselectedImage] = useState();
  const handleChange = (e) => {
    console.log(e.target.files.length);
    if (e.target.files && e.target.files.length > 0) {
        setselectedImage(e.target.files[0])
    }
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="formFileLg" className="form-label">
            File Upload in React js 📁
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            accept="image"
            onChange={handleChange}
          />
          <button type="submit" className="mt-3 px-4 btn btn-success">
            Upload
          </button>
        </form>
      </div>
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} class="img-thumbnail" alt="..."></img>
      )}
    </div>
  );
}
