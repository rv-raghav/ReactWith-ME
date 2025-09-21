import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils.js/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // Best place to make API calls
    // console.log("Parent Component Mounted");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span className="font-bold">{loggedInUser}</span>
            )}
          </UserContext.Consumer>
        </div>
        <h1>This is About Page</h1>
        <h2>Version 1.0.0</h2>
        <UserClass name={"Raghav"} location={"Faridabad"} />
      </div>
    );
  }
}

export default About;
