function Header() {
  return (
    <div>
      <div className="container">
        <header className="border d-flex flex-wrap align-items-center justify-content-center justify-content-evenly py-3 mb-4 ">
          <div className="col-md-8 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <strong>LOGO</strong>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-right mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="col-md-1 text-end">
            <button type="button" className="btn btn-dark b-radius">
              Login
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
