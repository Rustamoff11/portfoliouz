import React from "react";
import img from "../../assets/Images/projectimg.png"
const Projects = () => {
  // Example project data with names and URLs
  const projects = [
    { name: "Dice Game", link: "https://rustamoffdice.netlify.app/" },
    { name: "Countires", link: "https://react-countriesuz.netlify.app/" },
    { name: "webFilm", link: "https://nextfilm.netlify.app/" },
    { name: "Hisobchi", link: "https://astounding-mandazi-a8082e.netlify.app/" },
    { name: "Comfy", link: "https://comfyuser-nodirbek359s-projects.vercel.app/" },
    { name: "Full Project...", link: "https://app.netlify.com/teams/rustamoff11/" },
  ];
  return (
    <div
      className="ContactBody flex flex-col justify-center items-center h-screen w-full
      relative bg-cover bg-no-repeat bg-fixed text-white bg-gray-800"
      id="projects"
    >
      <div className="contact-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
        ..//Projects
      </div>

      <div className="flex flex-col gap-10 justify-center items-center w-8/12">
        <div className="contact-sec1 flex flex-wrap justify-center gap-6 pt-6 pb-6 pr-10 pl-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white/10 rounded-lg hover:bg-black/40 p-6 w-56 text-center"
            >
             <img src={img} alt="" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-lime-50 hover:text-amber-400"
              >
                {project.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
