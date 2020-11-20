import React from 'react';
import Logo from '../../../images/logo.png';
import fb from '../../../images/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../images/twitter (4)@2x.png';
import linkedin from '../../../images/linkedin (2)@2x.png';
import dribble from '../../../images/dribbble (1)@2x.png';


const Footer = () => {
    return (
       <footer className="mt-5 mb-5">
           <div className="container">
               <div className="row justify-content-center">
                   <div className="col-sm-6 col-md-4">
                       <img className="w-50" src={Logo} alt=""/>
                       <div className="social-icon">
                           <ul className="d-flex w-100 justify-content-center justify-content-sm-start list-unstyled">
                               <li><img className="img-fluid mr-3" src={fb} alt=""/></li>
                               <li><img className="img-fluid mr-3" src={twitter} alt=""/></li>
                               <li><img className="img-fluid mr-3" src={linkedin} alt=""/></li>
                               <li><img className="img-fluid mr-3" src={dribble} alt=""/></li>

                           </ul>
                       </div>

                   </div>

                   <div className="col-md-2">
                       <div>
                           <ul className="list-unstyled">
                               <li><a href="/">Features</a></li>
                               <li><a href="/">Enterprise</a></li>
                               <li><a href="/">Pricing</a></li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-2">
                   <div>
                           <ul className="list-unstyled">
                               <li><a href="/">About Us </a></li>
                               <li><a href="/">Terms of Services</a></li>
                               <li><a href="/">Security</a></li>
                               <li><a href="/">Login</a></li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-2">
                   <div>
                           <ul className="list-unstyled">
                               <li><a href="/">Blog</a></li>
                               <li><a href="/">Help Center</a></li>
                               <li><a href="/">Contact Us</a></li>
                               <li><a href="/"> Status</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
    );
};

export default Footer;