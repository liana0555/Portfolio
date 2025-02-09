import "../styles/Contact.css";
import videoFile from "../assets/169951-842348732_small.mp4";
import MusicPlayer from "../components/MusicPlayer";

const Contacts = () => {
  return (
    <>
      <MusicPlayer />
      <main className="background">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item1">
              <h2 className="title-2">Location</h2>
              <p>Germany, Potsdam</p>
            </li>
            <li className="content-list__item2">
              <h2 className="title-2"> WhatsApp</h2>
              <p>
                <a href="Telegram: @Angel_005_rose">+4915754856427</a>
              </p>
            </li>
            <li className="content-list__item3">
              <h2 className="title-2">Email</h2>
              <p className="email">
                <a href="mailto:lianka23005@gmail.com">lianka23005@gmail.com</a>
                ,
                <br />
                <a href="mailto:lianka.9797@mail.ru">lianka.9797@mail.ru</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contacts;
