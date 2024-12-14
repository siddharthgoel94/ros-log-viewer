import React from "react";

const DownloadButton = ({ severity, keyword }) => {
  const handleDownload = async () => {
    const url = `http://localhost:8000/logs/download/?severity=${severity}&&keyword=${keyword}`;

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
    <button onClick={handleDownload} style={{ margin: "1rem", padding: "0.5rem 1rem" }}>
      Download Logs
    </button>
  );
};

export default DownloadButton;
