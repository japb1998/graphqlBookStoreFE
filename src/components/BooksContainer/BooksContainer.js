import React from 'react'
import BookCard from '../BookCard/BookCard'
import './index.css'

export default function BooksContainer({ BOOKS , existingBooks, removeBook}) {
    
    function isSaved(bookId){
        return existingBooks?.includes(bookId)
    }
    
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
          Book Results
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {BOOKS.map((book) => (
            <BookCard key={book.bookId} saved={isSaved(book.bookId)} removeBook={removeBook}>
              {book}
            </BookCard>
          ))}
        </div>
      </div>
    );
}
