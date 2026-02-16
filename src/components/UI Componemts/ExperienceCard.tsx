import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Position {
  role: string;
  type: string;
  description: string;
}

interface ModalInterface {
  img: any;
  companyName: String;
  role: String;
  description: String;
  timePeriod: String;
  positions?: Position[];
}

const Modal: React.FC<ModalInterface> = ({
  img,
  companyName,
  role,
  description,
  timePeriod,
  positions,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasPositions = positions && positions.length > 0;

  return (
    <>
      <div className="flex relative right-8 lg:w-full w-[93vw] text-xs my-5">
        <Image 
          data-aos="zoom-in" 
          data-aos-anchor-placement="top-bottom" 
          src={img} 
          height={100} 
          width={100} 
          alt="ll" 
          className="rounded-full border-4 w-14 h-14 bg-[#f5f5f5] dark:bg-[#1e1e1f]"
        />
        <div 
          data-aos="fade-left" 
          data-aos-anchor-placement="top-bottom" 
          className={`flex flex-col ml-3 py-4 w-10/12 bg-[#d8d8d8] dark:bg-[#262627] px-2 lg:px-6 rounded-xl ${hasPositions ? 'cursor-pointer' : ''}`}
          onClick={() => hasPositions && setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between my-2">
            <div className="flex flex-col w-7/12">
              <h1 className="text-lg font-[700]">{companyName}</h1>
              <h2 className="text-sky-600 dark:text-sky-500 lg:font-[600] lg:tracking-[0.3px]">{role}</h2>
            </div>
            <div className="flex items-center gap-2">
              <p>{timePeriod}</p>
              {hasPositions && (
                <div className="text-sky-600 dark:text-sky-500">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              )}
            </div>
          </div>
          
          {!hasPositions && (
            <p className="px-2 tracking-[0.5px] text-gray-700 dark:text-gray-400">{description}</p>
          )}
          
          {hasPositions && !isExpanded && (
            <p className="px-2 tracking-[0.5px] text-gray-700 dark:text-gray-400">{description}</p>
          )}
          
          {hasPositions && isExpanded && (
            <div className="mt-2 space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="px-2 py-3 bg-[#c8c8c8] dark:bg-[#1e1e1f] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-[600] text-sky-600 dark:text-sky-500">{position.role}</h3>
                    <span className="text-xs px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 rounded">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-xs tracking-[0.5px] text-gray-700 dark:text-gray-400">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
