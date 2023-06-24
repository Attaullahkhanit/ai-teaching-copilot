import React from 'react';
import { BsFiletypePpt } from 'react-icons/bs';
import { AiFillFolder } from 'react-icons/ai';

function DocumentFileCard() {
  return (
    <>
        <div className='border bg-white border-1 rounded w-100 h-auto cursor-default'>
            <div className='w-100 fs-1 d-flex'style={{height: '150px'}}>
                <BsFiletypePpt className="text-warning m-auto" size={70}/>
            </div>
            <div className='border border-2 text-whited-flex flex-row w-100'>
                <div className='text-secondary py-2 mr-auto'>
                    <BsFiletypePpt className='text-warning fs-4 mx-2'/><span style={{fontSize: '13px', fontWeight: '500'}}>Centeral Processing Unit P...</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DocumentFileCard