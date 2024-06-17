import React, {useState} from "react";
import { motion } from "framer-motion"; // Jika Anda ingin menambahkan animasi
import loginImage from "../../assets/About.png"; // Ganti dengan path gambar Anda

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Bagian Kiri (Gambar) */}
      <div className="flex items-center justify-center w-1/2">
        <img src={loginImage} alt="Login" className="object-contain w-3/4 rounded-lg h-3/4" />
      </div>

      {/* Bagian Kanan (Form Login) */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <h2 className="mb-4 text-3xl font-bold">Masuk</h2>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button" // Ubah menjadi "submit" jika Anda ingin menangani submit form
            >
              Masuk
            </button>
            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
              Lupa kata sandi?
            </a>
          </div>
        </form>

        <div className="mt-8">
          <p className="text-center text-gray-500">Atau masuk dengan</p>
          <div className="flex mt-4 space-x-4">
            <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
              Google
            </button>
            <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-800">
              Facebook
            </button>
            <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-900">
              Apple
            </button>
          </div>
          <div className="mt-8">
          <p className="text-center text-gray-500">Belum punya akun? <a href="/register" className="text-blue-600 hover:text-blue-800 hover:underline">Daftar</a></p>
          {/* <a className="inline-block mt-2 text-sm font-bold text-green-500 align-baseline hover:text-green-800" href="/login">
            Masuk
          </a> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
