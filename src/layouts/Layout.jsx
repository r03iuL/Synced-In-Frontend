
import Navbar from '../componenets/shared/Navbar';
import Footer from '../componenets/shared/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
