import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const Copyright = () => (
    <div className="saas1 copyright">
        <Container>
            <Row>
                <Col sm="6">
                    <div className="link-horizontal center-text">
                        <ul>
                            <li>
                                <a className="copyright-text op-text" href="https://imusify.com/privacy-policy/">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="copyright-text op-text" href="https://imusify.com/terms-and-conditions/">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col sm="6">
                    <div>
                        <h6 className="copyright-text text-white text-end op-text">Copyright © 2022 Imusify by <i
                            aria-hidden="true" className="fa fa-heart mx-1"></i>
                            pixelstrap</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Copyright;