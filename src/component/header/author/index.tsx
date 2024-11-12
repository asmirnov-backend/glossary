import "./index.css";

const avatar = require("../image/avatar.jpeg");
const logo = require("../image/logo.png");

export const Author: React.FC = () => {
  return (
    <div className="navigation-logo-avatar-area">
      <div className="navigation-logo">
        <img className="navigation-logo-icon" src={logo} alt="logo" />
      </div>

      <div className="navigation-avatar">
        <img className="navigation-avatar-icon" src={avatar} alt="avatar" />
        Смирнов Андрей
      </div>
    </div>
  );
};
