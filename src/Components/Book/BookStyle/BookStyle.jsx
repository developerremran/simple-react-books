import React from 'react';
import { Link } from 'react-router-dom';

const BookStyle = ({ book }) => {
    return (
        <>
            <Link to={`../book/${book.isbn13}`}>
                <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                    <div className='w-68 border-4'>
                        <img src={book.image}></img>
                    </div>
                    <div>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 items-center text-white p-5">
                            <h2 className='tracking-wide'>{book.title}</h2>
                            <p className='mt-20'>{book.subtitle}</p>
                            <p className=' bottom-0 absolute mb-5'>Price: {book.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BookStyle;