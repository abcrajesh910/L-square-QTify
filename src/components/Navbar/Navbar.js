import React from "react";
// import Logo from "../Logo/Logo";
import LogoImage from "../../assets/logo.png";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

// function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <Logo />
//       <Search placeholder="Search a song of your choice" />
//       <Button>Give Feedback</Button>
//     </nav>
//   );
// }

// export default Navbar;




export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
                 <Search placeholder="Search a song of your choice" />
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}