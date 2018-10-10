import React from 'react';
import './User.css';
const Next2 = () => {

    return (

     <div className="container">
     <div className="app">
     <nav className="navbar navbar-expand-lg navbar-light" style={{background:'#FF6800'}}>
  <a className="navbar-brand" style={{color:'white'}}>Kundali</a>
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
<div class="container">
    	<div className="row">
			<div className="col-md-12 ">
				<div className="panel panel-login">
					<div className="panel-heading">
						<div className="row">
							<div className="col-md-6">
								<a href="#" className="active" id="login-form-link">HoroScope</a>
							</div>
							<div className="col-md-6">
								<a href="#" id="register-form-link">Match Making</a>
							</div>
						</div>
						<hr/>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
								<div id="login-form">
									
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <td>Language</td>
                                        <td><select className="form-control">
      <option> English   </option>
      <option> Hindi</option>
      <option>French</option>
      <option>German</option>
      
    </select></td>
                                        <td className="fa fa-language text-center" aria-hidden="true">
                                        
                                         

                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>Sunny Stark</td>
                                        <td i className="fas fa-user"></td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>	<select className="form-control">
      <option> Male   </option>
      <option> Female</option>
      
    </select></td>
                                        <td className="fas fa-male"><span><i class="fas fa-female"></i></span></td>
                                    </tr>
                                    <tr>
                                        <td>Birth Date</td>
                                        <td><input type="text" placeholder="07/10/18"/> </td>
                                        <td className="fas fa-calendar-alt"></td>
                                    </tr>
                                    <tr>
                                        <td>Birth Time</td>
                                        <td ><i className="far fa-calendar-check">12:30</i></td>
                                        <td className="fas fa-clock"></td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td><select className="form-control">
      <option> India  </option>
      <option> Us</option>
      <option> France </option>
      <option> Germany</option>
      
    </select></td>
                                        <td i className="fas fa-globe"></td>
                                    </tr>
                                    <tr>
                                        <td>Birth Place</td>
                                        <td><select className="form-control">
      <option> Agra </option>
      <option> Kanpur</option>
      <option> Delhi  </option>
      <option> Ncr</option>
      
    </select></td>
                                        <td i className="fas fa-location-arrow"></td>
                                    </tr>

                                    </tbody>
                                </table>
                                <div className="row text-center">
                                <div className="col-lg-12">
                                <button className="btn btn-primary btn-block">Get HoroScope</button>
								</div></div></div>
								<div id="register-form"  style={{display: 'none'}}>
									
									<p style={{textAlign:'center'}}>Another MOdual to built match making </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

     
     </div>
     </div>
     
 


    );
}

export default Next2;