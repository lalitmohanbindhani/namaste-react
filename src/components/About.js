import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
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
