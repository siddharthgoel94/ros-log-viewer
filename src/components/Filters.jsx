import React, { useState } from "react";

const Filters = ({ onApplyFilters }) => {
  const [severity, setSeverity] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleApply = () => {
    onApplyFilters(severity, keyword);
  };

  return (
    <div className="filters">
      <select onChange={(e) => setSeverity(e.target.value)} value={severity}>
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
      <button onClick={handleApply}>Apply Filters</button>
    </div>
  );
};

export default Filters;
