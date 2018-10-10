import React from 'react';
import './User.css';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';

const Next = () => {

    return (

    <div classNameName="container">
   <div className="app">
   <nav className="navbar navbar-expand-lg navbar-light" style={{background:'#FF6800'}}>
  <a className="navbar-brand" style={{color:'white'}}>Kundali Software</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <a className="nav-link" style={{color:'#fff111'}} >:</a>
      </li>
    </ul>
  </div>
</nav>

<div class="photos">
    <img src={img1} alt={img1}/>
    <img src={img2} alt={img2}/>
    <img src={img3} alt={img3}/>
    <img src={img1} alt={img1}/>
    <img src={img2} alt={img2}/>
    <img src={img3} alt={img3}/>
    <img src="http://fakeimg.pl/360x360/666/?text=7"/>
    <img src="http://fakeimg.pl/360x360/777/?text=8"/>
    <img src="http://fakeimg.pl/360x360/888/?text=9"/>
    <img src="http://fakeimg.pl/360x360/999/?text=10"/>
    <img src="http://fakeimg.pl/360x360/aaa/?text=11"/>
    <img src="http://fakeimg.pl/360x360/bbb/?text=12"/>
  </div>
</div>
</div>

    );
}

export default Next;
