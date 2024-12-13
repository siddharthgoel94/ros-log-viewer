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
     {logs.length>0 && (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 3 }}>
       
    <Typography
      variant="body2"
      sx={{
        color: "secondary.dark",
        textAlign: "center",
        marginTop:"1rem",
        fontSize:"2rem"
      }}
    >
      Here are all the logs compiled at one place
    </Typography>
       

      <Table sx={{ minWidth: 650, borderRadius: 2 }} aria-label="logs table">
        <TableHead>
          <TableRow>
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
)}
  </>
  )
  ;
};

export default LogTable;
