import React from 'react'
import '../App2.css';


 const SecProp = (props) => {
    return (
        <div className="twnty-five">
            <div className="logo-container">
                <div className="log-cont2">
                    <img style={{width:'40%', height:'65.98px'}} src={props.picture2} alt="img" />
                </div>                   
            </div>
            <div className="txt-container">
                <h5>{props.lable2}</h5>
            </div>
        </div>
    )
}
export default SecProp  
