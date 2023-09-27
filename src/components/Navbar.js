import "../App.css";
import { Breakpoint, BreakpointProvider } from "react-socks";
import { navlinks } from "../constants/constants";
const Navbar = () => {
  return (
    <>
      <Breakpoint large up className="navbar ">
        {navlinks.map((link) => (
          <a className="navbar-links" href={link.link}>
            {link.name}
          </a>
        ))}
      </Breakpoint>
      <Breakpoint medium down>
        <div className="navbar1">
          <button
            className="burger-icon text-3xl p-2 mb-2"
            onClick={() => {
              document.getElementById("stack").classList.toggle("visible");
              console.log(document.getElementById("stack").classList);
            }}
          >
            =
          </button>
          <div id="stack" className="stack-menu">
            {navlinks.map((link) => (
              <a className="navbar-links no-margin" href="index.html#games">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Breakpoint>
    </>
  );
};

export default Navbar;
