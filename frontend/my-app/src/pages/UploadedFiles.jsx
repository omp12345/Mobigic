import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delete_file, getFile } from '../redux/FileReducer/action';

function UploadedFiles() {

  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(getFile());
  }, []); // Only fetch files on initial render

  const handledelte=(id)=>{
    console.log(id)
dispatch(delete_file(id))
  }
  const data = useSelector((state) => state.fileReducer.result);
  
  

  // Conditional rendering and file rendering logic remain the same
  return (
    <div>
      {data.length? (
        <div >
          {data.map((file) => (
            <div widtd="100%" key={file._id}>
             <img  src={file.url} alt={file._id} />
             <button onClick={()=>{
                handledelte(file._id)
             }}>delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
}
export default UploadedFiles