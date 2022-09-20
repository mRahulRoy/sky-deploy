import React, { Fragment, useRef } from "react";

// module imports
import { NavLink } from "react-router-dom";

// css imports
import "./header.css";
import skywalk_logo from "../../img/Skywalk_logo.png";
// icons import

import { BsPencil } from "react-icons/bs";

import { FaAngular } from "react-icons/fa";

import {MdOutlinePhoneIphone} from "react-icons/md"
import {AiFillAndroid} from "react-icons/ai"
import {RiFlutterFill} from "react-icons/ri"
import {SiBlockchaindotcom} from "react-icons/si"
import {GiGamepad} from "react-icons/gi"
import {IoMdPaperPlane} from "react-icons/io"
import {BsCurrencyDollar} from "react-icons/bs"
import {MdOutlineScreenSearchDesktop} from "react-icons/md"
import {TiSocialFacebook} from "react-icons/ti"
import {BsFillFileTextFill} from "react-icons/bs"
import {GiClick} from "react-icons/gi"
import {SiPhp} from "react-icons/si"
import {GiPayMoney} from "react-icons/gi"
import {FaJava} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {GoTriangleLeft} from "react-icons/go"
import {GoTriangleDown} from "react-icons/go"



import { useEffect } from "react";

const Header = () => {
  const menu = useRef(null);
  const menuMain = useRef(null);
  const goBack = useRef(null);
  const menuTrigger = useRef(null);
  const closeMenu = useRef(null);
  const menuOverlay = useRef(null);
  const currentMenuTitle = useRef(null);
  const mobileMenuHead = useRef(null);
  const main = useRef(null);
  
  useEffect(() => {
    let subMenu ;
    function toggleMenu() {
      menu.current.classList.toggle("active");
      menuOverlay.current.classList.toggle("active");
    }
    // open menu
    menuTrigger.current.addEventListener("click", () => {
  
      toggleMenu();
    });
    //  close menu
    closeMenu.current.addEventListener("click", () => {
 
      toggleMenu();
    });
    // main menu
    menuMain.current.addEventListener("click", (e) =>{
      if(!menu.current.classList.contains("active")){
        return;
      }
      if(e.target.closest(".menu-item-has-children")){
         const hasChildren = e.target.closest(".menu-item-has-children");
         showSubMenu(hasChildren);
      }
    });

    function showSubMenu(hasChildren){

      subMenu = hasChildren.querySelector(".sub-menu");

  
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
  
  
  
      const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
      
      currentMenuTitle.current.innerHTML=menuTitle;
      mobileMenuHead.current.classList.add("active");
   }

  //  hide menu
   goBack.current.addEventListener("click",() =>{
    hideSubMenu();
 })

  function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    
      return new Promise((resolve,reject)=>{
        setTimeout(() =>{
          subMenu.classList.remove("active");	
       },300); 
      })
      // menu.current.innerHTML="";
      // menu.current.classList.remove("active");
 }

 window.onresize = function(){
  if(this.innerWidth >991){
    if(menu.current.classList.contains("active")){
      toggleMenu();
    }

  }
}
}); //useEffect Ends here


// ----------This method will change the color of the navigation bar on scroll.--------
    const myNav = useRef(null);
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    
//         myNav.current.classList.remove("default_nav_color");
//         myNav.current.classList.add("scrolled_nav_color");
      
//     } 
//     else {

