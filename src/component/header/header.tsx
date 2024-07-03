import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <p className="rock-salt-regular main-head">Pria</p>
      <tr className="menu-group ">
        <td className="menu-header">
          <div className="left-border" />
          <p>ABOUT ME</p>
          <div className="right-border" />
        </td>
        <td className="menu-header">
          <div className="left-border" />
          <p>EXPERIENCE</p>
          <div className="right-border" />
        </td>
        <td className="menu-header">
          <div className="left-border" />
          <p>PROJECTS</p>
          <div className="right-border" />
        </td>
        <td className="menu-header">
          <div className="left-border" />
          <p>CONTACT ME</p>
          <div className="right-border" />
        </td>
      </tr>
    </header>
  );
};

export default Header;
