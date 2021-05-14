import React from 'react'
import FirstProp from './FirstProp';
import '../App2.css';


import leaf from '../leaf.png';
import users from '../multipleUsers.png';
import coins from '../coins.png';

 const FirstCards = (props) => {
    let label = ["اسراف کمتر", "مشتریان جدید","درآمد بیشتر"]

    return (
        <div className="container">
            <FirstProp  label={label[0]} picture={leaf}/>                 
            <FirstProp  label={label[1]} picture={users}/>                 
            <FirstProp  label={label[2]} picture={coins}/>                 
        </div>
    )
}
export default FirstCards 