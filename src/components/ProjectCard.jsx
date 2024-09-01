import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="card card__project">
      <div className="card__image-container">
        <img src={project.image} alt={project.name} className="card__image" />
      </div>
      <div className="project">
        <div className="project__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project_tag">
              {tag}
            </span>
          ))}
        </div>
        <h2
          className="card__title"
          data-section="projects"
          data-value="twelve-project-title"
        >
          {project.title}
        </h2>
        <p
          className="card__text"
          data-section="projects"
          data-value="twelve-project-description"
        >
          {project.description}
        </p>

        <div className="buttons">
          <a
            href={project.demo}
            className="button button-primary"
            target="blank"
          >
            DEMO
          </a>
          {project?.portfolio && (
            <a href={project.portfolio} className="button button-ghost">
              CODE
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
