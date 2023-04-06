import React, { useEffect, useState } from 'react';
import BookStyle from './BookStyle/BookStyle';

const Book = () => {
    const [books, setBooks]= useState([]);
    useEffect(()=>{
        fetch('https://api.itbook.store/1.0/new')
        .then(res=>res.json()).then(data => setBooks(data.books))
    }
    ,[])
    return (
        <div className='grid md:grid-cols-4 gap-5 grid-cols-1 my-container'>
            {
                books.map(book => <BookStyle book={book} key={book.isbn13}></BookStyle> )
            }
        </div>
    );
};

export default Book;