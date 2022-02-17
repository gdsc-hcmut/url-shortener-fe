/*eslint-disable*/
import React, { useState } from 'react';

function UploadAndDisplayImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const formData = new FormData();
  return (
    <div>
      <h1>Upload and Display Image usign React Hooks</h1>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width="250px"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button type="button" onClick={() => setSelectedImage(null)}>
            Remove
          </button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          formData.append('lalalal', event.target.files[0], 'example.img');
          console.log(event.target.files[0]);
          for (const pair of formData.entries()) {
            console.log(`${pair[0]} - ${pair[1].size}`);
          }
        }}
      />
    </div>
  );
}

export default UploadAndDisplayImage;
