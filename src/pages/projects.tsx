const Projects = () => {
  return (
    <>
      <div className="grid">
        <div className="section">
          <img
            className="section__img"
            src="https://source.unsplash.com/random/100×100/?numbers"
            alt="Unsplash API Photo"
          />
          <div className="section__body">
            <p className="section__section">REACT + TYPESCRIPT</p>
            <h2 className="section__title">Calculator App</h2>
            <p className="section__text">
              Developing a calculator with Vite, React, and TypeScript while
              offering a fast, type-safe, and efficient solution for
              mathematical computations.
            </p>
            <a className="section__href" href="/calculator">
              LIVE DEMO
            </a>
          </div>
        </div>

        <div className="section">
          <img
            className="section__img"
            src="https://source.unsplash.com/random/100×100/?code"
            alt="Unsplash API Photo"
          />
          <div className="section__body">
            <p className="section__section">HTML, CSS, JS</p>
            <h2 className="section__title">CODEPEN PROJECTS</h2>
            <p className="section__text">
              Here I have developed and tested some interesting things that I
              set my sight on, take a sneak peak and let me know if you find
              something interesting!
            </p>
            <a
              target="_blank"
              className="section__href"
              href="https://codepen.io/KramaDev"
            >
              WEBSITE LINK
            </a>
          </div>
        </div>

        <div className="section">
          <img
            className="section__img"
            src="https://source.unsplash.com/random/100×100/?book"
            alt="Unsplash API Photo"
          />
          <div className="section__body">
            <p className="section__section">REACT + TYPESCRIPT</p>
            <h2 className="section__title">FAVOURITE BOOK</h2>
            <p className="section__text">
              I have developed an app that shows you random Law from the book on
              page render
            </p>
            <a
              target="_blank"
              className="section__href"
              href="https://laws-of-power.netlify.app/"
            >
              LIVE DEMO
            </a>
          </div>
        </div>

        <div className="section">
          <img
            className="section__img"
            src="https://source.unsplash.com/random/100×100/?questionmarks"
            alt="Unsplash API Photo"
          />
          <div className="section__body">
            <p className="section__section">REACT + TYPESCRIPT</p>
            <h2 className="section__title">PROJECT APP #4</h2>
            <p className="section__text">CURRENTLY IN PROGRESS</p>
            <a className="section__href" href="/">
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
