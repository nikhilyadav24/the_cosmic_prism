import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { ProductItem } from './ProductItem';
import Title from './Title';

const FeaturedProducts = () => {

        const {products} = useContext(ShopContext);
        // console.log(products);
        const [latestProducts , setLatestProducts] = useState([]);
    
        useEffect(()=>{
            setLatestProducts(products.slice(0,10));
        },[])


  const scrollContainerRef = useRef();

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full p-8">
      {/* Page Header */}
      <Title text1={"Featured"} text2={"Work"} />

      {/* Horizontal Scrolling Container */}
      <div className="relative group">
        {/* Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hidden group-hover:block">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 text-3xl text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition m-2"
          >
            &larr;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden group-hover:block">
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 text-3xl text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition m-2"
          >
            &rarr;
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto flex space-x-4 py-4 scrollbar-hidden"
        >
            {
            latestProducts.map((item, index) => (
                <ProductItem
                key={index}
                id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price} />
                // another way to pass props to a component is to use the spread operator (<ProductItem key={idx} {...product} />)
                // <ProductItem key={index} {...products}/>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
