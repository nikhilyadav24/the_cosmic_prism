import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { ProductItem } from './ProductItem';

// const projects = [
//   {
//     title: "Project Four",
//     category: "UX",
//     desc: "A project description",
//     image:
//       "https://www.datocms-assets.com/10166/1692051814-trout-creek-stack.webp",
//   },
//   {
//     title: "Project One",
//     category: "Design",
//     desc:
//       "A project description which is longer; consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://www.datocms-assets.com/10166/1692051761-mt-adams-perseids-23-2475.jpg",
//   },
//   {
//     title: "Project Two",
//     category: "Motion",
//     desc: "A project description",
//     image:
//       "https://www.datocms-assets.com/10166/1685323438-columbia-gorge-wildflowers-03.jpg",
//   },
//   {
//     title: "Project Four",
//     category: "UX",
//     desc: "A project description",
//     image:
//       "https://www.datocms-assets.com/10166/1685555719-nootka-lupine-with-mt-hood-gresham-butte.jpeg",
//   },
//   {
//     title: "Project Three",
//     category: "Video",
//     desc:
//       "Foxglove in early summer, Wilczek: one of my notions about the human concept of beauty is that beautiful things are things that evolution has primed us to enjoy and want to come back to and feel pleasure in experiencing.",
//     image:
//       "https://www.datocms-assets.com/10166/1611000738-foxglove-with-sun-glare.jpeg",
//   },
//   {
//     title: "Project Four",
//     category: "UX",
//     desc: "A project description",
//     image:
//       "https://www.datocms-assets.com/10166/1604713099-tamron-85mm-tests-2020-9171.jpeg",
//   },
// ];

const HorizontalScrollPage = () => {

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
      <h1 className="text-2xl font-bold mb-4">Horizontal Scrolling Cards Demo</h1>

      <p className="text-sm mb-6">
        In this example, we are implementing horizontal scrolling cards. These
        cards allow users to scroll left and right to see more content. It's a
        simple, mobile-friendly design that makes use of Tailwind CSS for styling.
      </p>

      {/* Horizontal Scrolling Container */}
      <div className="relative group">
        {/* Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hidden group-hover:block">
          <button
            onClick={() => scroll("left")}
            className="text-3xl text-black bg-white border-2 border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
          >
            &larr;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden group-hover:block">
          <button
            onClick={() => scroll("right")}
            className="text-3xl text-black bg-white border-2 border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
          >
            &rarr;
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto flex space-x-4 py-4 scrollbar-hidden"
        >
          {/* {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.desc}</p>
                <span className="text-xs text-gray-400">#{project.category}</span>
              </div>
            </div>
          ))} */}
          {
                          latestProducts.map((item, index) => (
                              <ProductItem
                               key={index}
                               id={item._id} 
                               image={item.image} 
                               name={item.name} 
                               price={item.price} />
                              // <ProductItem key={index} {...products}/>
                               // another way to pass props to a component is to use the spread operator (<ProductItem key={idx} {...product} />)
                          ))
                      }
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollPage;
