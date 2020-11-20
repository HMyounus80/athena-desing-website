import React from 'react';
import './pricing.css';

const Pricing = () => {
    return (
       
             <div class="row">
                <div class="col-sm col-md-4 pricing-card">
                    <div>
                         <h1>$199</h1>
                         <h5>Basic</h5>
                    </div>
                            
                    <div>
                        <ul className="list-unstyled">
                            <li>Homepage</li>
                            <li>No Inner Page</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>10 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                            <button className="btn brand-button">See Pricing</button>
                     </div>
                   
        </div>

        <div class="col-sm col-md-4 pricing-cards">
                  
                        <div>     
                            <h1>$399</h1>
                            <h5>For Preferred</h5>
                            
                        </div>  
                         
                        <div>
                            <ul className="list-unstyled">
                                <li>Homepage</li>
                                <li>4 Inner Page</li>
                                <li>Asset file</li>
                                <li>Source file</li>
                                <li>Free Stock Photos</li>
                                <li>20 Days Free Support</li>
                                <li>24/7 Support</li>
                            </ul>
                            <button className="btn brand-button">See Pricing</button>

                        </div>
                        
                    
        </div>

        <div class="col-sm col-md-4 pricing-card">
                   
                <div> 
                    <h1>$599</h1>
                    <h5>For Elite</h5>
                    </div>
                
                         
                <div>
                    <ul className="list-unstyled">
                        <li>Homepage</li>
                        <li>8 Inner Page</li>
                        <li>Asset file</li>
                        <li>Source file</li>
                        <li>Free Stock Photos</li>
                        <li>30 Days Free Support</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button className="btn brand-button">See Pricing</button>
                </div>
        </div>
    </div>
    );
};

export default Pricing;
