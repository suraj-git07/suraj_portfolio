import Image from 'next/image';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowUpRightFromSquareIcon, NotebookTextIcon } from 'lucide-react';
import Link from 'next/link';

interface CardInterface {
  Title: String;
  Img: any;
  link:any;
  code:any;
  Description:String;
}

const Card: React.FC<CardInterface> = ({Img,Title,Description,link,code}) => {

  return (
    <>
    <div
      className={`card bg-[#d8d8d8] dark:bg-[#262627] rounded-xl m-auto sm:w-5/12 md:w-[300px] md:mx-auto transition-all duration-500 py-3 my-5 shadow-xl justify-between flex flex-col`} 
    >
      <div>
      <div className='rounded-xl w-11/12 m-auto border  overflow-hidden '>
     <Image height={10000} width={10000} src={`/Projects/${Img}`} alt='' className='bg-white w-fit fill '/> 
      </div>
      <div className='px-4 py-6'>
      <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{Title}</h1>
      <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>{Description}</p>
      </div>
      </div>
        
        <div>
      <div className="flex justify-start px-4">
        <div className='flex items-end h-[100%] '>
        {link.length < 2 ? "" : 
        <Link href={link}  target='_blank'>
        <Button size={"sm"}>Try it out <ArrowUpRightFromSquareIcon className='h-4 w-4 mx-2'></ArrowUpRightFromSquareIcon></Button>
        </Link>
        }
        {code.length < 2 ? "" : 
        <Link href={code}  target='_blank'>
        <Button size={"sm"} variant={"link"}>GitHub <ArrowUpRightFromSquareIcon className='h-4 w-4 mx-2'></ArrowUpRightFromSquareIcon></Button>
        </Link>
        }
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Card;
