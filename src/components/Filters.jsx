import React, { useEffect, useState } from "react";
import { TextField,MenuItem,Button } from "@mui/material";
import DownloadButton from "./DownloadButton";

const Filters = ({ onApplyFilters }) => {
  const [severity, setSeverity] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleApply = () => {
    onApplyFilters(severity, keyword);
    console.log(severity);
    console.log(keyword);
    
  };
const severities=[
  {
    value:'ERROR',
    label:'ERROR'
  },
  {
    value:'INFO',
    label:'INFO'
  },
  {
    value:'DEBUG',
    label:'DEBUG'
  },
  {
    value:'FATAL',
    label:'FATAL'
  },
  {
    value:'',
    label:'ALL'
  }
]
  return (
    <div className="filters">

<TextField
          id="outlined-select-currency"
          select
          label="Severity"
          defaultValue="all"
          sx={{minWidth:"9rem", margin:"2rem"}}
          onChange={(e) => setSeverity(e.target.value)} 
          value={severity}
        >
          {severities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label || 'ALL'}
            </MenuItem>
          ))}
        </TextField>

<TextField id="outlined-search" label="Keywords" type="search" onChange={(e) => setKeyword(e.target.value)} sx={{minWidth:"8rem", margin:"2rem"}}/>
<Button variant="contained" onClick={handleApply} sx={{minWidth:"8rem", margin:"2rem"}}>Apply Filters</Button>
     

      {/* <select onChange={(e) => setSeverity(e.target.value)} value={severity}>
        <option value="">All Severities</option>
        <option value="INFO">INFO</option>
        <option value="WARN">WARN</option>
        <option value="ERROR">ERROR</option>
        <option value="FATAL">FATAL</option>
      </select>
       <input
        type="text"
        placeholder="Search Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
       <button onClick={handleApply}>Apply Filters</button> */}

<DownloadButton severity={severity} keyword={keyword}/>

    </div>
  );
};

export default Filters;
