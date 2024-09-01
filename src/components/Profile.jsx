import Experience from "./Experience";
import HobbiesCard from "./HobbiesCard";
// import { experience, profile, hobbies } from "../lang/profile.json";
import useChangeLang from "../Hooks/useChangeLang";

export default function Profile() {
  const { doc } = useChangeLang();
  const { experience, profile, hobbies } = doc;
  console.log(doc);
  return (
    <section className="column column--left">
      <article className="card card--profile">
        <div className="card__image-container">
          <img src="assets/images/profile2.jpg" alt="" />
        </div>
        <div className="card__header">
          <h2 className="card__title">Enzo Battaglia</h2>
          <p className="card__subtitle" data-section="profile" data-value="rol">
            {profile?.rol}
          </p>
        </div>
        <div className="card__link">
          <a href="https://github.com/EdondjiIbolo">
            <i className="fa-brands fa-github icon"></i>
          </a>
          <a href="mailto:enzombul@gmail.com">
            <i className="fas fa-envelope icon"></i>
          </a>
        </div>
        <div className="card__body">
          <div className="card__link">
            <i className="fas fa-phone "></i>
            <a href="tel:+86 132 56717 532">+86 132 56717 532</a>
          </div>

          <p
            className="card__text"
            data-section="profile"
            data-value="description"
          >
            {profile?.description}
          </p>
        </div>
      </article>
      <Experience experience={experience} />
      <HobbiesCard hobby={hobbies} />
    </section>
  );
}
