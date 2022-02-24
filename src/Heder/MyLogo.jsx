import React, { Component } from "react";
import Styles from "./header.module.css";
import MLogo from './img/logo.png'

export default class MyLogo extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={Styles.DFimg}>
        <img src={MLogo} alt="Logo" />
      </div>
    );
  }
}
