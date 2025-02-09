import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Liana</em>
          </strong>
          <br />a Software Engineer
        </h1>
        <div className="header__text">
          <p>
            Every challenge is an opportunity for growth, where I transform
            ideas into reality and continuously master new skills to create
            innovative solutions that inspire progress.
          </p>
        </div>
        <a href="#!" className="btn">
          Familiarize yourself with my CV
        </a>
      </div>
    </header>
  );
};

export default Header;
