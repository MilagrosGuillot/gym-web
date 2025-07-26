import Link from 'next/link';
import React from 'react';

export default function Asesorias() {
  return (
    <div className="w-full flex justify-center py-8 px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-3xl bg-black border-2 border-red-700 rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col items-center shadow-xl">
      <h3 className="font-extrabold text-white mb-4 text-center italic text-3xl">
          ASESORÍAS
        </h3>
        <p className="text-white text-base md:text-lg text-center mb-6 lg:mb-8 lg:text-[var(--text-paragraph)]">
          Asesorías personalizadas con seguimiento 1 a 1<br />
          para llegar al siguiente nivel.
        </p>
        <Link href="/asesorias">
          <button
            className="bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-semibold px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-xl shadow-md transition-all duration-200 text-base md:text-lg lg:text-xl italic"
          >
            ASESORÍAS
          </button>
        </Link>
      </div>
    </div>
  );
}
