import './AboutTheSite.css'
import image from '../../images/AboutTheSite/image.svg'

function AboutTheSite() {
  return (
    <div className="AboutTheSite">
      <article className="AboutTheSite__paragraph">
        <h2 className="AboutTheSite__paragraph-title">
          More than just shorter links
        </h2>
        <p className="AboutTheSite__paragraph-description">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a
          className="AboutTheSite__link"
          href="https://www.google.com/"
          target="blank"
        >
          Get Started
        </a>
      </article>
      <img className="AboutTheSite__image" src={image} alt="imagee" />
    </div>
  )
}

export default AboutTheSite
