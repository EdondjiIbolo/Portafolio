export default function HobbiesCard({ hobby }) {
  console.log(hobby);
  return (
    <article className="card card--hobbies card_animated">
      <h2 className="card--hobbies">Hobies</h2>
      <div className="card__image-container">
        <img src="assets/images/hobbie.jpg" alt="hobbie image" />
      </div>

      <p
        className="card__text"
        data-section="hobbies"
        data-value="first-hobbies-description"
      >
        {hobby?.description}
      </p>
    </article>
  );
}
