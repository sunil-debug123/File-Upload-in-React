import React from "react";

export default function FileUploader() {
  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <div>
        <form>
          <label for="formFileLg" className="form-label">
            File Upload in React js 📁
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            onChange={handleChange}
          />
          <button type="button" className="mt-3 px-4 btn btn-success">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
