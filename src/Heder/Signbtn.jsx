import React, { Component } from "react";
import Styles from "./header.module.css";

export default class Signbtn extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={Styles.divforbtn}>
        <button>Login</button>
        <button className={Styles.registr}>Register</button>
      </div>
    );
  }
}
