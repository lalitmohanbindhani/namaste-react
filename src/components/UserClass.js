import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("Set Interval Called");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component did Update Called");
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Component will unmount called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Child Rendered");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: bindhanilalitmohan@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
