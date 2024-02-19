import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger py-3">
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          <img src={logo} className="mx-2"/>
          Exposed
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse py-2 py-lg-0" id="navbarNavDropdown">
          <ul className="navbar-nav d-lg-flex justify-content-lg-between align-items-lg-center w-100">
            <li className="nav-item ms-lg-auto">
              <a className="nav-link active text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-lg-5">
              <a className="nav-link text-light" href="#">
                Live
              </a>
            </li>
            <li className="nav-item me-lg-5">
              <a className="nav-link text-light" href="#">
                Yesterday
              </a>
            </li>
            <li className="nav-item me-lg-auto">
              <a className="nav-link text-light" href="#">
                Ended
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
