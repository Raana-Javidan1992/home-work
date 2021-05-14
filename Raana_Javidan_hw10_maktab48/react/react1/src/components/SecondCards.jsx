import React from 'react'
import SecProp from './SecProp';



import bread from '../bread.png';
import restaurant from '../restaurant.png';
import hotel from '../hotel.png';
import kharobar from '../kharobar.png';


const SecondCards = () => {
  let lable2 = ["نانوایی و قنادی", "رستوران و کافه","هتل","سوپرمارکت"]
    return (
        <div className="secCard-container">
            <div className="heading"><h1>بهترین همراهان ما</h1></div>
            <div className="container2">
                <div className="container3">
                    <SecProp lable2={lable2[0]} picture2={bread}/>
                    <SecProp lable2={lable2[1]} picture2={restaurant}/>
                    <SecProp lable2={lable2[2]} picture2={hotel}/>
                    <SecProp lable2={lable2[3]} picture2={kharobar}/>
                </div>
            </div>           
        </div>
    )
}
export default SecondCards 
