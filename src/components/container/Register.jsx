import React from "react";
import { motion } from "framer-motion"; // Jika Anda ingin menambahkan animasi
import registerImage from "../../assets/About.png"; // Ganti dengan path gambar Anda

const RegisterPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Bagian Kiri (Gambar) */}
      <div className="flex items-center justify-center w-1/2">
        <img src={registerImage} alt="Register" className="object-cover w-3/4 rounded-lg h-3/4" />
      </div>

      {/* Bagian Kanan (Form Registrasi) */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <h2 className="mb-4 text-3xl font-bold">Daftar</h2>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Kata Sandi
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
              type="button" // Ubah menjadi "submit" jika Anda ingin menangani submit form
            >
              Daftar
            </button>
          </div>
        </form>

        <div className="mt-8">
          <p className="text-center text-gray-500">Sudah punya akun?</p>
          <a className="inline-block mt-2 text-sm font-bold text-green-500 align-baseline hover:text-green-800" href="/login">
            Masuk
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
