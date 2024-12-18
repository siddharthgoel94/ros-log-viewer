import React from "react";
import axios from "../api";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from "@mui/material";


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadForm = ({ onLogsUpdate }) => {
  const [fileName,setFileName]=React.useState("")
  const backend_url_main=import.meta.env.VITE_BACKEND_URL_MAIN
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    
    setFileName(event.target.files[0].name)
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(`${backend_url_main}/logs/upload/`, formData);
      const logsResponse = await axios.get(`${backend_url_main}/logs/`);
      
      
      onLogsUpdate(logsResponse.data.logs);

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="upload-form">
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload ROS Log File
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileUpload}
      />
    </Button>
    {fileName && (
    <Typography
      variant="body2"
      sx={{
        color: "primary.main",
        fontStyle: "italic",
        textAlign: "center",
        marginTop:"1rem",
        fontSize:"1rem"
      }}
    >
      {fileName}
    </Typography>
  )}
    </div>
  );
};

export default UploadForm;
