import { TableFooter, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { format } from 'date-fns';
import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CommonContext } from '../../../context';
import { useDenyOrder, useGrantOrder } from '../../../hooks';
import { IOrder } from '../../../types';
import TablePaginationActions from '../Pagination/TablePaginationActions';

const OrderComponent: React.FC<{}> = () => {

  const { allOrders, dispatch, setActiveProduct, refresh, loading } = React.useContext(CommonContext)
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [refreshLoader, setRefreshLoader] = React.useState<boolean>(false)
  const [accessLoading, setAccessLoading] = React.useState<boolean>(false)

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
      {
        loading
          ?
          <span>Loading...</span>
          :
          <div className='w-full px-4 flex flex-col items-end justify-end'>
            <button className='bg-pink-600 px-4 py-2 text-white rounded mb-4' onClick={() => { setRefreshLoader(true); !refreshLoader && refresh({ data: "orders", setRefreshLoader }) }}>{refreshLoader ? <BiLoaderAlt className='animate-spin text-white w-20' size={25} /> : "REFRESH"}</button>
            <TableContainer className='' component={Paper}>
              <Table sx={{ minWidth: 650 }} className="" aria-label="simple table">
                <TableHead>
                  <TableRow className='bg-slate-200 font-bold font-lato'>
                    <TableCell>No</TableCell>
                    <TableCell align="right">Product Name</TableCell>
                    <TableCell align="right">Product Quantity</TableCell>
                    <TableCell align="right">User Full Name</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Order Status</TableCell>
                    <TableCell align="right">Ordered At</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className=''>
                  {(rowsPerPage > 0
                    ? allOrders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : allOrders
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
                      <TableCell align="right">{order.user.role}</TableCell>
                      <TableCell align="right">{order.status}</TableCell>
                      <TableCell align="right">{format(parseInt(order.createdAt as string), 'do MMM Y')}</TableCell>
                      <TableCell align="right">
                        <Link to={"/product"}><button onClick={() => setActiveProduct(order.product)} className='bg-blue-600 font-bold mx-1 px-6 py-2 rounded text-white'>VIEW PRODUCT</button></Link>
                        <button disabled={accessLoading || order.status === "GRANTED" || order.status === "DENIED"} onClick={() => { setAccessLoading(true); useDenyOrder({ id: order._id as string, dispatch, setLoading: setAccessLoading }) }} className={`${order.status === "PENDING" ? "bg-delete-red" : "bg-slate-400 cursor-not-allowed"} font-bold mx-1 px-6 py-2 rounded text-white`}>{accessLoading ? <BiLoaderAlt size={17} className='w-10 animate-spin text-white' /> : "DENY"}</button>
                        <button disabled={accessLoading || order.status === "GRANTED" || order.status === "DENIED"} onClick={() => { setAccessLoading(true); useGrantOrder({ id: order._id as string, dispatch, setLoading: setAccessLoading }) }} className={`${order.status === "PENDING" ? "bg-pink-600" : "bg-slate-400 cursor-not-allowed"} font-bold mx-1 px-6 py-2 rounded text-white`}>{accessLoading ? <BiLoaderAlt size={17} className='w-10 animate-spin text-white' /> : "GRANT"}</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow className='bg-slate-200'>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={9}
                      count={allOrders?.length}
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
      }
    </div>
  )
}

export default OrderComponent