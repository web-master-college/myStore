import './App.css';
import React, {useMemo, useState} from 'react';
import { categoriesMap, LanguageContext, products } from '../../utils';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
// import ProductDetails from '../ProductDetails/ProductDetails';



function App() {
  const [term, setSearchTerm] = useState('');
  // term -->
  

  console.log('term ==>  ', term);
  const laptopsOnlyProducts = useMemo(() => products.filter(p => p.categoryId === categoriesMap.Laptops.id), [products]);
  const searchedProducts = useMemo(() => { 
    if(!term){
      return [];
    }
    return products.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));

  }, [term, products])



  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //   },
  //   {
  //     path: "/product/:id",
  //     element: <ProductDetails />,
  //   },
  // ]);
  



  return (
    <LanguageContext value="he">
        <Header searchFunction={setSearchTerm}/>
        {/* SEARCH  term */}

        {/* <ProductDetails /> */}

        <Section title="Search Results" term={term} isSearch={true} items={searchedProducts} classTitle="search-section" isSlider={true}/>
        <Section title="Offers" items={products} classTitle="offers-section" isSlider={true}/>
        <Section title="Notebooks" items={laptopsOnlyProducts} classTitle="notebooks-section" isSlider={true}/>

        <Footer />
    </LanguageContext>
  );
}

export default App;
