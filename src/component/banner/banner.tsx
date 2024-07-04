import "./banner.css";
import profilePict from '../../assets/profile.webp'

const Banner = () => {
  return (
    <section className="banner-container">
      <p className="intro">Hey There,<br/>I'm Pria </p>
      <img src={profilePict} alt="profile" className="profile"/>
    </section>
  );
};

export default Banner;
