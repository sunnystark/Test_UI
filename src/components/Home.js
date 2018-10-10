import React from 'react';
const Home = () => {
    return (

        <div className="container">
   <div className="app">
   <nav className="navbar navbar-expand-lg navbar-light" style={{background:'#FF6800'}}>
  <a className="navbar-brand" style={{color:'white'}}>HoroScope</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <a className="nav-link" style={{color:'#fff111'}} >Rashi</a>
      </li>
      
      
    </ul>
  </div>
</nav>
<h2 style={{padding:'10px'}}>Accordion </h2>
  
  <div id="accordion" style={{padding:'10px'}}>
    <div className="card" style={{padding:'10px'}} >
      <div className="card-header " style={{background:'#EB5200'}}>
        <a className="card-link text-white" data-toggle="collapse" href="#collapseOne">
         Aries
        </a>
      </div>
      <div id="collapseOne" className="collapse show" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card" style={{padding:'10px'}}>
      <div className="card-header"  style={{background:'#EB5200'}}>
        <a className="collapsed card-link text-white" data-toggle="collapse" href="#collapseTwo">
        Taurus
      </a>
      </div>
      <div id="collapseTwo" className="collapse" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card" style={{padding:'10px'}}>
      <div className="card-header"  style={{background:'#EB5200'}}>
        <a className="collapsed card-link text-white" data-toggle="collapse" href="#collapseTwo">
        Gemini
      </a>
      </div>
      <div id="collapseTwo" className="collapse" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card" style={{padding:'10px'}}>
      <div className="card-header"  style={{background:'#EB5200'}}>
        <a className="collapsed card-link text-white" data-toggle="collapse" href="#collapseTwo">
        vergo
      </a>
      </div>
      <div id="collapseTwo" className="collapse" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card" style={{padding:'10px'}}>
      <div className="card-header"  style={{background:'#EB5200'}}>
        <a className="collapsed card-link text-white" data-toggle="collapse" href="#collapseThree">
         Leo
        </a>
      </div>
      <div id="collapseThree" className="collapse" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
   </div>
   </div>


    );
}

export default Home ;