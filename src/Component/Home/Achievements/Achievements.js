import React from 'react';
import './achievements.css';
import happy from '../../../images/happy.png';
import cup from '../../../images/cup.png';
import star from '../../../images/star.png';
import faster from '../../../images/faster.png';

const Achievements = () => {
    return (
        <section>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm col-md-5 d-flex align-items-center">
                        <div>
                            <h2>Our Achievements</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter. </p>
                        </div>

                    </div>
                    <div className="col-sm col-md-6 offset-md-1">
                        <div className="row">
                            <div className="col-sm col-md-6 ">
                                <div className="achievement-info d-flex align-items-center happy-clients">
                                    <div className="info-img">
                                        <img src={happy} alt=""/>
                                    </div>
                                    <div className="info-heading">
                                        <h1>700+</h1>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6">
                                 <div className="achievement-info d-flex align-items-center">
                                    <div className="info-img">
                                        <img src={cup} alt=""/>
                                    </div>
                                    <div className="info-heading">
                                        <h1>140+</h1>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6">
                            <div className="achievement-info d-flex align-items-center">
                                    <div className="info-img">
                                        <img src={star} alt=""/>
                                    </div>
                                    <div className="info-heading">
                                        <h1>75+</h1>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6">
                            <div className="achievement-info d-flex align-items-center">
                                    <div className="info-img">
                                        <img src={faster} alt=""/>
                                    </div>
                                    <div className="info-heading">
                                        <h1>25+</h1>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;