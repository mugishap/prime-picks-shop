import React, { useContext, useEffect } from 'react'
import { CommonContext } from '../../../context'
import { RiGroupLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useGetAllOrders, useGetProducts, useGetUsers } from '../../../hooks'

const DashboardComponent: React.FC<{}> = () => {
  const { user, users, setLoading, dispatch, orders, products } = useContext(CommonContext)
  const stats = [
    {
      name: "Users",
      icon: RiGroupLine,
      count: users.length,
      path: "/admin/users"
    },
    {
      name: "Products",
      icon: RiGroupLine,
      count: products.length,
      path: "/admin/products"
    },
    {
      name: "Orders",
      icon: RiGroupLine,
      count: orders.length,
      path: "/admin/orders"
    },
  ]
  useEffect(() => {
    setLoading(true)
    useGetUsers({ dispatch, setLoading })
    useGetProducts({ dispatch, setLoading })
    useGetAllOrders({ dispatch, setLoading })
  }, [])

  return (
    <div className='h-full pt-8 px-8 flex flex-col w-full'>
      <span className='text-xl font-bold my-4'>Hello there, {user.fullname}</span>
      <span className='text-2xl font-bold my-4 '>Prime Picks Statistics</span>
      <div className='w-full flex items-center justify-start'>
        {
          stats.map((data, index) => (
            <Link to={data.path} key={index} className={`rounded w-2/12 mx-6 p-4 flex flex-col bg-slate-200`}>
              <span className='flex items-center text-xl'>
                <data.icon className='mr-2' />
                <span className='font-medium'>{data.name}</span>
              </span>
              <span className='mt-4 font-bold text-2xl'>
                {data.count}
              </span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardComponent