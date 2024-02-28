// importing styling
import "../../styles/navbar.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import pinterest from "../../assets/pinterest.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo/Name
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Logo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body " id="navbarsExample07">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Work with us
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img
                  src={pinterest}
                  className="built navbar-brand logo"
                  alt="pinterest logo"
                />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img
                  src={facebook}
                  className="built navbar-brand logo"
                  alt="pinterest logo"
                />
              </a>{" "}
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img
                  src={instagram}
                  className="built navbar-brand logo"
                  alt="pinterest logo"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
