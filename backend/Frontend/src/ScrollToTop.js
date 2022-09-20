import React, { Fragment } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This compnent is basically scrolling the page at the top whenever route changes. it prevents the user to scroll again and reach at the top on route change.

const ScrollToTop = () => {
  const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
  return null;
};

export default ScrollToTop;


