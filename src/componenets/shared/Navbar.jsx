import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "./../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out!");
    } catch (err) {
      console.error(err);
    }
  };

  const menuItems = (
    <>
      <li>
        <a href="/alljobs" className="text-base text-white">All Jobs</a>
      </li>
      <li>
        <a href="/categories" className="text-base text-white">Categories</a>
      </li>
      <li>
        <Link to="/companies" className="text-base text-white">Companies</Link>
      </li>
      <li>
        <Link to="/about" className="text-base text-white">About Us</Link>
      </li>
      <li>
        <a href="/postjob" className="text-base text-white">Post A Job</a>
      </li>
      <li>{user ? <a href="/dashboard" className="text-base text-white">Dashboard</a> : null}</li>
    </>
  );

  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 ${isScrolled || location.pathname !== '/' ? 'bg-green-500' : 'bg-transparent'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-mono font-bold" href="/">
          <span className="text-slate-200">Synced</span>
          <span className="text-green-700">_In</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <a className="btn btn-success text-base text-white mx-2" href="/login">
            Log In
          </a>
        ) : (
          <>
            <Link to="/profile">
              <img src={user.photoURL} alt="" className="w-12 rounded-full" />
            </Link>
            <button className="btn btn-success text-base text-white mx-2" onClick={logout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
