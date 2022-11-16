import React from 'react'

function Pagination(props) {

  
  
  return<>
    <div className='w-full flex justify-center mb-5'>
    <button className='md:p-2 py-0.5 px-1 border-solid border-2  border-white bg-gray-900 text-white md:rounded-l-xl rounded-l-lg font-bold hover:bg-gray-500' onClick={props.prevPage} name="prev" >Prev</button>
    <button className='md:p-2 py-0.5 px-1 border-solid border-2 border-white bg-gray-900 text-white font-bold  hover:bg-gray-500'>{props.pagenum}</button>
    <button className='md:p-2 py-0.5 px-1 border-solid border-2 border-white bg-gray-900 text-white font-bold md:rounded-r-xl rounded-r-lg  hover:bg-gray-500' onClick={props.nextPage} name="next" >Next</button>
    </div>
  </>
}

export default Pagination;