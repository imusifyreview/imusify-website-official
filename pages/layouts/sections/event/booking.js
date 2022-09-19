import React from 'react'
import {Container,Row,Col,Form,FormGroup} from 'reactstrap'

const Booking = () =>
{
     return (
    <section className="event booking set-relative" id="register">
        <div className="circle">
        </div>
        <Container id="booking">
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2><span>Case Study: </span>The Most Promising Crypto Music Projects</h2>
                        </div>
                        <div className="sub-title">
                            <p>Until today, there's still no crypto music project that has been able to 
                                become mainstream enough. We at Imusify offer our services to help everybody understand and analyze 
                                where the crypto music industry currently stands.</p> 
                                <div>&nbsp;</div>
                                <p>Learn how the top projects in this category got to where
                                they are today and how you can learn from them. </p>
                                <div>&nbsp;</div>
                                <p className="textwithlinks"><a href="blog/posts/review-comparison"><u>Check our comparison</u></a></p>
                            <div>&nbsp;</div>
                            <table align="center" className="tabledesign">
                                
        <tr className="tabledesign">
            <th className="tabledesign">No.</th>
            <th className="tabledesign">Project</th>
            <th className="tabledesign">Ticker</th>
            <th className="tabledesign">Subcategory</th>
            <th className="tabledesign">Analysis</th>
        </tr>
        <tr className="tabledesign">
            <td className="tabledesign">1</td>
            <td className="tabledesign">Audius</td>
            <td className="tabledesign">AUDIO</td>
            <td className="tabledesign">Web3 Streaming Platform</td>
            <td className="tabledesign"><a href="https://imusify.com/blog/posts/audius-music-platform-review" target="_blank">Click Here</a></td>
        </tr>
        <tr className="tabledesign">
            <td className="tabledesign">2</td>
            <td className="tabledesign">Opulous</td>
            <td className="tabledesign">OPUL</td>
            <td className="tabledesign">Music NFT & DeFi Loans</td>
            <td className="tabledesign"><a href="https://imusify.com/blog/posts/opulous-platform-review" target="_blank">Click Here</a></td>
        </tr>
        <tr className="tabledesign">
            <td className="tabledesign">3</td>
            <td className="tabledesign">Melos Studio</td>
            <td className="tabledesign">MELOS</td>
            <td className="tabledesign">Music NFT Creation</td>
            <td className="tabledesign">Coming Soon</td>
        </tr>
        <tr className="tabledesign">
            <td className="tabledesign">4</td>
            <td className="tabledesign">Viberate</td>
            <td className="tabledesign">VIB</td>
            <td className="tabledesign">Music Analytics</td>
            <td className="tabledesign">Coming Soon</td>
        </tr>
        <tr className="tabledesign">
            <td className="tabledesign">5</td>
            <td className="tabledesign">The Husl</td>
            <td className="tabledesign">HUSL</td>
            <td className="tabledesign">Music NFT Marketplace</td>
            <td className="tabledesign">Coming Soon</td>
        </tr>
    </table>
                        </div>
                    </div>
                </Col>
                {/* <Col xs="12">
                    <Form className="m-b-35 row">
                        <Col>
                            <FormGroup className='form-group'>
                                <input placeholder="first name" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className='form-group'>
                                <input placeholder="last name" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className='form-group'>
                                <input placeholder="email" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className='form-group'>
                                <input placeholder="mobile" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className='form-group'>
                                <input placeholder="company name" type="text" />
                            </FormGroup>
                        </Col>
                    </Form>

                    <div className="text-center">
                        <a className="btn btn-default primary-btn m-0-auto" href="#">register</a>
                    </div>
                </Col> */}
            </Row>
        </Container>
    </section>
)}


export default Booking;