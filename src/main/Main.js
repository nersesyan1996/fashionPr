import React, { Component } from "react";
import Styles from "../Heder/header.module.css";
import Maintext from "./Maintext.jsx";
import BlogSitename from "./BlogSitName.jsx";


export default class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <main>
        <div className={Styles.mainDiv}>
          <Maintext />
        </div>
        <div className={Styles.mainDiv2}>
          <BlogSitename />
      
        </div>
      </main>
    );
  }
}
