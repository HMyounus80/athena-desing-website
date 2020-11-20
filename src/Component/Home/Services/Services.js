import React from 'react';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import service4 from '../../../images/service4.png';


const Services = () => {
    return (
        <section className="mt-5 mb-5">
      <div class="container">
        <div>
           <h1 class="text-center">What we do</h1>
           <p class="text-muted">Our main focus is to make the user Experience very simple and easy. Simplicity is our Strength</p>
        </div>
        <div class="row d-flex align-items-center justify-content-center p-5 ">
          <div class="col-md-3 col-sm-6">
            <div class="card book">
              <img src={service1} class="card-img-top img-fluid w-25 m-auto pt-3" alt="book"/>
              <div class="card-body text-center">
                <h3 class="card-title">Experience Design</h3>
                <p class="card-text">The point of using lorem ipsum is that it has a more-or-less normal.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card" id="white-shadow">
              <img src={service2} class="card-img-top img-fluid w-25 m-auto pt-3" alt="Student"/>
              <div class="card-body text-center">
                <h3 class="card-title">Interface Design</h3>
                <p class="card-text">The point of using lorem ipsum is that it has a more-or-less normal.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card">
              <img src={service3}  class="card-img-top img-fluid w-25 m-auto pt-3" alt="test"/>
              <div class="card-body text-center">
                <h3 class="card-title">Prototyping</h3>
                <p class="card-text">The point of using lorem ipsum is that it has a more-or-less normal.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card" id="white-shadow" >
              <img src={service4}  class="card-img-top img-fluid w-25 m-auto pt-3" alt="Students"/>
              <div class="card-body text-center">
                <h3 class="card-title">Illustration</h3>
                <p class="card-text">The point of using lorem ipsum is that it has a more-or-less normal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    );
};

export default Services;