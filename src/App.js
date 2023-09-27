import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Projects from "./components/Projects";
import Github from "./components/Github";
import { Breakpoint, BreakpointProvider } from "react-socks";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <header className="h-screen">
          <Navbar />
          <Portfolio />
        </header>
      </BreakpointProvider>
      <Projects />
      <About />
      <Github />
    </div>
  );
}

export default App;
