import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Expertly Guiding You to Your New Home</h1>
          <p>
          At Elite Estate, we are dedicated to helping you find the perfect place to call home. <br />
          With years of experience in the real estate market, our team of professionals is committed to providing 
          exceptional service and expert advice.  We understand that buying or renting a property is a significant 
          decision, and we are here to guide you every step of the way.

          </p>
          <SearchBar />
     
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
