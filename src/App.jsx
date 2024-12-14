import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import LogTable from "./components/LogTable";
import Filters from "./components/Filters";
import "./styles.css";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);

  const handleLogsUpdate = (newLogs) => {
    setLogs(newLogs);
    setFilteredLogs(newLogs);
  };

  const applyFilters = (severity, keyword) => {
    let filtered = logs;
    if (severity) filtered = filtered.filter(log => log.severity === severity);
    if (keyword) {
      filtered = filtered.filter(log =>
        log.message.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    setFilteredLogs(filtered);
  };

  return (
    <div className="app">
      <h1>ROS Log Viewer</h1>
      <UploadForm onLogsUpdate={handleLogsUpdate} />
      <Filters onApplyFilters={applyFilters} />
      <LogTable logs={filteredLogs} />
     
    </div>
  );
};

export default App;
