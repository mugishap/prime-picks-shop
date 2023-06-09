import React from 'react'
import Dropzone from 'react-dropzone'
import { BiCart, BiLoaderAlt, BiUpload } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { CommonContext } from '../../../context'
import { useUpdateProduct } from '../../../hooks'
import { IProduct } from '../../../types'

interface Data extends IProduct {
    imageString?: string
}

const UpdateProductComponent: React.FC<{}> = () => {

    const { updateProduct, setUpdateProduct, loading, setLoading, dispatch } = React.useContext(CommonContext)
    const [productData, setProductData] = React.useState<Data>({ ...updateProduct.product, imageString: updateProduct.product.image })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setLoading(true)
            if (!productData.currency || !productData.name || !productData.imageString || !productData.description || !productData.price) return toast.error("Please fill all the fields")
            useUpdateProduct({ productData, setLoading, dispatch, setUpdateProduct })
        } catch (error) {
            console.log(error);

        }
    }

    const previewImage = () => {
        const input: any = document.querySelector("#product-image");
        const file = input.files[0];
        const reader = new FileReader();
        reader.addEventListener("loadend", () => {
            setProductData({ ...productData, imageString: reader.result as string });
        });
        reader.readAsDataURL(file);
    }

    const onDrop = (acceptedFiles: any) => {
        if (acceptedFiles?.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("loadend", () => {
                setProductData({ ...productData, imageString: reader.result as string });
            });
            reader.readAsDataURL(acceptedFiles[0]);
        }
    };


    return (
        <div className='z-[2] w-full h-full fixed top-0 left-0 bg-black/20 backdrop-blur-lg flex items-center justify-center'>
            <div className='absolute z-[3] w-full h-full' onClick={() => setUpdateProduct({ display: false, product: null })}></div>
            <div className='z-[4] bg-white overflow-y-scroll rounded w-8/12 p-4 h-[90%] flex flex-col justify-start'>
                <div className='w-full flex-col-reverse justify-start plg:justify-center plg:px-0 px-4 plg:flex-row flex h-full'>
                    <form onSubmit={handleSubmit} className='w-full plg:w-1/2 flex flex-col plg:mx-2'>
                        <div className='w-full my-2'>
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Product Name
                            </label>
                            <input
                                aria-label="enter product name"
                                role="input"
                                type="text"
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Product Name"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setProductData({ ...productData, name: e.target.value });
                                }}
                                value={productData.name}
                            />
                        </div>
                        <div className='w-full my-2'>
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Product Price
                            </label>
                            <input
                                aria-label="enter product price"
                                role="input"
                                type={"number"}
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Product Price"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setProductData({ ...productData, price: parseInt(e.target.value) });
                                }}
                                value={productData.price}
                            />
                        </div>
                        <div className='w-full my-2'>
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Product Quantity
                            </label>
                            <input
                                aria-label="enter product quantity"
                                role="input"
                                type={"number"}
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Product Price"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setProductData({ ...productData, quantity: parseInt(e.target.value) });
                                }}
                                value={productData.quantity}
                            />
                        </div>
                        <div className='w-full my-2'>
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Currency
                            </label>
                            <select
                                value={productData.currency}
                                onChange={(e) => setProductData({ ...productData, currency: e.target.value as "RWF" | "USD" })}
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            >
                                {
                                    ["RWF", "USD"].map((currency, index) => (
                                        <option className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                            key={index} value={currency}>{currency}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='w-full my-2'>
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Product Description
                            </label>
                            <textarea
                                rows={8}
                                value={productData.description}
                                onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                                className="resize-none bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            />
                        </div>
                        <button
                            role="button"
                            aria-label="create product"
                            title="Update Product"
                            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm w-fit font-semibold leading-none text-white focus:outline-none bg-pink-500 border rounded hover:bg-pink-600 duration-800 hover:animate-ring py-4 mt-4 px-8 disabled:bg-slate-600"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? <BiLoaderAlt className='animate-spin w-20 text-white' size={25} /> : "UPDATE PRODUCT"}
                        </button>
                    </form>
                    <div className='w-full plg:w-1/2 plg:mx-2 rounded min-h-full'>
                        {
                            productData.imageString ? (
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <span className='my-6 font-bold w-96 flex items-center justify-between text-xl'>
                                        <span>Product Preview</span>
                                        <button onClick={() => {
                                            setProductData({ ...productData, imageString: "" })
                                        }} className='bg-pink-600 rounded py-2 px-4 font-normal text-white cursor-pointer text-base'>CHANGE IMAGE</button>
                                    </span>
                                    <div
                                        title='Click to view'
                                        className='w-96 h-[513px] rounded relative overflow-hidden shadow-lg cursor-pointer'
                                    >
                                        {
                                            productData.quantity === 0 ?
                                                (
                                                    <div className='absolute py-1 mt-2 mr-2 right-0 top-0 z-[3] px-4 bg-red-600 rounded text-white font-bold'>SOLD OUT</div>
                                                )
                                                :
                                                null //tags to be added here later
                                        }
                                        <div className='w-full h-64 relative'>
                                            <img
                                                className='w-full absolute object-cover h-full hover:scale-105'
                                                src={productData.imageString}
                                                alt={productData.name}
                                            />
                                        </div>
                                        <div className='flex min-h-[47%] justify-between w-full flex-col items-center'>
                                            <div className='px-6 w-full py-4'>
                                                <div className='font-bold text-start text-xl mb-2'>{productData.name}</div>
                                                <p className='text-gray-700 text-base w-full'>{productData.description?.length > 220 ? `${productData.description?.slice(0, 220)}...` : productData.description}</p>
                                            </div>
                                            <div className='flex justify-between w-full items-end mt-1 px-6'>
                                                <button className='p-2 ml-0 leading-tight text-black bg-white font-bold duration-75 flex gap-1'>
                                                    {new Intl.NumberFormat("es-us").format(Number(productData.price))}
                                                    <span className='font-bold'>
                                                        {productData.currency?.toUpperCase()}
                                                    </span>
                                                </button>
                                                <button title='Add to Cart' className='p-3 bg-transparent text-black rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white duration-75'>
                                                    <BiCart className='text-pink-600 ' size={25} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                (<Dropzone
                                    accept={{ "image/*": [] }}
                                    onDrop={onDrop}
                                    multiple={false}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <label
                                            {...getRootProps({ className: "dropzone" })}
                                            htmlFor="product-image"
                                            className="border-4 cursor-pointer border-dashed rounded-xl border-slate-500 w-full h-full flex items-center justify-center"
                                        >
                                            <div className="text-slate-500 flex flex-col items-center justify-center">
                                                <BiUpload className="text-3xl" />
                                                <input {...getInputProps()} type="file" id="product-image" onChange={previewImage} className="hidden" />
                                                <span className="sm:flex hidden font-lato text-slate-800">
                                                    Drag Image here or Click to upload
                                                </span>
                                            </div>
                                        </label>
                                    )}
                                </Dropzone>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProductComponent