import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const About = () => (
    <section className="gym format about-detail">
        <Container>
            <Row>
                <Col md="8"  className="offset-md-2">
                    <div className="center-text">
                        <div className="text-center">
                            <div className="format-head-text">
                                <h3 className="about-font-header gradient-text">About Us - Imusify</h3>
                            </div>
                            <div className="format-sub-text mb-0">
                                <p className="p-light about-para">
                                    Imusify is a service that offers marketing services to both crypto music projects
                                     as well as musicians who want to reach out to crypto platforms to grow their services.
                                      Imusify has advantages compared to similar platforms because we never stop trying even
                                     in the bear market like today.
                            </p>
                            <div>&nbsp;</div>
                            <p className="p-light about-para">
                                    It's also important to note that the current Imusify.com team has no connection nor affiliation to
                                     the Imusify's 2018-2019 project, including its IMU token. We are a completely different team.
                            </p>
                            <div>&nbsp;</div>
                            <p className="p-light about-para">If you have any question related to our team, don't hesitate to contact us using the link to "Support" on top-right menu nav bar (under Pages)</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default About;