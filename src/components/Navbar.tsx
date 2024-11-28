import Nav from "../models/nav";
import Button from "../models/button";
import ButtonComponent from "./UI/ButtonComponent";
import { useEffect, useContext } from "react";

import {ThemeContext} from "../store/theme-context";
import { Page } from "../store/constants";

const Navbar : React.FC<Nav> = ({currentPage, onNavChange}) => {

    useEffect(() => {
        setActiveClass();
    });

    const onClickNavBarBtn = (event: React.MouseEvent) => {
        event.preventDefault();
        currentPage = event.currentTarget.id;
        onNavChange(currentPage);
        setActiveClass();
        setInSession();
    };

    // set active class
    const setActiveClass = () => {
        removeActiveClass();
        document.getElementById(currentPage)?.classList.add("active");
    };


    // remove active class
    const removeActiveClass = () => {
        var elements = document.getElementsByClassName("left-nav-btn");
        if(elements.length > 0) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("active");
            }
        }
    }

    // set in session 
    const setInSession = () => {
        sessionStorage.removeItem("active-left-btn");
        sessionStorage.setItem("active-left-btn", currentPage);
    }

    // obtain current theme
    const {isDarkTheme} = useContext(ThemeContext);
    const btnClasses = isDarkTheme ? "list-group-item list-group-item-action list-group-item-dark left-nav-btn btn-dark": "list-group-item list-group-item-action left-nav-btn";

    // define left nav btns 
    const aboutBtn : Button = {id: Page.About, name: "👨‍💻 About", onClick: onClickNavBarBtn, classes:btnClasses, btnIcon: undefined, style: {}};
    const timelineBtn : Button = {id:Page.Timeline, name: "🕝 Timeline", onClick:onClickNavBarBtn, classes:btnClasses, btnIcon: undefined, style: {}};
    const productsBtn : Button = {id:Page.Products, name: "🚀 Products", onClick:onClickNavBarBtn, classes:btnClasses, btnIcon: undefined, style: {}};
    const projectBtn : Button = {id:Page.Projects, name: "🧰 Projects", onClick:onClickNavBarBtn, classes:btnClasses, btnIcon: undefined, style: {}};
    const certificationsBtn : Button = {id: Page.Certifications, name: "🏆 Certifications", onClick:onClickNavBarBtn, classes:btnClasses, btnIcon: undefined, style: {}}; 
    const contactBtn: Button = {id: Page.ContactMe, name: "✉️ Contact Me", onClick:onClickNavBarBtn, classes:btnClasses, btnIcon: undefined, style: {}}; 

    // add new nav item here 
    const btns : ReadonlyArray<Button> = [aboutBtn, timelineBtn, productsBtn, projectBtn, certificationsBtn, contactBtn]

    return (
        <div className="list-group m-1" id="div-left-nav">
            {btns.length > 0 ? btns.map(btn => (<ButtonComponent id={btn.id}
                                                                 key={btn.id} 
                                                                 name={btn.name}
                                                                 classes={btn.classes}
                                                                 btnIcon={btn.btnIcon}
                                                                 onClick={btn.onClick}
                                                                 style={btn.style} />)) : ""}
        </div>
    );
}


export default Navbar;