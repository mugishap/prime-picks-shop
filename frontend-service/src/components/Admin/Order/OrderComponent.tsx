import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter, TablePagination } from '@mui/material';
import { format } from 'date-fns';
import { CommonContext } from '../../../context';
import { IOrder } from '../../../types';
import TablePaginationActions from '../Pagination/TablePaginationActions';
import { Navigate } from 'react-router-dom';

const OrderComponent: React.FC<{}> = () => {

  const { orders } = useContext(CommonContext)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className='w-full px-8 overflow-y-scroll items-center flex flex-col pt-8'>
      <span className='font-bold my-8 text-xl'>
        Orders in Prime Picks
      </span>
      <div className='w-full px-4'>
        <TableContainer className='' component={Paper}>
          <Table sx={{ minWidth: 650 }} className="" aria-label="simple table">
            <TableHead>
              <TableRow className='bg-slate-200 font-bold font-lato'>
                <TableCell>No</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Product Quantity</TableCell>
                <TableCell align="right">User Full Name</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Ordered At</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className=''>
              {(rowsPerPage > 0
                ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : orders
              ).map((order: IOrder, index: number) => (
                <TableRow
                  key={order._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="order">
                    {index + 1 + page}
                  </TableCell>
                  <TableCell align='right'>
                    {order.product.name}
                  </TableCell>
                  <TableCell align="right">{order.product.quantity}</TableCell>
                  <TableCell align="right">{order.user.fullname}</TableCell>
                  <TableCell align="right">{format(parseInt(order.createdAt as string), 'do MMM Y')}</TableCell>
                  <TableCell align="right">
                    <button onClick={() => { {/*Implement delete order*/ } }} className='bg-red-500 font-bold px-6 py-2 rounded text-white'>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className='bg-slate-200'>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={9}
                  count={orders.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  className="w-ful"
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default OrderComponent