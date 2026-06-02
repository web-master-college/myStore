import React from 'react'

export default function WishListDrawer({isOpenWishList, setIsOpenWishList}) {

  return (
    <div className={`modal-wishlist modal-container modal-overlay z-20 ${isOpenWishList ? 'modal-overlay_active' : ''}`}>
    <div
      className={`modal-content modal-right flex h-full w-[400px] min-w-[250px] flex-col bg-[#f5f7fe] ${isOpenWishList ? 'modal-right_active' : ''}`}>
      <div className="w-full">
        <div className="border-b-2 border-gray-200 p-5">
          <h3 className="text-xl font-bold uppercase">Wishlist</h3>
        </div>
        <button onClick={() => setIsOpenWishList(false)}
          className="close-modal absolute right-5 top-5 p-[3px] transition-all duration-300 hover:text-slate-400">
          <i className="bi bi-x-lg pointer-events-none flex text-xl"></i>
        </button>
      </div>
      <div className="h-full overflow-auto">
        {/* <!-- If the wishlist is empty (replace hidden with flex) --> */}
        <div className="hidden flex-col items-center justify-center gap-4 p-5">
          <i className="bi bi-heart text-8xl text-gray-200"></i>
          <p className="font-semibold">There are no products in the wishlist.</p>
          <a
            className="relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
            href="#">
            <span className="relative z-[4] font-bold uppercase text-white">
              Go to the store
            </span>
          </a>
        </div>
        <a
          className="flex h-[100px] w-full items-center justify-between gap-5 bg-white p-2 transition-all duration-300 hover:bg-gray-100"
          href="#">
          <div
            className="h-[80px] w-[80px] min-w-[80px] overflow-hidden rounded-lg border">
            <img
              className="h-full w-full object-cover"
              src="img/product/prod-1.jpg"
              alt="product" />
          </div>

          <div className="flex w-full flex-col">
            <h6 className="line-clamp-2 break-all text-lg font-semibold">
              Ryzen 5 3600x
            </h6>
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary-500">$37.00</span>
              <small className="text-xs text-primary-500 line-through">
                $50.00
              </small>
            </div>
          </div>

          <div
            className="flex text-slate-400 transition-all duration-300 hover:text-primary-500">
            <i className="bi bi-trash-fill pointer-events-none text-2xl"></i>
          </div>
        </a>
      </div>
      <div className="mt-auto border-t-2 border-gray-200 bg-white px-1 xs:px-5">
        <a
          className="relative my-5 flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
          href="wishlist.html">
          <span className="relative z-[4] font-bold uppercase text-white">
            View Wishlist
          </span>
        </a>
      </div>
    </div>
  </div>
  )
}
