// import { projects, skills } from "../lang/profile.json";
import ProjectCard from "./ProjectCard";
import useChangeLang from "../Hooks/useChangeLang";

export default function Skills() {
  const { doc } = useChangeLang();
  const { projects, skills, experienceTime } = doc;
  return (
    <section className="column column--rigth">
      {skills?.map((skill, index) => (
        <SkillsCard
          skillItem={skill}
          key={index}
          experienceTime={experienceTime}
        />
      ))}

      {projects?.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </section>
  );
}

export function SkillsCard({ skillItem, experienceTime }) {
  return (
    <article className="card">
      <h2 className="card__title">{skillItem.title}</h2>
      <div className="skills">
        <small>{experienceTime}</small>
        <div className="skills__header">
          <span className="skills__start-level">0</span>
          <span className="skills__start-level">3</span>
        </div>
        <div className="skills">
          {skillItem.skills.map((skill, index) => (
            <div className="skills__item" key={index}>
              <p className="skills__tech">{skill.name}</p>
              <div
                className={`skills__bar skills__bar--${skill.experience}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
