import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";
import img from "./img.png";
import Form from "./Form"
import Donate from "./Donate"
import UserMission from "./UserMission";
import UserDonation from "./UserDonation";
import Trends from "./Trends";
import { HomeIcon } from "../Icons";

const Item = (props) => {
  const { page } = props;
  console.log(page);

  if (page === "homepage") {
    return (
    <div style = {{backgroundColor: '#FFF5A6', color: "black",}} id = "new">
      <div>
      <img src = {img} style={{width: 1449, height: 600}} alt = "Logo"/>
      </div>
      <div style={{alignContent: 'flex-start', textAlign: 'justify'}}>
        <p>
        Crowdfunding is a method of raising funds for a project, business or cause by soliciting small contributions from a large number of people, typically via the internet. Crowdfunding has become increasingly popular in recent years, due in part to the rise of social media and the increasing willingness of people to support causes they care about.
        </p>
        <br />
        <p>
        One of the key benefits of crowdfunding is that it provides an alternative to traditional financing options such as bank loans and venture capital. Crowdfunding can be particularly useful for startups and small businesses that may struggle to secure funding through traditional channels. It can also help to validate an idea or concept by demonstrating demand from potential customers.
        </p>
        <br />
        <p>
        In addition to providing funding, crowdfunding can also be an effective way to build a community around a project or cause. By involving people in the fundraising process, crowdfunding campaigns can generate a sense of ownership and engagement that can be invaluable in building support and momentum for a project.
        </p>
      </div>
    </div>
    );
  } 
  else if(page === "Create Mission"){
    return (
      <div style = {{backgroundColor: '#1b1624', color: "white",}}>
        <div style = {{backgroundColor: '#1b1624', color: "white",}} id="page">
            <Link to="/">
              <button className="btn">
              <HomeIcon style={{ color: "white" }}/>
              </button>
            </Link>
            {page}
          </div>
          <Form  />
        </div>
    );
  }
  else if(page === "Donate"){
    return (
      <div style = {{backgroundColor: '#1b1624', color: "white",}}>
        <div id="page">
            <Link to="/">
              <button className="btn">
              <HomeIcon style={{ color: "white" }}/>
              </button>
            </Link>
            {page}
          </div>
          <br></br>
          <Donate />
        </div>
    );
  }
  else if(page === "Your Missions"){
    return (
      <div style = {{backgroundColor: '#1b1624', color: "white",}}>
        <div id="page">
            <Link to="/">
              <button className="btn">
              <HomeIcon style={{ color: "white" }}/>
              </button>
            </Link>
            {page}
          </div>
          <br></br>
          <UserMission />
        </div>
    );
  }
  else if(page === "Trending Missions"){
    return (
      <div style = {{backgroundColor: '#1b1624', color: "white",}}>
        <div id="page">
            <Link to="/">
              <button className="btn">
              <HomeIcon style={{ color: "white" }}/>
              </button>
            </Link>
            {page}
          </div>
          <br></br>
          <Trends />
        </div>
    );
  }
  else {
    return (
      <div style = {{backgroundColor: '#1b1624', color: "white",}}>
        <div id="page">
          <Link to="/">
            <button className="btn">
              <HomeIcon style={{ color: "white" }}/>
            </button>
          </Link>
          {page}
        </div>
        <br></br>
        <UserDonation />
      </div>
    );
  }
};

export default Item;