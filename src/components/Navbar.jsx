import React from "react";
import "@material/web/tabs/secondary-tab.js";
import "@material/web/tabs/tabs.js";

function Navbar() {
    return (
        <nav className="nav">
            <div className="navbarHeader">
                <span className="navbarLogo">apurvakumar17</span>
                <md-tabs className="navbarTabs block">
                    <md-secondary-tab ><a href="/#about">About</a></md-secondary-tab>
                    <md-secondary-tab><a href="/#experience">Experience</a></md-secondary-tab>
                    <md-secondary-tab>Skills</md-secondary-tab>
                    <md-secondary-tab>Education</md-secondary-tab>
                    <md-secondary-tab>Projects</md-secondary-tab>
                </md-tabs>
            </div>
            <hr></hr>
        </nav>
    );
}

export default Navbar;