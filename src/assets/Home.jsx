import { NavLink } from "react-router-dom";
import Header from "./Header.jsx";

function Home() {
  return (
    <>
      <Header />

      <div className="div4"> <br/>
        <span className="p2"><b>This is </b></span>
        <span className="p3"><b>Carolina! </b></span><br /> <br/>
        <span className="p4">
          <b>
            College of Arts and Science in Columbia, South Columbia.<br/> <br/>
            Infinite possibilities and your promising future start here!
          </b>
        </span>
        <br /><br />

        {/* Use a normal anchor tag for external links */}
        <button className="bu">
          <b>
            <a href="https://weblium.com/templates/college-website-design-229" target="_blank" style={{textDecoration:"none", color:"white"}}>
              Explore Admission
            </a>
          </b>
        </button>
      </div>

      <div className="div5">
        <img src="/clg.jpg" className="img" />
      </div>
    </>
  );
}

export default Home;
