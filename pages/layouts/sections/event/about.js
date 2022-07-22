import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const About = () => (
    <section className="event about bg bg-img bg-about">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3 only-title">
                        <div className="main-title">
                            <h2 className=" text-white">How Blockchain Will Significantly Improve Music</h2>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className="offset-lg-1">
                    <div className="text-end">
                        <div className="announcer-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" data-tilt data-tilt-max="3" data-tilt-perspective="500"
                                data-tilt-speed="400" src="/assets/images/event/l3.jpg" />
                        </div>
                    </div>
                </Col>
                <Col xl="5" lg="7" md="6" className="offset-xl-1">
                    <div className="abouts center-text">
                        <div className="format">
                            {/* <div className="format-small-text">
                                <h6 className="text-white borders-before text-uppercase"><span>In fact, it's one of the most realistic use cases</span></h6>
                            </div> */}
                            <div className="format-head-text">
                                <h3 className="about-font-header text-white">The Future Is Inevitable</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">Many skeptics criticize blockchain and NFT use cases in various industries
                                 (i.e., gaming and finance)</p>
                                <p className="about-para">Meanwhile, the music industry has been pretty much welcoming the 
                                blockchain adoption.</p>
                                <p className="about-para">Musicians have fans and the utilization of blockchain and NFT technology will tremendously
                                    help musicians to maximize their revenues from their own fans, without the record labels 
                                    cutting their profits left and right. If you want to learn more on how blockchain will help musicians 👇</p>
                            </div>
                            <a className="btn btn-default " href="#">learn more</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;