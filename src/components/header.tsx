import Navigation from "./nav";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <p className="header__text">Krama.dev</p>
        </div>
        <Navigation />
      </header>
    </>
  );
};
export default Header;
