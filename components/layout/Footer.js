import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-9" />
                <div className="auto-container">
                    <div className="subscribe-form">
                        <div className="title-column">
                            <h5 className="title"><i className="icon flaticon-open-envelope" /> Subscribe now to get <br />latest updates</h5>
                        </div>
                        <div className="form-column">
                            <form method="post" action="#">
                                <div className="form-group">
                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                    <button type="button" className="theme-btn"><i className="fa fa-paper-plane" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><a href="index.html"><img src="/images/logo.png" alt /></a></div>
                                    <div className="text">Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul className="social-icon-two">
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div className="footer-widget links-widget">
                                    <h6 className="widget-title">Explore</h6>
                                    <ul className="user-links">
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Meet the Team</a></li>
                                        <li><a href="#">News &amp; Media</a></li>
                                        <li><a href="#">Our Projects</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
                                <div className="footer-widget gallery-widget">
                                    <h6 className="widget-title">Portfolio</h6>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-1.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-2.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-3.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-4.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-5.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-6.jpg" alt /></a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div className="footer-widget contacts-widget">
                                    <h6 className="widget-title">Contact</h6>
                                    <div className="text">66 Road Broklyn Street, 600 New York, USA</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope" /> <a href="mailto:needhelp@potisen.com">needhelp@company.com</a><br /></li>
                                        <li><i className="fa fa-phone-square" /> <a href="tel:+926668880000">+92 666 888 0000</a><br /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023 by  <a href="index.html">Company.com</a></div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;