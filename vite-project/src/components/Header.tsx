import Ejiro from "../assets/ejiro.jpg";
import "../index.css";

const Header = () => {
  return (
    <>
      <div className="header-section">
        <h1>
          How i made $150(dollars) in my first two weeks as a online marketer
        </h1>
        <p>By Ejiro osiephri</p>
        <div className="img-header">
          <img src={Ejiro} alt="" />
        </div>
        <h3>
          "In this landing page i would be sharing the secrets and the steps i
          took to become a successful online/affiliate marketer".
        </h3>
      </div>
    </>
  );
};

export default Header;
