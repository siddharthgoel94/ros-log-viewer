import React, { useEffect, useState } from "react";
import { TextField, MenuItem, Button } from "@mui/material";
import DownloadButton from "./DownloadButton";

const Filters = ({ onApplyFilters }) => {
  const [severity, setSeverity] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleApply = () => {
    onApplyFilters(severity, keyword);
    console.log(severity);
    console.log(keyword);
  };
  const handleSeverityChange = (e) => {
    const newSeverity = e.target.value;
    onApplyFilters(newSeverity, keyword);

    setSeverity(newSeverity);
  };
  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;
    onApplyFilters(severity, newKeyword);

    setKeyword(newKeyword);
  };
  const severities = [
    {
      value: "ERROR",
      label: "ERROR",
    },
    {
      value: "INFO",
      label: "INFO",
    },
    {
      value: "DEBUG",
      label: "DEBUG",
    },
    {
      value: "FATAL",
      label: "FATAL",
    },
    {
      value: "",
      label: "ALL",
    },
  ];
  return (
    <div className="filters">
      <TextField
        id="outlined-select-currency"
        select
        label="Severity"
        defaultValue="all"
        sx={{ minWidth: "9rem", margin: "2rem" }}
        onChange={(e) => handleSeverityChange(e)}
        value={severity}
      >
        {severities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label || "ALL"}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-search"
        label="Keywords"
        type="search"
        onChange={(e) => handleKeywordChange(e)}
        sx={{ minWidth: "8rem", margin: "2rem" }}
      />
      
      <DownloadButton severity={severity} keyword={keyword} />
    </div>
  );
};

export default Filters;
