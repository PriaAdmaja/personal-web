import "./banner.css";
import profilePict from "../../assets/profile.webp";
import brush from "../../assets/brush-resize.webp";
import FadeInWhenVisible from "../../lib/motion/FadeInWhenVisible";
import { useState } from "react";

const Profile = () => {
  const [showAvatar, setShowAvatar] = useState(false);
  return (
    <section>
      <FadeInWhenVisible>
        <img
          src={brush}
          alt="brush"
          className="brush"
          onLoad={() => setTimeout(() => setShowAvatar(true), 1000)}
        />
      </FadeInWhenVisible>
      {showAvatar && (
        <FadeInWhenVisible>
          <img src={profilePict} alt="profile" className="profile" />
        </FadeInWhenVisible>
      )}
    </section>
  );
};

export default Profile;
