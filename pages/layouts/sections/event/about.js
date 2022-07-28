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
                                <h3 className="about-font-header text-white">Blockchain Integration Is Inevitable</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="textwithlinks">Many skeptics criticize blockchain and NFT use cases in various industries
                                 (i.e., gaming and finance). Meanwhile, according to The Verge, the music industry has been pretty much <a href="https://www.theverge.com/22917126/nfts-crypto-gamers-music-fans-fandoms" target="_blank">welcoming the blockchain adoption</a>.</p>
                                <div>&nbsp;</div>
                                <p className="textwithlinks">Musicians have fans, and the utilization of blockchain and NFT technology will tremendously
                                    help musicians to directly connect with their own fans. This is good for the industry 
                                    because record labels often cut musicians' profits left and right. The potential in 
                                    blockchain music category is huge. It's the perfect time to get in 👇</p>
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