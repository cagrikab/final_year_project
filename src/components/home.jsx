import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ankmedipollogo from "../assets/ankara-medipol.svg";

export const Home = () => {
  return (
    <div>
      <nav className="bg-slate-50 p-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={ankmedipollogo} alt="" className="align-middle w-40" />
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4 border p-4 bg-gray-750 text-sm rounded-full">
                <li>
                  <Link to="/" className="text-black hover:font-medium">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-black hover:font-medium">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-black hover:font-medium">
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black hover:font-medium">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <ul className="flex space-x-4">
                  <li>
                    {" "}
                    <a href="#" className="text-black">
                      Oturum Aç
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Kayıt Ol
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full h-screen bg-main">
        <div className="bg-slate-50 p-2">

        </div>
      </div>
    </div>
  );
};
