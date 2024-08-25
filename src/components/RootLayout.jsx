// import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  <div>
    <header>
      <nav>
        {/* <h1>Cat Montoya</h1> */}
        <NavLink to="/">home</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/podcast">shop</NavLink>
        <NavLink to="/about">inquire</NavLink>
      </nav>
    </header>
    <main>
        <Outlet />
      </main>
  </div>;
}
