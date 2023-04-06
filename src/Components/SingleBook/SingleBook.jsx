import { useState } from 'react';
import { useLoaderData ,useNavigation} from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const SingleBook = () => {
   const spiner = useNavigation();
   if(spiner.state === 'loading' ){
     <>
     return <LoadingSpinner></LoadingSpinner>
     </>
   }


    const [fold,setFold] =useState(true)
    const singleBookS = useLoaderData();
    const {image,title,authors,publisher,year,rating,desc,price} = singleBookS
    return (
        <div className='my-container border-4 border-red-500 flex gap-10'>
         <div className='w-2/4'>
            <img className='w-full' src={image}></img>
         </div>
         <div className='w-2/4 gap-5 flex flex-col justify-center'>
             <div>
                <p className='inline-flex bg-yellow-500 p-2 rounded-full font-semibold'>Brand New</p>
            </div>
             <h2 className='text-4xl font-bold tracking-wide'>{title}</h2>
             <h2>Author: {authors}</h2>
             <p>Publisher : {publisher}</p>
             <p>Rating : {rating}</p>
             <p>Year : {year}</p>
             <p>
               
             {
                fold? ( 
               <>
                <span className='font-semibold'>Description :</span> {desc.substring(0,130)}..
                <span className='text-blue-900 cursor-pointer' onClick={()=> setFold(false)}>read more</span>
               </>
                )
                :
                (
                <>
                 <span className='font-semibold'>Description :</span> {desc}
                 <span  className='text-blue-900 cursor-pointer' onClick={()=> setFold(true)}>read less</span>
                </>
                )
             }   
             
            </p>

               <div>
               <button className='btn bg-orange-500 p-2 text-white font-semibold rounded-md'>Buy Now</button>
                <h3>Price: {price}</h3>
               </div>
         </div>
      
        </div>
    );
};

export default SingleBook;