import React, { Component } from "react";
import Styles from "./header.module.css";
let arr = ["Home","About","Blog","Contact"]

export default class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
        <ul className={Styles.navbar}>
          {arr.map((v, i) => {
            return (
              <ul className={Styles.navbarlier} key={i}>
                {v}
              </ul>
            );
          })}
        </ul>
    );
  }
}
