import React, { Component } from 'react';

class MacbookImage extends Component {
    render() {
        return (
            <section className="macbook wow fadeInUp ">
                <div className="macbook-text">
                    <h3>MacBook Pro</h3>
                    <p className="text1">More Power. More Performance. More Pro</p>
                    <a className="learn-more" href="">Learn More
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
                 <div className="macbook-image"></div>
            </section>
        );
    }
}

export default MacbookImage;