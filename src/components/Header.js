import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="banner wow slideInLeft">
            <div className="text-wrapper">
                <p>Creative Design</p>
                <h2 className="title-header">Performance Wonderful</h2>
                <p className="sub-tlt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ut exercitationem dolores ex placeat sapiente?</p>
                <div className="buttons">
                <div className="btn btn-danger">$299 Buy Now</div>
                <div className="btn btn-outline-light">Read More</div>
                </div>
            </div>
            </div>
        );
    }
}
export default Header;