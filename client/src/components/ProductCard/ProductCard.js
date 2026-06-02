import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { toggle } from '../../features/wishlist/wishListSlice'
import { calculatePrice } from '../../utils'


/*
  discount: 
  name:
  description:
  stock:
  imageUrl
  price:
  productId:
*/

export default function ProductCard({data}) {
  const dispatch = useDispatch()
    
 
    return (
    <div
    className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
    <div className="absolute right-[10px] top-[10px]">
      <div className="p-[2px]">
        <a
          className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
          onClick={() => dispatch(toggle(data))}>
          <i className="bi bi-heart pointer-events-none flex text-white"></i>
        </a>
      </div>
      <div className="p-[2px]">
        <a
          className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
          href="javascript:void(0)"
          data-target=".modal-quick">
          <i
            className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
        </a>
      </div>
    </div>
    <div
      className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
      {data.discount > 0 && <span
        className="text-md text-center font-semibold uppercase text-white">
        {data.discount}% Off
      </span>}
    </div>
    <div className="h-[190px] overflow-hidden rounded-lg">
      <Link to={`/product-details/${data.productId}`}>
        <img
          className="h-full w-full object-contain"
          src={`${data.imageUrl}`}
          alt="product" />
      </Link>
    </div>
    <div className="my-2 flex justify-between">
      <div className="my-2" data-rater="5"></div>
      <div>
        <span
          className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
          {data.stock}
        </span>
      </div>
    </div>
    <div className="my-1">
     <Link className="line-clamp-1break-all font-medium"  to={`/product-details/${data.productId}`}>
        {data.name}
      </Link>
    </div>
    <div className="my-1">
      <p className="line-clamp-2 text-sm text-gray-400">
      {data.description}
      </p>
    </div>
   
    <div className="my-1">
      <span className="text-lg font-bold">{calculatePrice(data.price, data.discount)}</span>
      {data.discount > 0 && (<span className="text-sm text-primary-500 line-through">
            {data.discount}
      </span>)}
    </div>
    <div className="mt-auto">
    <Link className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"  to={`/product-details/${data.productId}`}>
        <span className="relative z-[4] font-bold uppercase text-white">
          View details
        </span>
      </Link>
    </div>
  </div>
  )
}
