import React, { Component } from 'react';

class Gifts extends Component {
    render() {
        return (
            <section className="gifts">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 wow slideInLeft">
                    <div className="gift-wrapper1">
                        <div  className="gift-layer2" />
                        <div className="gift-layer3">
                        <div className="gift-text-wrapper">
                            <h2>Turn up summer.</h2>
                            <p className="text1">Buy a Mac or iPad Pro for college.</p>
                            <p className="text1">Get Beats on us.</p>
                            <p className="text2">When you buy a Mac or iPad Pro for college you get Beats on us.1 And education pricing on Apple Music, AppleCare, select accessories, and more.2</p>
                            <a className="learn-more" >Learn More <i className="fas fa-chevron-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 mb-4 wow slideInRight">
                    <div className="gift-wrapper2">
                        <div  className="gift-layer2" />
                        <div className="gift-layer3">
                        <div className="gift-text-wrapper">
                            <h2>Special Offer</h2>
                            <p className="text1">Buy the Apple products you</p>
                            <p className="text1">love with special financing.</p>
                            <p className="text2">Earn reward points for every purchase when you use the Barclaycard Visa® with Apple Rewards. Apply, and if approved, you can shop at Apple right away.</p>
                            <a className="learn-more" >Learn More <i className="fas fa-chevron-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Gifts;