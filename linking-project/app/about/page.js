import Link from 'next/link';
import React from 'react';

const about = () => {
  return (
    <div>
        <h2 className='text-xl'>This is about page</h2>
        <p className='mt-5'>This project is made by me <Link href='https://github.com/Anish08-CODEZ' passHref className='text-blue-700'>(@anishdubey)</Link></p>
    </div>
  )
}

export default about