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
import { IProduct } from '../../../types';
import TablePaginationActions from '../Pagination/TablePaginationActions';
import { Navigate } from 'react-router-dom';

const ProductComponent = () => {

  const { products, setUpdateProduct } = useContext(CommonContext)
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
        Products in Prime Picks
      </span>
      <div className='w-full px-4'>
        <TableContainer className='' component={Paper}>
          <Table sx={{ minWidth: 650 }} className="" aria-label="simple table">
            <TableHead>
              <TableRow className='bg-slate-200 font-bold font-lato'>
                <TableCell>No</TableCell>
                <TableCell>Image</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Added</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className=''>
              {(rowsPerPage > 0
                ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : products
              ).map((product: IProduct, index: number) => (
                <TableRow
                  key={product._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="product">
                    {index + 1 + page}
                  </TableCell>
                  <TableCell align="right">
                    <img src={product.image} className="w-8 h-8 rounded-full object-cover" alt="" />
                  </TableCell>
                  <TableCell align='right'>
                    {product.name}
                  </TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                  <TableCell align="right">{format(parseInt(product.createdAt as string), 'do MMM Y')}</TableCell>
                  <TableCell align="right">
                    <button onClick={() => setUpdateProduct({ display: true, product })} className='bg-red-500 font-bold px-6 py-2 rounded text-white'>Delete</button>
                    <button onClick={() => { console.log("Delete product"); {/* Implementation of delete product */ } }} className='bg-red-500 font-bold px-6 py-2 rounded text-white'>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className='bg-slate-200'>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={9}
                  count={products.length}
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

export default ProductComponent