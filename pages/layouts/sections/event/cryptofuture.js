import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const CryptoFuture = () => (
    <section className="event about bg bg-img bg-about">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3 only-title">
                        <div className="main-title">
                            <h2 className=" text-white">Why Should Musicians Adopt Crypto?</h2>
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
                                <p className="about-para">After the recent bear market, many people feel
                                skeptical about the future of blockchain and NFT industry. This growing skepticism makes it harder 
                                for newer crypto projects to reach new customers.</p>
                                <p className="about-para">But despite all the ongoing issues,
                                crypto fundamentals are still solid and the future is still very bright. We are confident that nowadays is 
                                actually the
                                right time to start developing your relationship with the right crypto music platforms.</p>
                                <p className="about-para">The good thing about crypto is that you can basically learn from anywhere you want. 
                                Educate yourself and decide for yourself if you think musicians should embrace the blockchain technology or not.
                                 </p>
                            </div>
                            {/* <a className="btn btn-default " href="#">learn more</a> */}
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className="offset-lg-1">
                    <div className="text-end">
                        <div className="announcer-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" src="/assets/images/event/cryptocurrencies.jpg" />
                            <img alt="" className="img-fluid" data-tilt data-tilt-max="3" data-tilt-perspective="500"
                                data-tilt-speed="400" src="/assets/images/event/cryptocurrencies.jpg" />
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className="offset-lg-1">
                    <div className="text-end">
                        <div className="announcer-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" src="/assets/images/event/atlas.jpg" />
                            <img alt="" className="img-fluid" data-tilt data-tilt-max="3" data-tilt-perspective="500"
                                data-tilt-speed="400" src="/assets/images/event/atlas.jpg" />
                        </div>
                    </div>
                </Col>
                <Col xl="5" lg="7" md="6" className="offset-xl-1">
                    <div className="abouts center-text">
                        <div className="format">    
                            <div className="format-head-text">
                                <h3 className="about-font-header text-white">Knowledge Is Power</h3>
                            </div>
                            <div className="format-sub-text">
                                 <p className="textwithlinks">If you are a musician or music fan, and you want to understand
                                 crypto and why should they matter for you, there are plenty of good resources to start learning.
                                 Here is the list of our top recommendations for new beginners:</p>
                                 <div>&nbsp;</div>
                                 <p className="textwithlinks"><a href="https://university.despace.io" target="_blank" rel="follow">Despace University</a> => Very comprehensive cryptocurrency articles and guides. Mainly focused on market analysis and DeFi</p>
                                 <div>&nbsp;</div>
                                 <p className="textwithlinks"><a href="https://consensys.net/knowledge-base/" target="_blank" rel="follow">Consensys</a> => In-depth blockchain technical courses that you need if you want to dive deeper to the technical stuff</p>
                                 <p>Check also why <a href="https://imusify.com/blog/posts/bitcoin-and-the-financial-world" target="_blank" rel="follow">Bitcoin matters in the financial world</a> despite recent FTX fallout.</p>
                            </div>
                            {/* <a className="btn btn-default " href="#">learn more</a> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default CryptoFuture;