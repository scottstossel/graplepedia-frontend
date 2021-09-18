import logo from "../images/1200px-Wrestling_pictogram.svg.png";
import "./HomeView.css";

const HomeView = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="heading">
          {/* <img src={logo} alt="logo" style={{ width: "80px", marginTop: '-10px' }} /> */}
          <h1>Grapplepedia</h1>
        </div>
        <h5>Welcome to Grapplepedia!</h5>
        <p id="home-p">
          Here you will find a collection of BJJ/wrestling techniques and
          positions with links to videos in order to improve your game. As the
          sports continue to grow, so will this website. If there is a technique
          or position not currently here, please do not hesitate to complete the
          'Add Position' or 'Add Technique' form in order to add it.{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeView;
