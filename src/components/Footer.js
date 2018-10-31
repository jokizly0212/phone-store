import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-distributed">
                <div className="footer-left">
                <h3>Electros</h3>
                <p className="footer-company-name text-muted">Electros © 2018</p>
                </div>
                <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker" />
                    <p><span>21 Revolution Street</span> Vietnam </p>
                </div>
                <div>
                    <i className="fa fa-phone" />
                    <p>+84 555 123456</p>
                </div>
                <div>
                    <i className="fa fa-envelope" />
                    <p><a>electros@company.com</a></p>
                </div>
                </div>
                <div className="footer-right">
                <p className="footer-company-about">
                    <span>About Electros</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <a href=""><i className="fab fa-facebook-f" /></a>
                    <a href=""><i className="fab fa-twitter" /></a>
                    <a href=""><i className="fab fa-linkedin-in" /></a>
                    <a href=""><i className="fab fa-github" /></a>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;