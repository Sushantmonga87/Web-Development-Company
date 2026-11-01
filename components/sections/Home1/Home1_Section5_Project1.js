import React from 'react'
import ProjectSliderOne from '../../slider/ProjectSliderOne'

export default function Home1_Section5() {
    return (
        <>
            <section className="projects-section-two p-0">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/2.jpg)' }} />
                <div className="auto-container">
                    <div className="upper-box">
                        <div className="counter-column">
                            <div className="count-box">
                                <span className="title">Work Completed</span>
                                <div className="numbers">86900+</div>

                            </div>
                        </div>
                        <div className="text-column">
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                    <div className="sec-title text-center light">
                        <span className="sub-title">Recent Work</span>
                        <h2>Work showcase</h2>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSliderOne />
                    </div>
                </div>
            </section>
        </>

    )
}
