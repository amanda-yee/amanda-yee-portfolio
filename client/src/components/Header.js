const Header = () => {
    return (
      <header className="flex items-center justify-between h-[75px] w-full bg-[#556B2F]">
        <div className="">
          <ul className="list fade-in-diagonal">
              <li><a href="#about">about</a></li>
              <li><a href="#projects">projects</a></li>
              {/* <li><a href="#film">film</a></li> */}
              <li><a href="#contact">contact</a></li>
          </ul>
        </div>

        <div>
          <a href="#home" className="font-bold fade-in-diagonal">amanda yee</a>
        </div>

      </header>
    );
};

export default Header;
