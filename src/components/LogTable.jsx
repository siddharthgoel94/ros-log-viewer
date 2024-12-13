import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Chip,
} from '@mui/material';
import TablePagination from '@mui/material/TablePagination';

const LogTable = ({ logs }) => {
   

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'ERROR':
        return 'error';
      case 'FATAL':
            return 'error';
      case 'WARN':
        return 'warning';
      case 'INFO':
        return 'info';
      case 'DEBUG':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <>
    <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>

      <Table sx={{ minWidth: 650, borderRadius: 2 }} aria-label="logs table">
        <TableHead>
          <TableRow sx={{ bgcolor: 'primary.light' }}>
            <TableCell align="center" sx={{ fontWeight: 'bold',  }}>
              Timestamp
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', }}>
              Severity
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', }}>
              Node
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', }}>
              Message
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log, index) => (
            <TableRow
              key={index}
              sx={{
                bgcolor: log.severity === 'ERROR' ? 'error.light' : 'inherit',
                '&:hover': log.severity !== 'ERROR' ?{ bgcolor: 'grey.100' }:{bgcolor: 'grey.400' },
              }}
            >
              <TableCell align="center">{log.timestamp}</TableCell>
              <TableCell align="center">
                <Chip
                  label={log.severity}
                  color={getSeverityColor(log.severity)}
                  sx={{ fontWeight: 'bold' }}
                />
              </TableCell>
              <TableCell align="center" sx={{ fontStyle: 'italic' }}>
                {log.node}
              </TableCell>
              <TableCell align="center">{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
};

export default LogTable;
