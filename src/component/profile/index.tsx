import "./profile.css";
import avatar from "../../assets/picofme (3).webp";

const Profile = () => {
  return (
    <section className="profile-container">
      <section className="content-profile">
        <div>
          <div className="img-cover">
            <img src={avatar} alt="photo" />
          </div>
        </div>
        <div className="about-me">
          <p className="paragraph">
            I'm a software developer with a background in agriculture. I started
            learning programming languages in July 2022 and joined the Fazztrack
            Software Development Bootcamp in February 2023. Since then, I have
            been continuously learning and forging my path to becoming a
            professional coder.
          </p>
          <p className="paragraph">
            My primary role is as a frontend developer, where I use JavaScript
            and TypeScript as my main languages, along with React.js and Next.js
            as my frameworks. Additionally, I am familiar with several other
            technologies, including React Native, Node.js, Express.js, and
            PostgreSQL.
          </p>
          <p className="paragraph">
            I am committed to improving my skills and learning something new
            every day. I believe that continuous growth and adaptation are key
            to success in the tech industry, and I strive to stay updated with
            the latest trends and best practices.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Profile;
