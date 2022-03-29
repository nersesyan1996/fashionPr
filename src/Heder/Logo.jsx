import React, { Component }  from "react";
import Logo from "./Logo1.png";
import Styles from "./Header.module.css";



export default class HeadLogo extends Component{
    constructor(props){
        super()
    }
    render(){
        return (
              <div className={Styles.forLogo}>
            <img src={Logo} alt="Logo" />
          
          </div>
        );
    }
}