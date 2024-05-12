import "./App.css";
import React, { useState } from "react";
import { Formik } from 'formik';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    // Giriş butonuna tıklamada yapılacak işlemler
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Buraya giriş işlemleri ekleyebilirsiniz
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-900 ">
      <div className="p-8 bg-white rounded-lg shadow-lg z-30 w-2/6 shadow-cyan-500/50">
        <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-sm text-slate-600">E posta</label>
          <input
            type="email"
            placeholder="Enter your school email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-sm text-slate-600">Parolanızı ayarlayın</label>
          <input
            type="password"
            placeholder="Parolanızı ayarlayın"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-sm text-slate-600">Parolanızı doğrulayın</label>
          <input
            type="password"
            placeholder="Parolanızı doğrulayın"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6"
          />
        </div>

        <div className="flex gap-4 items-center">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          <p className="text-sm text-slate-600">Kaydolarak Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz.</p>
        </div>
        
        
        <button
          onClick={handleLogin}
          className="w-full bg-sky-700 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-300 mt-6"
        >
          Şimdi Katıl
        </button>
      </div>
    </div>
  );
}

export default App;
