import PropTypes from 'prop-types'
import React from 'react'

export const Title = ({text1 , text2}) => {
  return (
    // <div className="inline-flex  gap-2 items-center mb-3">
    //   <p className="text-white">
    //     {text1} <span className="text-green-500 font-medium">{text2}</span>
    //   </p>
    //   <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-amber-50 "></p>
    // </div>
    <div className="flex flex-col items-center justify-center m-10">
        {/* Main heading */}
        <div className="inline-flex gap-2 items-center mb-4">
            <p className="text-white text-4xl sm:text-5xl text-center">
            {text1} <span className="text-green-500 font-medium">{text2}</span>
            </p>
        </div>

        {/* Divider */}
        {/* <p className="w-12 sm:w-16 h-[2px] bg-amber-50 mb-4"></p> */}

        {/* Subheading */}
        <p className="text-gray-200 text-xl text-center">
            Most Loved Prints
        </p>
     </div>
  )
}


Title.propTypes = {
    text1 : PropTypes.string,
    text2 : PropTypes.string,
}
export default Title;