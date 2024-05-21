import { icondata } from "../data/icondata";
import { socialsdata } from "../data/socialsdata";

const handleClick = (url: string) => {
  window.open(url, "_blank");
};

const handleCVDownload = () => {
  const link = document.createElement("a");
  link.href = "src/downloadables/CV.pdf";
  link.download = "Kramaric_CV_Front-End.pdf";
  link.click();
};

const Home = () => {
  return (
    <>
      <div className="article">
        <div className="article__left">
          <p className="article__left__txt article__left__txt--lg">
            Hello there! 👋
          </p>
          <p className="article__left__txt">
            My name is Mario, {""}
            <span className="highlight">Front-End React Developer</span>
          </p>
          <p className="article__left__txt">
            based in <span className="highlight">Osijek, Croatia</span>.
          </p>
          <p className="article__left__txt">
            Let's make digital dreams happen! 🚀✨
          </p>
          <p
            onClick={() => {
              handleCVDownload();
            }}
            className="article__href"
          >
            Download CV
          </p>
        </div>
        <div className="article__right">
          <img className="blob" src="src/assets/hero_photo.jpg" alt="" />
        </div>
      </div>
      <div className="bar-wrapper">
        <h3>Tech Stack |</h3>
        {icondata.map((icon, index) => {
          return (
            <>
              <img
                key={index}
                className="icn"
                src={icon.href}
                alt={icon.label}
              />
            </>
          );
        })}
      </div>
      <div className="section">
        <img
          className="section__img"
          src="https://source.unsplash.com/random/100×100/?developer"
          alt="Unsplash API Photo"
        />
        <div className="section__body">
          <p className="section__section">ABOUT ME</p>
          <h2 className="section__title">Passionate Front-End Developer</h2>
          <p className="section__text">
            My vision is to become an excellent front-end developer through
            continuous learning and improvement. I aim to create intuitive user
            interfaces that set high standards in the industry. Collaborating
            with a talented team, I aspire to contribute to the development of
            new technologies and trends. Through dedication and passion, I
            believe I will be recognized as an expert and inspire others in
            front-end development.
          </p>
          <a className="section__href" href="">
            MORE
          </a>
        </div>
      </div>

      <div className="section">
        <img
          className="section__img"
          src="https://source.unsplash.com/random/100×100/?joystick"
          alt="Unsplash API Photo"
        />
        <div className="section__body">
          <p className="section__section">GAME TESTER</p>
          <h2 className="section__title">Competitive Game Tester (PC)</h2>
          <p className="section__text">
            As a casual game tester, delving into FPS games like XDefiant by
            Ubisoft has been exhilarating, uncovering bugs, and offering
            feedback to enhance gameplay. Testing prototypes and collaborating
            with friends has been rewarding, as we share laughs, strategize, and
            bond over our love for gaming. Each session feels like a new
            adventure, exploring mechanics and witnessing the evolution of ideas
            based on player input. Despite its challenges, the opportunity to
            shape the future of gaming through testing and feedback is deeply
            fulfilling.
          </p>
          <a className="section__href" href="">
            MORE
          </a>
        </div>
      </div>

      <div className="section">
        <img
          className="section__img"
          src="https://source.unsplash.com/random/100×100/?photography"
          alt="Unsplash API Photo"
        />
        <div className="section__body">
          <p className="section__section">AMATEUR PHOTOGRAPHER</p>
          <h2 className="section__title">
            Amateur Photographer and Video Editor
          </h2>
          <p className="section__text">
            Embarking on photography adventures across Osijek and neighboring
            countries has been a captivating journey, capturing diverse
            landscapes and cultures. Whether exploring historic streets or
            majestic mountainscapes, each photo encapsulates a moment frozen in
            time. Some have gained widespread recognition, with several posted
            as wallpapers garnering over 10,000+ views, while others have been
            sold as NFTs, expanding the reach and impact of my photography
            beyond traditional platforms.
          </p>
          <a className="section__href" href="">
            MORE
          </a>
        </div>
      </div>

      <div className="socials-bar">
        <div className="contact-me">
          <h1 className="contact-me__txt">Reach out!</h1>
          <a
            className="contact-me__href"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mario.kramaric13@gmail.com"
          >
            mario.kramaric13@gmail.com
          </a>
        </div>

        <h1 className="socials-bar__text socials-bar__text--lg">
          Check my socials 😉
        </h1>
        <div className="socials-bar__body">
          {socialsdata.map((social, index) => {
            return (
              <>
                <img
                  onClick={() => handleClick(social.url)}
                  key={index}
                  className="icn"
                  src={social.href}
                  alt={social.label}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
