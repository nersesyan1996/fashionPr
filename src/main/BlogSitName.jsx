import React, { Component } from "react";
import styles from "../Heder/header.module.css";
import UserCart from "./UserCart.jsx";
let arr = [
  {
    name: "Bred Pitt",
    image:
      " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP5GJzBRdgts/v1/1200x-1.jpg",
  },
  {
    name: "Bred Pitt",
    image:
      " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP5GJzBRdgts/v1/1200x-1.jpg",
  },
  {
    name: "Bred Pitt",
    image:
      " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP5GJzBRdgts/v1/1200x-1.jpg",
  },
  {
    name: "Bred Pitt",
    image:
      " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP5GJzBRdgts/v1/1200x-1.jpg",
  },
  {
    name: "Bred Pitt",
    image:
      " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP5GJzBRdgts/v1/1200x-1.jpg",
  },
  {
    name: "Bred Pitt",
    image:
      " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP5GJzBRdgts/v1/1200x-1.jpg",
  },
];

export default class BlogSitename extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <p style={{ fontSize: "40px", color: "#56AF58", textAlign: "center" }}>
          Blog{" "}
          <span style={{ color: "black", fontSize: "20px" }}>Site name</span>
        </p>
        <div className={styles.userc}>
          {arr.map((v, i) => {
            return <UserCart num={v} key={i} />;
          })}
        </div>
      </div>
    );
  }
}


