import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addfile } from '../redux/FileReducer/action';
import UploadedFiles from './UploadedFiles';

function Upload() {
    const data=useSelector((state)=>{
        return state.fileReducer.result
    })

    console.log(data)
    const dispatch=useDispatch()
    const [file, setFile] = useState();
    const formData = new FormData();
    formData.append('om', file); // Assuming 'file' is the correct field name
    
   console.log(file)
    const handleUpload=()=>{
dispatch(addfile(formData))
alert("File added succesfully")
window.location.reload()
    }
  return (
    <div className="flex items-center space-x-4">
    <label
      htmlFor="fileInput"
      className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600"
    >
      Choose File
    </label>
    <input
      type="file"
      name="filename"
      id="fileInput"
      accept=".txt, .pdf, .png, .jpg, .jpeg"
      className="hidden"
      onChange={(e) => setFile(e.target.files[0])}
    />
    <button
      onClick={handleUpload}
      className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-600"
    >
      Upload
    </button>
    <br />
    <UploadedFiles />
  </div>
  )
}

export default Upload
