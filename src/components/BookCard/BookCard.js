import React, { useState, useEffect } from 'react'

export default function BookCard({ children,saved,removeBook }) {
    
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img className="rounded-t-lg" src={children.image} alt="" />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {children.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {children.description}
          </p>
          <button
            onClick={()=> removeBook(children.id)}
            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600  relative`}
          >
            {saved && (
              <span className="flex h-3 w-3 top-0 -mt-1 -ml-1 left-0 absolute">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
            )}
            {saved ? "delete" : "Save Book"}
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
}
