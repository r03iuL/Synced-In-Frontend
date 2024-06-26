import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';

export default function Dashboard() {

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out!");
      navigate("/");

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-50 min-h-full bg-base-200 text-base-content flex-col justify-between">
          {/* Sidebar content here */}
          <div>
          <li>
            <Link to="manage" className="btn bg-green-500 mb-5">Manage Jobs</Link>
          </li>
          <li>
            <Link to="" className="btn bg-green-500 mb-5" >Create New Job</Link>
          </li>
          </div>
          <div className="">
            <li><Link to='/' className="btn bg-green-500 mb-5">Home</Link></li>
            <li><button onClick={logout} className="btn bg-green-500 mb-5" >Log Out</button></li>
            
          </div>
        </ul>
      </div>
    </div>
  );
}
