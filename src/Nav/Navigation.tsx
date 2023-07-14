'use client';
import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'flowbite-react';

export default function DropdownHeader() {
    const navigate = useNavigate();
  return (
    <Dropdown label="Categories" className='z-50 py-2' >
       <ul className='flex flex-col items-center py-2 gap-2 w-[150px]'>
        
        <li onClick={() => navigate('/filtered/Smartphones')} className='hover:bg-slate-900 hover:text-gray-600 hover:cursor-pointer'>Smartphones</li>
        <li onClick={() => navigate('/filtered/Laptops')} className='hover:bg-slate-900 hover:text-gray-600 hover:cursor-pointer'>Laptops</li>
        <li onClick={() => navigate('/filtered/TV')} className='hover:bg-slate-900 hover:text-gray-600 hover:cursor-pointer'>TV</li>
        </ul>

    </Dropdown>
  )
}