import React from 'react';
import { AiFillFolder } from 'react-icons/ai';

function DownloadCard({downloadcarddata}) {
  return (
    <>
        {downloadcarddata.map((item) => (
            <div className='border bg-white border-2 mx-1 w-100 shadow-sm text-whited-flex flex-row w-100'>
                <div className='text-secondary py-2 mr-auto'>
                    <AiFillFolder className='fs-4 mx-2'/><span style={{fontSize: '13px', fontWeight: '500'}}>{item?.name}</span>
                </div>
            </div>
        ))}
    </>
  )
}

export default DownloadCard