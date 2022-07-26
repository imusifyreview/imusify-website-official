import React from 'react'
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
import {PricingData} from '../../../../database/layouts/event/database';

var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ 
        { 
            breakpoint: 478, 
            settings: { slidesToShow: 1 } 
        }, 
        { 
            breakpoint: 992, 
            settings: { slidesToShow: 2 } 
        }
    ]
};

const Pricing = () => (
    <section className="event pricing set-relative bg bg-img bg-about">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2 className=" text-white">Imusify Packages For Companies</h2>
                        </div>
                        <div className="sub-title">
                            <p className="text-white">We offer various services to crypto startups, from 
                            token creation service to marketing offers. 
                            we can also connect you to the right musicians and platforms.</p>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme pricing-slider"  {...settings}>
                        {PricingData.length > 0?
                            PricingData.map((item, index) => 
                                <div className="item" key={`pricing-table-${index}`}>
                                    <div className="price-container shadows bg-white text-center">
                                        <div className="price-feature-container set-relative">
                                            <div className="feature-text">
                                                <span className="flaticon-rocket-ship feature-icon"></span>
                                                <h4 className="feature-text-heading bold text-uppercase font-primary">{item.title}</h4>
                                                <hr className="set-border" />
                                            </div>
                                            <div className="price-features font-primary">
                                                {item.features.map((feature, i) => 
                                                    <h6 key={`price-features-${i}`} className="price-feature">{feature}</h6>
                                                )}
                                            </div>
                                            <div className="price-value">
                                                <h6 className="price text-center font-primary">$<span
                                                        className="large font-primary">{item.price}</span></h6>
                                            </div>

                                            <a className="btn btn-default back-white" href="https://imusify.com/page/contact">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        :'Pricing Table Not Found'}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Pricing;