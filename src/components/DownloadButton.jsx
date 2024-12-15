import React from "react";
import { Button } from "@mui/material";
const DownloadButton = ({ severity, keyword }) => {
  const backend_url_main=import.meta.env.VITE_BACKEND_URL_MAIN;
  const handleDownload = async () => {
    const url = `${backend_url_main}/logs/download/?severity=${severity}&&keyword=${keyword}`;
    // Create a hidden link element
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank"; // Optional, if you want to open it in a new tab
    link.download = ""; // Let the server dictate the file name
  
    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();
  
    // Remove the link after the download starts
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} 
    variant="contained"
    sx={{ margin: "2.2rem 1rem", padding: "0.5rem 1rem" }}>
      Download Logs
    </Button>
  );
};

export default DownloadButton;
