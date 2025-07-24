import React from "react";
import User from "./User";
import UserClass from "./UserClass";

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ - "React lifecycle method diagram"

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {}
  render() {
    //console.log("Parent Render");
    return (
      <div className="user-card">
        <h1>About Class</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First "} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
