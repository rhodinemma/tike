import React from "react";
import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <div className="navbar-brand">Tike</div>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {currentUser ? "Sign out" : "Sign in/up"}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
