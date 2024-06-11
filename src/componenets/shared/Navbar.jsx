import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./../../firebase/firebase.config";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-100">
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
            <li>
              <a href="/alljobs">All Jobs</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/companies">Companies</a>
            </li>
            <li>
              <a href="/postjob">Post A Job</a>
            </li>
            <li>
              {user ? <a href="/dashboard">Dashboard</a> : null}
              </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          Synced In
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/alljobs">All Jobs</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/companies">Companies</a>
          </li>
          <li>
          </li>
          <li>
            <a href="/postjob">Post A Job</a>
          </li>
          <li>
              {user ? <a href="/dashboard">Dashboard</a> : <a/>}
              </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <a className="btn" href="/login">
            Log In
          </a>
        ) : (
          <>
            <Link to="/profile">
              <img src={user.photoURL} alt="" className="w-12 rounded-full" />
            </Link>
            <button className="btn mx-2" onClick={logout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
