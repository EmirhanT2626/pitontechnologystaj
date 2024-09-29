"use client";
import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa6";
import { books } from "../consts/books";

const Page = () => {
  const params = useSearchParams()
  const query = params.get('categoryId') as string
const findArray=books.find(value=> value.categoryId==+query)

  return (
    <div className="flex flex-col px-4 md:px-8 lg:px-16">

      <Link href="/" className="pt-14 flex items-center">
        <div className="pl-0">
          <FaAngleLeft />
        </div>
        <span className="text-xl font-bold pl-[5px]">Home Page</span>
      </Link>

      <div className="flex justify-center items-center pt-2.5 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {findArray?.items.map(book => (
            <Link key={book.id} href={`/bookdetails/${book.id}`} className="bg-violet-100 shadow-none rounded-lg overflow-hidden">
              <div className="relative">
                <Image 
                  className="w-full h-[400px] object-cover" 
                  src={`${book.img}`} 
                  alt={book.name} 
                  width={270} 
                  height={400} 
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{book.name}</h3>
                <p className="text-gray-500 font-semibold">{book.author}</p>
                <p className="text-purple-600 font-bold mt-2 text-xl">{book.price} $</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
