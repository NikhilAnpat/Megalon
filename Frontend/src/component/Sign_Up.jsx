import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [custData, setCustData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustData({
      ...custData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(custData);
    const res = await axios.post("http://localhost:3000/api/login", custData);
    alert(res.data);
    console.log(res);
    navigate("/");
  };

  const custformData = [
    {
      name: "name",
      label: "NAME",
      type: "text",
      placeholder: "enter your name",
    },
    {
      name: "email",
      label: "EMAIL",
      type: "email",
      placeholder: "enter your email",
    },
    {
      name: "password",
      label: "PASSWORD",
      type: "password",
      placeholder: "enter the password",
    },
    {
      name: "contact",
      label: "CONTACT",
      type: "text",
      placeholder: "enter contact",
    },
    {
      name: "address",
      label: "ADRESS",
      type: "text",
      placeholder: "ente address",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {custformData.map((feild, index) => (
        <div key={index}>
          <label>{feild.label}</label>
          <input
            name={feild.name}
            placeholder={feild.placeholder}
            value={custformData[feild.name]}
            onChange={handleChange}
          ></input>
        </div>
      ))}
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignUp;
