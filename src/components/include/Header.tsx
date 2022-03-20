import React from "react";

function Header() {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3">105제 아이템 확인</a>
      <div className="ms-auto">
        <a href="/CreditCheck" className="navbar-brand ps-3"></a>
        <a className="navbar-brand ps-3"></a>
      </div>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="#!">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Activity Log
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
