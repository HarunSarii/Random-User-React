import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const Card = () => {
  const [userList, setUserList] = useState();

  const userData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res.data.results);
      setUserList(res.data.results);
    });
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <div className="user-profile">
      {userList?.map((user, index) => (
        <div className="card-box">
          <img src={user.picture.medium} alt="picture" className="pic" />
          <p className="name">
            {user.name.title} {user.name.first} {user.name.last}
          </p>
          <img src={email} alt="logo" className="logo" />
          <p className="mail">{user.email}</p>
          <img src={phone} alt="phone" className="logo" />
          <p className="phone">{user.phone}</p>
          <img src={location} alt="location" className="logo" />
          <p className="location">{user.location.city}</p>
          <div className="info">
            <p>Age: {user.dob.age}</p>
            <p>Register Date: {user.registered.date}</p>
          </div>
          <button onClick={userData}>Random User</button>
        </div>
      ))}
    </div>
  );
};
export default Card;
