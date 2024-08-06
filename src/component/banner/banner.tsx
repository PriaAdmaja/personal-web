import "./banner.css";
// import profilePict from "../../assets/profile.webp";
import Profile from "./profile";

const Banner = () => {
  return (
    <section className="banner-container">
      <Profile />
      <div className="greeting">
        <p className="intro">
          Hey There,
          <br />
          I'm Pria
        </p>
        <p className="first-introduce">
          Professional Front End Developer <br />
          from Malang, Indonesia
        </p>
      </div>
    </section>
  );
};

export default Banner;
