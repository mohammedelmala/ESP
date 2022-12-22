import Logo from "../images/logo.jpg";
const Navbar = () => {
  return (
    // navbar
    <nav className="navbar">
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="ESP" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        {/* end of nav-header */}
        {/* nav-links */}
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="/services" className="nav-link">
              services
            </a>
          </li>
          <li>
            <a href="/services" className="nav-link">
              featured
            </a>
          </li>
          <li>
            <a href="/gallery" className="nav-link">
              gallery
            </a>
          </li>
        </ul>
        {/* end of nav-links */}
        {/* nav-icons */}
        <ul className="nav-icons">
          {/* single icon */}
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          {/* end of single icon */}
          {/* single icon */}
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          {/* end of single icon */}
          {/* single icon */}
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
          {/* end of single icon */}
        </ul>
        {/* end of nav-icons */}
      </div>
    </nav>
    // end of navbar
  );
};

export default Navbar;
