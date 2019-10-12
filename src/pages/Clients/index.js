import React, { Component } from "react";
import ProfileSlider from "../../components/ProfileSlider";

class Clients extends Component {
  render() {
    const list = [
      "./img/persons/NoemieBeier/personPhoto/photo-1.jpg",
      "https://images.pexels.com/photos/2963032/pexels-photo-2963032.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "https://images.pexels.com/photos/2963034/pexels-photo-2963034.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "https://images.pexels.com/photos/2963035/pexels-photo-2963035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ];

    const link = "#";

    const name = ["Derec", "Anderson"];

    const role = "American actor and comedian";
    return (
      <div>
        <ProfileSlider list={list} name={name} role={role} link={link} />
      </div>
    );
  }
}

export default Clients;
