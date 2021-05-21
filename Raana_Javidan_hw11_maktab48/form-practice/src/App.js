import './App.css';
import Login from './Login';
import Register from './Register';
import {useState} from 'react'



function App() {
  const [showForm, setshowForm] = useState("login")
  // const [showRegister, setshowRegister] = useState(true)

  const onToggle =(e) =>{
    
    setshowForm (e.target.name)
    console.log(e.target.name);
  }

  return (
    <div className="App">
      <div className="form-style">
        <div  className="btnholder">
          <div className="btn-style">
            <button name="login" className={showForm === "login" ? "btn1 btn-active": "btn btn1"}  onClick={(e)=> onToggle(e)}>ورود</button>
            <button name="register" className={showForm === "login" ? "btn btn2" : "btn2 btn-active"}  onClick={(e)=>onToggle(e)}>ثبت نام</button>
          </div>
          <div className="container">
            {showForm === "login" ? <Login/> : <Register/>}
            {/* {showRegister ? <Register/> :<Login/>} */}
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
