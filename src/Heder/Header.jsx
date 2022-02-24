import React,{Component} from "react";
import Styles from "./header.module.css";
import MyLogo from "./MyLogo.jsx";
import NavBar from "./NavBar.jsx";
import Signbtn from "./Signbtn.jsx";


export default class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header >
        <section >
          <div className={Styles.navdiv}>
            <MyLogo />
            <NavBar />
            <Signbtn />
          </div>
        </section>
      </header>
    );
  }
}