import Image from "next/image";
import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='fixed w-full h-24 bg-white'>
      <div className='flex justify-between items-center h-full px-20'>
        <Image
          src="./assets/icons/aerolab-logo-1.svg"
          width={150}
          height={150}
          alt="aerolab logo"
        />
        <div className="relative">
          <button className="flex items-center focus:outline-none" onClick={toggleDropdown}>
            <Image
              src="./assets/icons/aeropay-1.svg"
              width={50}
              height={50}
              alt="aeropay logo"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-md rounded-md">
              {/* Contenido del dropdown */}
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}


const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Abrir/Cerrar Menú</button>
      {isOpen ? (
        <div>
          {/* Contenido del menú */}
        </div>
      ) : null}
    </div>
  );
};





export default Navbar;
