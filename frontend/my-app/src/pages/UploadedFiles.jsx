import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Uploadfile.css"
import {
  delete_file,
  download_file,
  getFile,
} from "../redux/FileReducer/action";
import { useParams, useSearchParams } from "react-router-dom";

function UploadedFiles() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFile());
  }, []); // Only fetch files on initial render

  const handledelte = (id) => {
    console.log(id);
    dispatch(delete_file(id));
    alert(`${id},s file is deleted `)
    window.location.reload("/file")
  
  };

  const data = useSelector((state) => state.fileReducer.result);
 

  const handldownload = (code, id) => {
    dispatch(download_file(code, id));
  };

  // Conditional rendering and file rendering logic remain the same
  return (
    <div className="uploaded-files-container">
      {data.length ? (
        <div>
          {data.map((file) => (
            <div className="file-item" key={file._id}>
            {file.url?<img className="file-image" src={file.url} alt={file._id} />:<img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"/>}
              <div className="file-buttons">
                <button
                  className="file-button"
                  onClick={() => {
                    handledelte(file._id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="file-button"
                  onClick={() => {
                    handldownload(file._id, file.private_code);
                  }}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-files-message">No files uploaded yet.</p>
      )}
    </div>
  );
}

export default UploadedFiles;
