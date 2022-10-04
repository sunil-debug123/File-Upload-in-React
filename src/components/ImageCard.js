import React, { useState } from "react";

export default function ImageCard({ img ,imageClose }) {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <button
              style={{
                width: "40px",
                height: "40px",
                fontSize: "30px",
                fontWeight: "bold",
                position: "absolute",
                textAlign: "center",
                borderRadius : "20px",
                backgroundColor: "red",
                color: "white",
                margin: "3px",
              }}
              className="close"
              onClick={imageClose}  
            >
             <span>&times;</span> 
            </button>
            <img width={200} height={200} src={URL.createObjectURL(img)} />
          </div>
        </div>
      </div>
    </div>
  );
}
