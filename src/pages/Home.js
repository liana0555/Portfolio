import Header from "../components/header/Header";
import "../styles/main.css";
import MusicPlayer from "../components/MusicPlayer";
const Home = () => {
  return (
    <>
      <MusicPlayer />

      <Header />

      <main className="">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>HTML, CSS, JavaScript, React</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>JavaScript, MySQL, Python </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
