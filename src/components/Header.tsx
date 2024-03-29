'use client'

import React from "react";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Avatar from 'react-avatar';

export default function Header() {
  return (
    <header >
      <div className="flex flex-col md:flex-row items-center
       p-5 bg-gray-500/10 rounded-b-2xl">

        <div className="absolute top-0 left-0 w-full h-96
         bg-gradient-to-br from-green-400 to-[#0055D1]
         filter
         blur-3xl opacity-50 -z-50"/>

        <img
          src="/Trello New.png"
          alt="logo trello"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0
           object-contain "
        />

        <div className="flex">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md">
            <FaMagnifyingGlass className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Procurar"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" className="" hidden>
              Procurar
            </button>
          </form>

          <Avatar name="Heitor Borba" color='blue' size="50" className="ml-2" round/>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center test-sm font-light pr-5 
        shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
        <HiOutlineUserCircle className="inline-block h-10 w-10 text-[#0055D1] mr-1"/>
            GPT hahahah
        </p>
      </div>
    </header>
  );
}
