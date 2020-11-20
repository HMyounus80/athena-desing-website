import  React from 'react';
import logo from '../../../images/logo.png'

const Navbar = () => {
    return (
       <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
          <img style={{height:'75px'}} src={logo} alt="" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                  <a class="nav-link mr-5" href="/">Home</a>
            </li>
            <li class="nav-item">
               <a class="nav-link mr-5" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="/services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="/pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="/team">Our Team</a>
            </li>
               <button className="brand-button">Contact us</button>
          </ul>
        </div>
      </nav>
       </div>
    );
};

export default Navbar;