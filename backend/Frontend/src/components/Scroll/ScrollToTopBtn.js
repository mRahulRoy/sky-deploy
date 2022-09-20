import React, { Fragment } from "react";
import Styles from "./scroll.module.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const ScrollToTopBtn = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  let shouldScroll = null;
  window.onscroll = () => {
    if (
      document.body.scrollTop >= 10 ||
      document.documentElement.scrollTop >= 10
    ) {
      shouldScroll = true;
    
    } else {
      shouldScroll = false;
    }
  };

  return (
    <Fragment>

       
          <div className={Styles.cont}>
          <button className={Styles.scrollBtn} onClick={() => scrollToTop()}>
            <BsFillArrowUpCircleFill className={Styles.icon} />
          </button>
        </div>
      
    </Fragment>
  );
};

export default ScrollToTopBtn;
