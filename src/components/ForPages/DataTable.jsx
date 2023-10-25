import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function DataTable({tableInfo}) {
  return (
    <>
    <TableContainer >
      <Table aria-label="simple table">
        <TableBody>
          {tableInfo.filter((row) => row.value)
          .map((row) => {
            return (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                <b>{row.name}</b>
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default DataTable