import React,{Fragment} from "react";
import logo from "../../img/skywalktechnologies.png"
import "./loader.css"
const Loader = ()=>{
    return (
        <Fragment>
            <div className="wrapper">
                <div className="animation-cont">
                    <img src={logo} alt="logo" />
                    <div className="dash">
                        <div className="move"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Loader;