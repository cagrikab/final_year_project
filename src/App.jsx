import "./App.css";
import React, { useState } from "react";
import { Formik } from "formik";

function App() {
  const [confirmPassword, setConfirmPassword] = useState(""); 

  return (
    <div className="flex justify-center items-center h-screen bg-sky-900 ">
      <div className="p-8 bg-white rounded-lg shadow-lg z-30 w-2/6 shadow-cyan-500/50">
        <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "", termsAccepted: false }} // Confirm password ekleyin
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = "Required";
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords must match";
            }
            if (!values.termsAccepted) {
              errors.termsAccepted = "You must accept the terms and conditions";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm text-slate-600">
                  E posta
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your school email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
                />
                {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm text-slate-600">
                  Parolanızı ayarlayın
                </label>
                <input
                  type="password"
                  placeholder="Parolanızı ayarlayın"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
                />
                {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm text-slate-600">
                  Parolanızı doğrulayın
                </label>
                <input
                  type="password"
                  placeholder="Parolanızı doğrulayın"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6"
                />
                {errors.confirmPassword && touched.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
              </div>
              <div className="flex gap-4 items-center">
                <input 
                  type="checkbox" 
                  name="termsAccepted" 
                  id="termsAccepted" 
                  className="cursor-pointer" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  checked={values.termsAccepted} 
                />
                <label htmlFor="termsAccepted" className="text-sm text-slate-600">Kaydolarak Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz.</label>
                {errors.termsAccepted && touched.termsAccepted && <div className="text-red-500">{errors.termsAccepted}</div>}
              </div>
              <button
                className="w-full bg-sky-700 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-300 mt-6"
                type="submit"
                disabled={isSubmitting}
              >
                Şimdi Katıl
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
