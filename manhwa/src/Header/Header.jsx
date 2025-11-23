import { useState , useContext } from "react";
import { MenuContext } from "../context/ToggleContext";

function Header(){

    const {openToggle , toggleMenu , close} = useContext(MenuContext);

    return(
        <>
            <div className={`overlay ${openToggle ? 'active' : ''}`}
                onClick={close}
            ></div>
            <header>
                <div className="container">
                    <div className="header-content">
                        <button className="mobile-menu-btn" 
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="logo">
                            <i className="fas fa-book-open"></i>
                            <span>ManhwaTracker</span>
                        </div>
                        <div className="search-bar">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Search for manhwa..."/>
                        </div>
                        <div className="user-profile">
                            <div className="avatar">K</div>
                            <span>Kaiden-A</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;