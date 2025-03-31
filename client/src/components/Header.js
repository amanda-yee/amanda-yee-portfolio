const Header = () => {
    return (
      <header className="fixed top-0 left-0 w-full flex items-center justify-between py-6 w-full">
        <div className="ml-[5%]">
          <ul className="list fade-in-diagonal">
              <li><a href="#about">about</a></li>
              <li><a href="#projects">projects</a></li>
              {/* <li><a href="#film">film</a></li> */}
              <li><a href="#contact">contact</a></li>
          </ul>
        </div>

        <div className="mr-[5%]">
          <a href="#home" className="font-bold fade-in-diagonal">amanda yee</a>
        </div>

      </header>
    );
};

export default Header;
