import Project from "../components/project/Progect";
import "../styles/Projects.css";
import videoFile from "../assets/847-140823881_small (1).mp4";
import MusicPlayer from "../components/MusicPlayer";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <>
      <MusicPlayer />

      <main className="section">
        {/* Video*/}
        <video autoPlay loop muted playsInline className="video-background">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
