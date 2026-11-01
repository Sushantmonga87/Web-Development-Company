import React from 'react'

const data = [
    {
        icon: "flaticon-color-sample",
        title: "Web designing"
    },
    {
        icon: "flaticon-front-end",
        title: "Web development"
    },
    {
        icon: "flaticon-online-shopping",
        title: "Web application"
    },
];

export default function Home1_Section3() {

    return (
        <>
            <section className="services-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">What We’re Offering</span>
                        <h2>Services we’re offering to <br />our customers.</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={i}>
                                <div className="inner-box">
                                    <div className="icon-box"><i className={`icon ${item.icon}`} /></div>
                                    <h5 className="title"><a href="page-service-details">{item.title}</a></h5>
                                    <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                    <a href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /> Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bottom-box">
                        <div className="text">Trust the experts for all your <strong>web design &amp; development</strong> needs.</div>
                        <a href="page-services.html" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                    </div>
                </div>
            </section>
        </>

    )
}
