const Header = () => {
    return (
      <header>
        {/* <div className="under-construction">
          FYI - WEBSITE IS CURRENTLY UNDER CONSTRUCTION
        </div> */}
        <div className="header">
          <ul className="list fade-in-diagonal">
              {/* <li><a href="#home">home</a></li> */}
              <li><a href="#projects">projects</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#film">film</a></li>
              <li><a href="#contact">contact</a></li>
          </ul>
          <a href="#home" className="font-bold fade-in-diagonal">amanda yee</a>
        </div>
      </header>
    );
};

export default Header;
