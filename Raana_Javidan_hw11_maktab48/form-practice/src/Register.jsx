import React from 'react'
import DropDown from './DropDown'


const Register = () => {
    const tahsilat=[ "دکتری","کارشناسی ارشد", "کارشناسی","کاردانی", "دیپلم"]
    return (
        <div >
            {/* <div className="btn-style">
                <button className="btn btn1">ورود</button>
                <button className="btn btn2">ثبت نام</button>
            </div> */}

            <div><h3> رایگان ثبت نام کنید</h3></div>
           
            <div>
            <input placeholder= "پست الکترونیک" className="inp-width" />
            </div>
            <div>
            <input type="password" placeholder="کلمه عبور" className="inp-width"/>
            </div>
            <div>
            <select   className="inp-width">                
                <option>{tahsilat[4]}</option>
                <option>{tahsilat[3]}</option>
                <option>{tahsilat[2]}</option>
                <option>{tahsilat[1]}</option>
                <option>{tahsilat[0]}</option>
            </select>
            <input type="text" placeholder="دانشگاه محل تحصیل" className="inp-width"/>
            </div>
            <DropDown/>
            <div><a href="#" className="forget">فراموش کرده اید؟</a></div>
            <div>
                <button className="btn3">ورود</button>
            </div>           
        </div>
    )
}

export default Register
