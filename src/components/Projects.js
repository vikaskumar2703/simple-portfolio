import "../App.css";
import ImageGallery from "react-image-gallery";
import { section } from "../constants/constants";

function Projects() {
  return (
    <div id="projects-section">
      {section.map((section) => {
        return (
          <div className="section" id={section.id}>
            <br></br>
            <h1 className="font-extrabold scale-110 text-gray-500  font-mono text-6xl">
              {section.type}
            </h1>
            {section.projects.map((game) => {
              return (
                <div className="figure">
                  <ImageGallery
                    items={game.images}
                    className="image-gallery"
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                  />
                  <h2 className="font-semibold text-xl">{game.name}</h2>
                  <p>{game.description}</p>
                  <div className="buttons">
                    <button
                      type="button"
                      className=" mx-10 rounded hover:bg-blue-400 hover:border-transparent py-2 px-4 border-2"
                      onclick="location.href = 'www.yoursite.com';"
                      id="myButton"
                    >
                      {" "}
                      See Project{" "}
                    </button>
                    <button
                      type="button"
                      className="rounded hover:bg-blue-400 hover:border-transparent border-2 py-2 px-2"
                      onclick="location.href = 'www.yoursite.com';"
                      id="myButton"
                    >
                      {" "}
                      Source Code{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
