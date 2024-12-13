import React from "react";
import axios from "../api";

const UploadForm = ({ onLogsUpdate }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/logs/upload/", formData);
      const logsResponse = await axios.get("/logs/");
      console.log(logsResponse);
      
      onLogsUpdate(logsResponse.data.logs);

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="upload-form">
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadForm;
