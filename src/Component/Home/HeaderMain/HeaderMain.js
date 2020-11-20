import React from 'react';
import headerMain from '../../../images/headerMain.png'

const HeaderMain = () => {
    return (
        <header>
      <div className="container mt-5 mb-5">
          <div className="row d-flex justify-content-center mt-5">
          <div className="col-sm-12 col-md-5">
              <h1 className="text-left">Florence<br/>agency</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos?</p>
              <button className="btn brand-button">See Pricing</button>
              
          </div>
          <div className=" col-sm-12 col-md-7">
              <img className="img-fluid" src={headerMain} alt=""/>
          </div>
          </div>
      </div>
      </header>
    );
};

export default HeaderMain;