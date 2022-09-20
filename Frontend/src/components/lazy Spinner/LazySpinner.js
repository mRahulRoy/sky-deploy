import React, { Fragment, lazy } from 'react'
import Styles from "./lazy_spinner.module.css"
import lazyGif from "../../img/loading.webp"

import logo from "../../img/skywalktechnologies.png"
const LazySpinner = () => {
  return (
   <Fragment>
        <div className={Styles.wrapper}>
            {/* <img src={lazyGif} alt="" /> */}
            <div className={Styles.spin}>
                  <img style={{width:"42px"}} src={logo} alt="" />
            </div>
        </div>  
   </Fragment>
  )
}

export default LazySpinner
