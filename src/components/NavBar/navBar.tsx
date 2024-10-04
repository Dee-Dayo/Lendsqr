import React from "react";
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.png';
import bell from '../../assets/bell.png';
import profilePic from '../../assets/profile.png';
import style from './navbar.module.scss';

const NavBar: React.FC = () => {
    return (
        <div className={style.navbar}>
            <img src={logo} alt="logo"/>
            <div className={style.navbar2}>
                <input
                    type="text"
                    placeholder="Search for anything"
                    className={style.input}
                />
                <div className={style.search}>
                    <div className={style.searchBar}>
                        <img src={searchIcon} alt="Search icon"/>
                    </div>
                </div>
            </div>

            <div className={style.navbarRight}>
                <p>Docs</p>
                <img src={bell} alt="Bell icon"/>
                <div className={style.profileContainer}>
                    <img src={profilePic} alt="Profile" className={style.profileImage}/>
                    <p>Adedeji</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;