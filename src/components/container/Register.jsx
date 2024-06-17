import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion"; // Jika Anda ingin menambahkan animasi
import registerImage from "../../assets/About.png"; // Ganti dengan path gambar Anda
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: name
        });
      }
      // console.log("User registered successfully!");
      
      toast.success("Registrasi Kamu Berhasil!",{
        position: "top-center",
      });
      window.location.href = ('\login');
    }catch(error){
      console.log(error.message);
      toast.error(error.message,{
        position: "top-center",
      });
    }

  }

  return (
    <div className="flex flex-col h-screen pt-20 bg-gray-100 md:flex-row">
      {/* Bagian Kiri (Gambar, Sembunyi di Layar Kecil) */}
      <div className="items-center justify-center hidden w-1/2 md:flex">
        <img src={registerImage} alt="Register" className="object-contain w-3/4 rounded-lg h-3/4" />
      </div>

      {/* Bagian Kanan (Form Registrasi) */}
      <div className="flex flex-col items-center justify-center w-full p-8 md:w-1/2"> 
        <h2 className="mb-4 text-3xl font-bold">Daftar</h2>

        <form className="w-full max-w-sm" onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              autoComplete="given-name"
              placeholder="Masukkan nama lengkap Anda"
              onChange={(e) => setName(e.target.value)}
              required
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
              autoComplete="email"
              placeholder="Masukkan email Anda"
              onChange={(e) => setEmail(e.target.value)}
              required
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
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
              type="submit" // Ubah menjadi "submit" jika Anda ingin menangani submit form
            >
              Daftar
            </button>
          </div>
        </form>

        <div className="mt-8">
          <p className="text-center text-gray-500">Sudah punya akun? <a href="/login" className="text-green-600 hover:text-green-800 hover:underline">Masuk</a> </p>
          {/* <a className="inline-block mt-2 text-sm font-bold text-green-500 align-baseline hover:text-green-800" href="/login">
            Masuk
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
