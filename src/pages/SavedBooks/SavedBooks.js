import React from 'react'
import BooksContainer from '../../components/BooksContainer/BooksContainer';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import BookShell from '../../components/BookShell/BookShell';

export default function SavedBooks() {
    const {data,loading,error} = useQuery(GET_ME);
    console.log(data)
    if(loading)(<p className='text-lg text-red-500'>Loading ...</p>)
    return (

        <main className="bg-slate-200 h-screen">
          <BookShell BOOKS={data?.getMe?.savedBooks} />
        </main>
    );
}
