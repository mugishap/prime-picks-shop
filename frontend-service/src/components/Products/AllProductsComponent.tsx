import React from 'react'
import { IProduct } from '../../types'
import { CommonContext } from '../../context'
import Product from '../Product/Product'

const AllProductsComponent: React.FC = () => {
    const { products, loading } = React.useContext(CommonContext)
    const [_products, set_products] = React.useState<IProduct[]>(products)
    const [page, setPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState<number>(Math.floor((products.length) / 6));

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages > 10) {
            if (page < 6) {
                for (let i = 1; i <= 8; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (page >= 6 && page <= totalPages - 5) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = page - 2; i <= page + 2; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 7; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            }
        } else {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    }

    React.useEffect(() => {
        setTotalPages(Math.floor((products.length) / 6))
        set_products(products.slice((page - 1) * 6, page * 6))
    }, [page])

    return (
        <div className='my-4 w-full flex flex-col px-[10vw] h-full'>
            <div className='flex w-full items-center justify-between'>
                <span className="font-bold relative z-[1] text-4xl text-start w-fit">All Products 🎉
                    <svg className='absolute left-0 -z-[1] -bottom-3 text-pink-600' width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="currentColor" strokeWidth="4" strokeMiterlimit="3.8637" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <div className="flex justify-center my-12">
                <div className="flex justify-center items-center space-x-2 mt-4">
                    {page > 1 && (
                        <button
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setPage(page - 1)}
                        >
                            Previous
                        </button>
                    )}
                    {getPageNumbers().map((pageNumber, index) => (
                        <span
                            key={index}
                            className={
                                pageNumber === page
                                    ? 'bg-pink-500 text-white font-bold py-2 px-4 rounded'
                                    : 'hover:bg-pink-500 hover:text-white font-bold py-2 px-4 rounded'
                            }
                            onClick={() => setPage(pageNumber as number)}
                        >
                            {pageNumber}
                        </span>
                    ))}
                    {page < totalPages && (
                        <button
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
            <section className='h- py-8 w-full'>
                <div className='w-full xl:w-[90%] m-auto py-4 flex flex-wrap gap-6 items-center justify-center  transition-all duration-300'>
                    {!loading &&
                        _products.slice(0, 5).map((product: IProduct, index: number) => (
                            <Product key={index} product={product} />
                        ))
                    }
                    {loading && <span>Loading...</span>}
                    {!products.length && !loading && <span>Nothing to see here...</span>}
                </div>
            </section>
        </div>
    )
}

export default AllProductsComponent