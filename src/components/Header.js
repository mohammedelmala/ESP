import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="hero">
        <div className="hero-banner">
          <h1>Emiratis Safety and Protection</h1>
          <p>
            Emiratis Safety and Protection (ESP) is UAE based company that
            provide end to end quality solutions to its customers, Specialized
            in Security, Life safety and ELV Systems.
          </p>
          <a href="#featured" className="btn hero-btn scroll-link">
            explore
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
