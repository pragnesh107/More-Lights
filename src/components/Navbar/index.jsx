import './navbar.scss';
import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import dropdownIcon from '../../assets/images/dropdown.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showProducts, setShowProducts] = useState(false);
  const ref = useRef(null);


  const handleShowDropdown = () => {
    setShowProducts(!showProducts);
  }

  useEffect(() => {
    console.log(showProducts);
  }, [showProducts])

  useEffect(() => {
    console.log("effect called");
    const handleClickOutside = (event) => {
      console.log("click outside called");
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(ref.current);
        setShowProducts(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className='sticky top-0 bg-white flex items-center justify-between px-6 gap-x-10 shadow-md'>
      <Link to='/'><div className='flex gap-1 items-center title'><img className='h-20 object-contain' src={logo} />More Lights</div></Link>
      <ul className='flex gap-4'>
        <div ref={ref} tabIndex={1} onBlur={() => setShowProducts(false)}>
          <li className='py-2 px-4 border-b-2 border-amber-800 rounded-md list hover:bg-amber-800 hover:text-white' onClick={handleShowDropdown}>Products <img className='h-8' src={dropdownIcon} /></li>
          {showProducts &&
            <div className='absolute top-20 bg-white shadow-lg'>
              <div className='py-2 px-4 cursor-pointer hover:bg-amber-800 hover:text-white'>Printed Ceiling</div>
              <div className='py-2 px-4 cursor-pointer hover:bg-amber-800 hover:text-white'>Translucent Ceiling</div>
              <div className='py-2 px-4 cursor-pointer hover:bg-amber-800 hover:text-white'>Texture Ceiling</div>
              <div className='py-2 px-4 cursor-pointer hover:bg-amber-800 hover:text-white'>Lacquer Ceiling</div>
              <div className='py-2 px-4 cursor-pointer hover:bg-amber-800 hover:text-white'>3D Form Ceiling</div>
            </div>
          }
        </div>
        <Link to={'/about'} className='py-2 px-4 border-b-2 border-amber-800 rounded-md list hover:bg-amber-800 hover:text-white'><li>About</li></Link>
        <Link to={'/gallery'} className='py-2 px-4 border-b-2 border-amber-800 rounded-md list hover:bg-amber-800 hover:text-white'><li>Gallery</li></Link>
        <li className='py-2 px-4 border-b-2 border-amber-800 rounded-md list hover:bg-amber-800 hover:text-white'>Contact</li>
      </ul>
    </nav>
  )
}
