const Header = () => {
    return (
      <header>
        <div className="header">
          <ul className="list fade-in-diagonal">
              <li><a href="#about">about</a></li>
              <li><a href="#projects">projects</a></li>
              {/* <li><a href="#film">film</a></li> */}
              <li><a href="#contact">contact</a></li>
          </ul>
          <a href="#home" className="font-bold fade-in-diagonal">amanda yee</a>
        </div>
      </header>
    );
};

export default Header;
