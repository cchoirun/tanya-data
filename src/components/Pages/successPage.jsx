import React from 'react';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-700">
      <svg className="w-64 h-64 text-yellow-300 duration-700 animate-bounce" style={{ animationDuration: "3s" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path d="M20 6L9 17l-5-5" stroke="currentColor" />
      </svg>

      <h1 className="mt-8 text-4xl font-bold text-white">Selamat! Pembayaranmu sedang diproses</h1>
      <p className="mt-4 text-lg text-white">
        Kami akan mengonfirmasi pendaftaranmu paling lambat 1X24 Jam dan akan kami konfirmasi melalui email Anda. 
        <br />
        Mari Popie antar ke <a href="/" className="text-yellow-300 hover:underline">halaman utama</a>.
      </p>
    </div>
  );
}

