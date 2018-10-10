import React from 'react';
import './User.css';
import logo from '../img/logo.png';
import bg from '../img/logo.png';

//console.log(logo);
const User = () => {

    return (
   <div className="container">
   <div className="app">
   <h1 className="font_style" style={{color:'#FF6800'}}>Kundali Software </h1>
   <div style={{textAlign:'right', marginRight:'18px'}}>By DurlabhPvt.com </div>

   <br/>
   <div className="texter" style={{marginTop:'95px'}}><img src={logo}/></div>

   <div className="texter" style={{color:'gray', marginTop:'150px'}}>Copyright 2016 Durlabh (Pvt) Ltd</div>
      <p className="texter" style={{color:'gray', fontSize:'9px'}}>All Right Reserved</p>


   </div>
   



   </div>



    );
}

export default User;