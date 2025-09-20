import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://dummyimage.com/600x400/000/fff",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rv-raghav");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="w-64 m-4 p-6 border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition bg-white text-center">
        <img
          src={avatar_url}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mb-4 shadow-md"
        />
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="text-sm text-gray-600">{location}</h3>
        <h4 className="text-blue-600 mt-2">@rv-raghav</h4>
      </div>
    );
  }
}

export default UserClass;
