import React from 'react'


export const FirstProp = (props) => {
    return (
        <div className="sec-container">
            <div className="third-container">
                <a href="#">
                    <img style={{width:'40%', height:'40%'}} src={props.picture} className="first-cards"/>
                </a> 
            </div>
            <div><h4> {props.label}</h4></div>
            
        </div>
    )
}

export default FirstProp  
