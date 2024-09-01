import React from "react";

export default function Experience({ experience }) {
  return (
    <article className="card card__experience ">
      <h2 className="experience__title">Experience</h2>
      {experience?.map((job, index) => (
        <ExperienceCard job={job} key={index} />
      ))}
    </article>
  );
}

function ExperienceCard({ job }) {
  return (
    <div className="experience">
      <img src={job?.logo} alt="logo" className="experience__image" />
      <div className="experience__info">
        <h3
          className="experience__job"
          data-section="experience"
          data-value="first-job-title"
        >
          {job?.title}
        </h3>
        <p className="experience__description">
          <b>{job?.company}</b>
        </p>
        <p className="experience__time">{job?.dates}</p>

        <p
          className="experience__description"
          data-section="experience"
          data-value="first-job-description"
        >
          {job?.description}
        </p>
      </div>
    </div>
  );
}
