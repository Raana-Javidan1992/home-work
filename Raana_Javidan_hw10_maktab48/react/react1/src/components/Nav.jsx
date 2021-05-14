import React from 'react'
import logo from '../footerLogo.png';


const Nav = () => {
    return (
        <div>
        <header className="App-header">
            <div className="responsive">
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id="toggle"/>
            </div>
            <div className="header"></div>
            <div className="new-nav">
                <div className="navbar">
                    <div className="logo">
                        <a><img style={{width:'200px'}} src={logo} className="nav-logo-img"/></a>
                    </div>
                    
                    <div className="nav-title">
                        <div className="active">
                            <li><a href="#" className="anchor-tag ">درباره ما</a></li>
                        </div>
                        <div>
                            <li><a href="#" className="anchor-tag">کسب و کار </a></li>
                            
                        </div>
                        <div>
                            <li> <a href="#" className="anchor-tag"> پشتیبانی</a></li>
                        </div>
                        <div>
                            <li><a href="#" className="anchor-tag"> سوالات متداول</a></li>
                            
                        </div>
                    </div>
                    <div className="furushgah">
                        <li></li>
                        <a href="#" >
                        <span className="anchor-tag"> فروشگاه من</span>
                        </a>
                    </div>
                    
                </div>
            </div>
      </header>
        </div>
    )
}
export default Nav  