//       myNav.current.classList.add("default_nav_color");
//       myNav.current.classList.remove("scrolled_nav_color");
//     }
// };

  return (
    <Fragment>
      {/* 
      {/* <!-- header start --> */}
      <header className="header " ref={myNav}>
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                {/* <!-- <a href="#">MyStore</a> --> */}
                <NavLink to="/">  <img src={skywalk_logo} alt="" /></NavLink>
              </div>
            </div>
            {/* <!-- menu start here --> */}
            <div className="header-item item-center">
              <div className="menu-overlay" ref={menuOverlay}></div>
              <nav className="menu" ref={menu}>
                <div className="mobile-menu-head" ref={mobileMenuHead}>
                  <div className="go-back" ref={goBack}>
                  <GoTriangleLeft/>
                  </div>
                  <div className="current-menu-title" ref={currentMenuTitle}></div>
                  <div className="mobile-menu-close" ref={closeMenu}>
                    &times;
                  </div>
                </div>
                <ul className="menu-main" ref={menuMain}>
                  <li className="menu-item-has-children">
                    <NavLink className="link" to="/">
                      Home    <i className="fa fa-angle-down">  </i> <GoTriangleDown className="down-arrow"/>
                  </NavLink>
                    <div className="sub-menu mega-menu company-profile home_sub_menu">
                      <h2>Company Details</h2>
                      <div className="list-item company-section text-center">
                        <NavLink className="link" to="companyprofile">
                          <span>1</span>
                          <h4 className="title">Company Profile</h4>
                        </NavLink>
                      </div>
                      <div className="list-item company-section text-center">
                        <NavLink className="link" to="certifications">
                          <span>2</span>
                          <h4 className="title">Certifications</h4>
                        </NavLink>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink className="link" to="#">
                      Services <i className="fa fa-angle-down"></i>  <GoTriangleDown className="down-arrow"/>
                    </NavLink>
                    <div className="sub-menu mega-menu mega-menu-column-4" >
                      <div className="list-item">
                        <h4 className="title">Web Development</h4>
                        <ul>
                          <li>
                            <NavLink className="link" to="/web-design">
                              <span> <BsPencil/> </span>
                                <h4>web design</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/web-development">
                              <span> <AiFillHtml5/> </span>
                                <h4>Web Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/angularjs">
                              <span> <FaAngular/> </span>
                                <h4>Angular Js</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/java-development">
                              <span> <FaJava/> </span>
                                <h4>Java Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/php-development">
                              <span> <SiPhp/> </span>
                                <h4>Php Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/ecommerce-website-development">
                              <span> <GiPayMoney/> </span>
                                <h4>Ecommerce Website Development</h4>
                            </NavLink>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Mobile App Development</h4>
                        <ul>
                          <li>
                            <NavLink className="link" to="/iphone-app-development">
                              <span> <MdOutlinePhoneIphone/> </span>
                                <h4>Iphone App Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/android-app-development">
                              <span> <AiFillAndroid/> </span>
                                <h4>Android App Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/flutter-app-development">
                              <span> <RiFlutterFill/> </span>
                                <h4>Flutter App Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/blockchain-app-development">
                              <span> <SiBlockchaindotcom/> </span>
                                <h4>Blochchain App Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/mobile-game-app-development">
                              <span> <GiGamepad/> </span>
                                <h4>Mobile Game App Development</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/wearable-app-development">
                              <span> <IoMdPaperPlane/> </span>
                                <h4>Wearable App Development</h4>
                            </NavLink>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Digital Services</h4>
                        <ul>
                          <li>
                            <NavLink className="link" to="/digital-marketing">
                              <span> <BsCurrencyDollar/> </span>
                                <h4>Digital Marketing</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/search-engine-optimazation">
                              <span> <MdOutlineScreenSearchDesktop/> </span>
                                <h4>Search Engine Optimization</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/social-media-marketing">
                              <span> <TiSocialFacebook/> </span>
                                <h4>Social Media Marketing</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/content-marketing">
                              <span> <BsFillFileTextFill/> </span>
                                <h4>Content Marketing</h4>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="link" to="/pay-per-click">
                              <span> <GiClick/> </span>
                                <h4>Pay Per Click</h4>
                            </NavLink>
                          </li>
                       
                          
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                   <NavLink className="link" to="/portfolio"> Our Work  </NavLink>
                  </li> 
                  <li className="menu-item-has-children">
                  <NavLink className="link" to="/casestudy">Case study    </NavLink>

                  </li>
                  <li>
                  <NavLink className="link" to="/contact-us">Contact us   </NavLink>

                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- menu end here --> */}
            <div className="header-item item-right">
              {/* <!-- mobile menu trigger --> */}
              <div className="mobile-menu-trigger" ref={menuTrigger}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header end --> */}
    </Fragment>
  );
};

export default Header;

