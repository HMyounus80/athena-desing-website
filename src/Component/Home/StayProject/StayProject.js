import React from 'react';
import stayProject from '../../../images/stayProject.png'

const StayProject = () => {
    return (
    <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-7">
                <img style={{width: '100%'}} className="img-fluid" src={stayProject} alt=""/>
            </div>
            <div className=" col-sm-12 col-md-5">
                <h2>Stay Running & Project</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos?</p>
                <button className="btn brand-button">Contact us</button>
        </div>
        </div>
    </div>
    );
};

export default StayProject;