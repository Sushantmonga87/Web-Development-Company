import React from 'react'

export default function Home1_Section11() {
    return (
        <>
            <section className="contact-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Form Column */}
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Contact Form */}
                                <div className="contact-form wow fadeInLeft">
                                    <div className="sec-title">
                                        <span className="sub-title">Contact Now</span>
                                        <h2>Get in touch with us</h2>
                                    </div>
                                    {/*Contact Form*/}
                                    <form method="post" action="get" id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" name="full_name" placeholder="Your name" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input type="email" name="Email" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" name="Phone" placeholder="Phone" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <textarea name="message" placeholder="Write a Message" required defaultValue={""} />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*End Contact Form */}
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <figure className="image"><img src="/images/resource/contact.jpg" alt /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
