import React from "react";
import Styles from "./Header.module.css";

let arr = ["Home","About","Blog","Homepage"]

export default function App() {
  return (
      <div>
         <ul className={Styles.navBar}>
         {arr.map((v,i)=>
         {return <li  key={i}>{v}</li>})
         }
         </ul>
      </div>
 
  );
}

// import React from "react";

// export default class FirstLesson extends React.Component {
//   constructor(props) {
//     super();
//   }

//   render() {
//     return (
//       <>
//         <div className="topnav">
//           <a className="active" href="#home">
//             Home
//           </a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//           <div className="search-container">
//             <form action="/action_page.php">
//               <input type="text" placeholder="Search.." name="search" />
//               <button type="submit">
//                 <i className="fa fa-search"></i>
//               </button>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
