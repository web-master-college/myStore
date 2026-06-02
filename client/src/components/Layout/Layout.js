import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import WishListDrawer from '../WishListDrawer/WishListDrawer'

export default function Layout() {
  const [isOpenWishList, setIsOpenWishList] = useState(false);
  
  return (
    <>
    <Header setIsOpenWishList={setIsOpenWishList} />
    <main>
      {/* Child routes will render here */}
      <Outlet /> 
    </main>
    {/*  */}
    <WishListDrawer isOpenWishList={isOpenWishList} setIsOpenWishList={setIsOpenWishList}/>
    <Footer />
  </>
  )
}
