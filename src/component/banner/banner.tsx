import "./banner.css";
import profilePict from "../../assets/profile.webp";
import brush from "../../assets/brush.webp";

const Banner = () => {
  return (
    <section className="banner-container">
      <img src={brush} alt="brush" className="brush" />
      <img src={profilePict} alt="profile" className="profile" />
      <div className="greeting">
        <p className="intro">
          Hey There,
          <br />
          I'm Pria
        </p>
        <p className="first-introduce">
          Web Developer, <br />
          with more than 1 year experience
        </p>
      </div>
    </section>
  );
};

export default Banner;
