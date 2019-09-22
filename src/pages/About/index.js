import React, { Component } from "react";
import ClientList from "../../components/ClientList";

class About extends Component {
  render() {
    const data = [
      {
        img:
          "https://images.pexels.com/photos/2963033/pexels-photo-2963033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Noemie", "Beier"],
        role: "comedian",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963032/pexels-photo-2963032.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Amos", "Dach"],
        role: "musician",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963034/pexels-photo-2963034.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Keith", "Ruiz"],
        role: "actor",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963035/pexels-photo-2963035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Teresa", "Kuphal"],
        role: "musician",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963035/pexels-photo-2963035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Sherwood", "Will"],
        role: "model",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963033/pexels-photo-2963033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Noemie", "Beier"],
        role: "comedian",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963032/pexels-photo-2963032.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Amos", "Dach"],
        role: "model",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963034/pexels-photo-2963034.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Lincoln", "Glover"],
        role: "musician",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963035/pexels-photo-2963035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Teresa", "Kuphal"],
        role: "actor",
        link: "#"
      },
      {
        img:
          "https://images.pexels.com/photos/2963035/pexels-photo-2963035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: ["Sherwood", "Will"],
        role: "comedian",
        link: "#"
      }
    ];
    return (
      <div>
        <ClientList data={data} />
      </div>
    );
  }
}

export default About;
