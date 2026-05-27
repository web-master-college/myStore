import React, { useMemo } from 'react'
import Section from '../Section/Section'
import { categoriesMap, products } from '../../utils';



export default function Home() {

const laptopsOnlyProducts = useMemo(() => products.filter(p => p.categoryId === categoriesMap.Laptops.id), [products]);
  return (
    <div className='homePage'>

        {/* <Section title="Search Results" term={term} isSearch={true} items={searchedProducts} classTitle="search-section" isSlider={true}/> */}
        <Section title="Offers" items={products} classTitle="offers-section" isSlider={true}/>
        <Section title="Notebooks" items={laptopsOnlyProducts} classTitle="notebooks-section" isSlider={true}/>

    </div>
  )
}
