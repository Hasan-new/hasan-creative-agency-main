import React from 'react';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="container navbar navbar-expand-lg navbar-light"  style={{backgroundColor: '#FBD062'}}>
            <img className= "img-fluid"  style={{width: '20%', paddingLeft:'7%'}} src={logo} alt=""/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact us</a>
      </li>
      <button class= "nav-link mr-5" style={{backgroundColor:'#111430', color: 'white'}}>Login</button>
      
    </ul>
  </div>
</nav>
    );
};

export default Navbar;