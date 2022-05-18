import React from 'react'
import BooksContainer from '../../components/BooksContainer/BooksContainer';


const BOOKS = [{
    bookId: "1",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
},{
    bookId: "2",
    authors: ["String"],
    description: "String",
    image: `${process.env.PUBLIC_URL}/233-2332677_image-500580-placeholder-transparent.png`,
    link: "String",
    title: "String"
},{
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
export default function SavedBooks() {
  return (
    <main className="bg-slate-200 h-screen"><BooksContainer  BOOKS={BOOKS}/></main>
  )
}
