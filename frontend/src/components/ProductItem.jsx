import PropTypes from 'prop-types';
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

// export const ProductItem = (props) => {
//   const { currency } = useContext(ShopContext);
//   return (
//     <Link to={`/product/${props.id}`} className="text-black cursor-pointer">
//       <div className="overflow-hidden border rounded-lg p-4 shadow-sm h-[300px]">
//         <img
//           src={props.image[0]}
//           alt=""
//           className="w-full h-48 object-cover mb-2 rounded hover:scale-110 transition ease-in-out duration-500"
//         />
//         <p className="pt-3 pb-1 text-sm">{props.name}</p>
//         <p className="text-sm font-medium">
//           {currency}
//           {props.price}
//         </p>
//       </div>
//     </Link>
//   );
// };

//another way using proptypes - good for large project , robust and runtime validation

export const ProductItem = ({id,image,name,price}) => {
    const {currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-white cursor-pointer'>
        <div className="overflow-hidden border rounded-4xl p-4 shadow-sm  h-[380px] w-[300px]">
            <img src={image[0]} alt="" className="w-full h-70 object-cover mb-2 rounded-3xl hover:scale-105 transition ease-in-out duration-500 "/>
            <p className="pt-3 pb-1 text-sm ">{name}</p>
            <p className="text-sm font-medium">
            {currency}
            {price}
            </p>
        </div>
    </Link>
  )
}

// Add prop validation
ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
};
export default ProductItem;



//Notes
//Template Literals - Template literals (also called template strings) in JavaScript are a way to work with strings in a more powerful and readable way. They're enclosed by backticks (`) instead of quotes.

// Allows embedding variables or expressions directly inside a string using ${}.
// ex - 
// const name = "Nikhil";
// console.log(`Hello, ${name}!`); // Output: Hello, Nikhil!