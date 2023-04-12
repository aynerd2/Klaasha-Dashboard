import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { BsFilter } from 'react-icons/bs'
import TablePagination from '@mui/material/TablePagination';


const columns = [
  { id: 'ID', label: 'ID', minWidth: 150 },
  { id: 'Source', label: 'Source', minWidth: 80 },
  {
    id: 'name',
    label: 'name',
    minWidth: 100,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'email',
    minWidth: 100,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Amount',
    label: 'Amount',
    minWidth: 80,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },

  {
    id: 'date',
    label: 'date',
    minWidth: 80,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },

  {
    id: 'Status',
    label: 'Status',
    minWidth: 80,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },


];


function createData(ID, Source, name, email, Amount, date, Status) {
  return { ID, Source, name, email, Amount, date, Status };
}

const rows = [
  createData("GB124QWERTY12346", 'GTB', 'Mike Owen', '0223337281', '$230.00', '24.08.2021', 'Pending'),
  createData("CB328ABCEDF23416", 'UBA', 'Steve O Shassy', '0982764829', '$480.00', '22.08.2021', 'Successful'),
  createData("GB124QWERTY12348", 'Opay', 'Mike Owen', '0223337281', '$930.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12350", 'Kuda', 'Belle k', '0223337281', '$730.00', '24.08.2021', 'Successful'),
  createData("GB124QWERTY12333", 'Access', 'Mike Pence', '0223337281', '$630.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12346", 'GTB', 'Mike Owen', '0223337281', '$230.00', '24.08.2021', 'Pending'),
  createData("CB328ABCEDF23416", 'UBA', 'Steve O Shassy', '0982764829', '$480.00', '22.08.2021', 'Successful'),
  createData("GB124QWERTY12348", 'Opay', 'Mike Owen', '0223337281', '$930.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12350", 'Kuda', 'Belle k', '0223337281', '$730.00', '24.08.2021', 'Successful'),
  createData("GB124QWERTY12333", 'Access', 'Mike Pence', '0223337281', '$630.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12348", 'Opay', 'Mike Owen', '0223337281', '$930.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12350", 'Kuda', 'Belle k', '0223337281', '$730.00', '24.08.2021', 'Successful'),
  createData("GB124QWERTY12333", 'Access', 'Mike Pence', '0223337281', '$630.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12346", 'GTB', 'Mike Owen', '0223337281', '$230.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12346", 'GTB', 'Mike Owen', '0223337281', '$230.00', '24.08.2021', 'Pending'),
  createData("CB328ABCEDF23416", 'UBA', 'Steve O Shassy', '0982764829', '$480.00', '22.08.2021', 'Successful'),
  createData("GB124QWERTY12348", 'Opay', 'Mike Owen', '0223337281', '$930.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12350", 'Kuda', 'Belle k', '0223337281', '$730.00', '24.08.2021', 'Successful'),
  createData("GB124QWERTY12333", 'Access', 'Mike Pence', '0223337281', '$630.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12346", 'GTB', 'Mike Owen', '0223337281', '$230.00', '24.08.2021', 'Pending'),
  createData("CB328ABCEDF23416", 'UBA', 'Steve O Shassy', '0982764829', '$480.00', '22.08.2021', 'Successful'),
  createData("GB124QWERTY12348", 'Opay', 'Mike Owen', '0223337281', '$930.00', '24.08.2021', 'Pending'),
  createData("GB124QWERTY12350", 'Kuda', 'Belle k', '0223337281', '$730.00', '24.08.2021', 'Successful'),
  createData("GB124QWERTY12333", 'Access', 'Mike Pence', '0223337281', '$630.00', '24.08.2021', 'Pending'),
];


const Transactions = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };




  return (

    <div className="m-2 md:m-4 mt-24 p-2 md:p-10">
    
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 380 }}>
          
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
            <TableCell align="left" colSpan={7}>
            <h1 className='font-body font-semibold'>Transaction History</h1>
            </TableCell>
            </TableRow>



              <TableRow>

                <TableCell align="left" colSpan={2}>
                  <Box component="form" sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 150
                  }}>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search "
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Box>

                </TableCell>

                <TableCell align="right" colSpan={5}>
               

                  
                      <button class="bg-white hover:bg-gray-100 text-black font-bold py-1 px-2 rounded-md inline-flex items-center border border-gray-500" style={{ marginRight: '10px' }}>
                        <span class="font-body font-bold">Filter</span>
                        <BsFilter style={{ fontSize: '1.5em' }} />
                      </button>
    
                
                      <button class="bg-white hover:bg-gray-100 text-black font-bold py-1 px-2 rounded-md inline-flex items-center border border-gray-500">
                        <span className='font-body font-bold'>Export</span>
                      </button>
              

             
                </TableCell>

              </TableRow>

              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>

            </TableHead>


            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>

          </Table>

        </TableContainer>


        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </div>

  )
}

export default Transactions