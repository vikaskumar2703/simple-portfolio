import "../App.css";
import { about } from "../constants/constants";
import image from "../assets/images/eberhard-grossgasteiger-NvesrDbsrL4-unsplash.jpg";
import resumePdf from "../assets/pdf/resume.pdf";
function About() {
  return (
    <div className="About flex flex-col">
      <h1 className="text-4xl underline text-white font-mono font-bold">
        About
      </h1>
      <div className="">
        <img className="about-img" src={image}></img>
        <p className="text-white">{about.desc}</p>
        <a
          href={resumePdf}
          download="Resume-Vikas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-gray-400 p-1 rounded-md z-2 drop-shadow-md text-white border-2"
            type="button"
          >
            {" "}
            DOWNLOAD CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
