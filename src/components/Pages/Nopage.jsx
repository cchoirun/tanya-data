import React from 'react';

export default function Nopage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <svg className="w-64 h-64 text-white duration-700 animate-bounce "  style={{ animationDuration: "3s" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>

      <h1 className="mt-8 text-4xl font-bold text-white">Maaf, Halaman Tidak Ditemukan</h1>
      <p className="mt-4 text-lg text-white">
        Sepertinya Anda tersesat di galaksi yang salah. 
        <br />
        Mari Popie antar ke <a href="/" className="text-yellow-300 hover:underline">halaman utama</a>.
      </p>
    </div>
  );
}

