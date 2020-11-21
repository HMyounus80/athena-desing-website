import React from 'react';

const ContactUs = () => {
    return (
        <section className="mt-5 mb-5">
            <div className="container text-center">
                <h3>Get your design right now, right now</h3>
                <p>Be the first know our latest offers and updates!</p>
            </div>
            <div class="input-group mt-4">
            <input type="text" class="form-control" placeholder="Enter your email address" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
            <div class="input-group-append" id="button-addon4">
            <button class="btn brand" type="button">Get Started</button>
        </div>
        </div>
        </section>
    );
};

export default ContactUs;