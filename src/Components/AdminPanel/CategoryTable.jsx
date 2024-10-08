import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00AEEF',
    color: theme.palette.common.white,
    borderRight: '1px solid white', // Add vertical lines
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRight: '1px solid #e0e0e0', // Add vertical lines for body rows
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(S_No, category_name, Date, Action) {
  return { S_No, category_name, Date, Action };
}

const rows = [
  createData(1, 'Project Management', '2019-11-25', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(2, 'QA Testing', '2022-12-11', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(3, 'Business Intelligence', '2021-02-15', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(4, 'Data Science', '2020-05-12', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(5, 'Programming', '2019-06-11', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(6, 'Big Data', '2018-05-21', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(7, 'RPA', '2019-05-18', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(8, 'Salesforce', '2018-04-13', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(9, 'ServiceNow', '2019-06-11', <><FaEdit /> <RiDeleteBin6Line /></>),
  createData(10, 'Cloud Computing', '2019-06-11', <><FaEdit /> <RiDeleteBin6Line /></>),
];

export default function CategoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell>S.No.</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.S_No}>
              <StyledTableCell><Checkbox /></StyledTableCell>
              <StyledTableCell>{row.S_No}</StyledTableCell>
              <StyledTableCell align="right">{row.category_name}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
