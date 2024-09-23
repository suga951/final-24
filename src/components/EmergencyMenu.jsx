import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import '../layouts/styles.css';

export default function EmergencyMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 z-50" style={{ bottom: '90px' }}>
      <button
        className="bg-cyan-500 rounded-full w-16 h-16 text-white text-2xl flex items-center justify-center border border-black shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '-' : '+'}
      </button>
      <div
        className={`absolute bottom-20 right-0 flex flex-col space-y-2 slide-in ${isOpen ? 'slide-in-open' : ''} shadow-lg`}
      >
        {/* Opción Policía */}
        <a
          href="tel:911"
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-2 rounded-lg flex items-center justify-between w-48 h-12 border border-black shadow-md"
        >
          <span className="flex-grow text-center">Policía 911</span>
          <FaPhoneAlt />
        </a>

        {/* Opción Bomberos */}
        <a
          href="tel:100"
          className="bg-gradient-to-r from-red-400 to-red-600 text-white p-2 rounded-lg flex items-center justify-between w-48 h-12 border border-black shadow-md"
        >
          <span className="flex-grow text-center">Bomberos 100</span>
          <FaPhoneAlt />
        </a>

        {/* Opción SAME */}
        <a
          href="tel:107"
          className="bg-gradient-to-r from-green-400 to-green-600 text-white p-2 rounded-lg flex items-center justify-between w-48 h-12 border border-black shadow-md"
        >
          <span className="flex-grow text-center">SAME 107</span>
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
}
