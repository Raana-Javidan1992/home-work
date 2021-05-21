import React, {useState} from 'react'



const Login = () => {
    // const loginClick =(e)=>{

    // }
    return (
        <div>
              {/* <div className="btn-style">
                <button className="btn btn1">ورود</button>
                <button className="btn btn2">ثبت نام</button>
            </div> */}
            <div><h3>خوش آمدید</h3></div>
            <div>
            <input className="inp-width2" placeholder= "نام" />
            <input  className="inp-width2" placeholder= "نام خانوادگی" />
            </div>
            <div>
            <input placeholder= "پست الکترونیک" className="inp-width" />
            </div>
            <div>
            <input  type="password" placeholder="کلمه عبور" className="inp-width"/>
            </div>
            <div>
                <button className="btn3" >ورود</button>
            </div>           
        </div>
    )
}

export default Login
