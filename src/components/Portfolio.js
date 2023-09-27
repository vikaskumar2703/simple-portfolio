import "../App.css";
import { profileLinks } from "../constants/constants";

const Portfolio = () => {
  return (
    <div className="portfolio-content font-bold font-serif ">
      <p className="">Hello, I'm</p>
      <h1 className="text-9xl">Vikas Kumar</h1>
      <p className=" nickname">call me vicky</p>
      <p className="links-header">AND THIS IS MY RESUME</p>
      <div className="links  flex justify-center pb-20">
        {profileLinks.map((socials) => {
          return (
            <a
              target="_newblank"
              className=" m-4 scale-125 links-logos"
              href={socials.link}
            >
              {socials.img}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
