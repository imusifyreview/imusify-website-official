import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const CryptoFuture = () => (
    <section className="event about bg bg-img bg-about">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3 only-title">
                        <div className="main-title">
                            <h2 className=" text-white">How About The Future Of Crypto?</h2>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className="offset-lg-1">
                    <div className="text-end">
                        <div className="announcer-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" data-tilt data-tilt-max="3" data-tilt-perspective="500"
                                data-tilt-speed="400" src="/assets/images/event/cryptocurrencies.jpg" />
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
                                <h3 className="about-font-header text-white">Have Doubts? You Are Not Alone</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">After 2022's bear market, many people feel
                                skeptical about the longevity of blockchain and NFT industry.</p>
                                <p className="about-para">This growing skepticism makes it harder for newer crypto projects to grow
                                and reach new customers.</p>
                                <p className="about-para">But as explained perfectly by this <a href="#">is cryptocurrency the future</a> article, 
                                the fundamentals are still solid and the future is still very bright. We are confident that this is actually the
                                right time to start promoting your project. That's where we can help!</p>
                            </div>
                            <a className="btn btn-default " href="#">learn more</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default CryptoFuture;