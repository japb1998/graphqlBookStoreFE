import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import BooksContainer from '../../components/BooksContainer/BooksContainer';
import { GET_ME } from '../../utils/queries'

const BOOKS = [{
    bookId: "1",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
}, {
    bookId: "2",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
}, {
    bookId: "3",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
},
{
    bookId: "4",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
},
{
    bookId: "5",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
}]
export default function BookSearch() {
    const [existingBooks,setExistingBooks] = useState([])
    const [getMe,{error, loading }] = useLazyQuery(GET_ME)
    function removeBook(bookId){
        var filtered = existingBooks.filter(id => id !== bookId)
        setExistingBooks(filtered);
    }
    async function onSearch(term){

    }
    useEffect(()=>{
        getMe().then(
            response => {
                var savedBooks = response?.data?.getMe?.savedBooks
                setExistingBooks(savedBooks)
            }
        )
    },[])
    return (
      <>
        <div className="w-full flex justify-center mt-2 flex-col md:flex-row items-center">
          <h1 className=" mr-5 text-3xl font-extrabold">Search:</h1>
          <label className="relative block w-1/2 min-w-72">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="ease-in focus:scale-105 duration-150  placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for books..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <BooksContainer
          BOOKS={BOOKS}
          existingBooks={existingBooks}
          removeBook={removeBook}
        />
      </>
    );
}

