import React, { Component } from "react";
import Styles from "../Heder/header.module.css";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default class Maintext extends Component {
  constructor(props) {
    super();
  }

  render() {
   


    return (
      <div className={Styles.mainfortxt}>
        <span>
          <p>
            <a href="#">Fast</a> Delivery <br /> Healty Food Order Now!
          </p>
        </span>
        <button className={Styles.learnMore}>
          <a href="#">Learn More</a>

          <span>
            <ArrowRightIcon style={{ color: "#56AF58" }}  />
          </span>
        </button>
      </div>
    );
  }
}
