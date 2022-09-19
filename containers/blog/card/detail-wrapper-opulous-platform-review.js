import React, { useState } from 'react';
import Slider from 'react-slick';
import {Col,Modal,ModalHeader, ModalBody,Form,FormGroup,Input,Label, Row } from 'reactstrap';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const ImageWrapper = () => (
    <div className="blog-block">
        <div className="blog-box">
            <div className="overflow-hidden">
            <img alt="Opulous Review" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/opulous.jpg" /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
                
                        <img alt="Opulous Review" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/opulous.jpg" />           
              
            </div>
        </div>
        <div className="item">
            <div className="border-portfolio">
               
                    <img alt="" className="img-fluid blur-up lazyload "
                        src="/assets/images/agency/blog/10.jpg" />
              
            </div>
        </div>
    </Slider>
)

const VideoWrapper = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <Col md="12"  className="m-b-50 p-0">
            <div className="video w-100">
                <a className="button center-content" onClick={toggle}>
                    <img alt="video" className="img-fluid" src="/assets/images/saas1/testimonial-video-icon.png" />
                </a>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                <ModalBody className="iframe-modal">
                    <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src=""></iframe>
                </ModalBody>
            </Modal>
        </Col>
    );
}

const DetailWrapper = ({ className, showcaseType }) => {
    const Showcase = () => {
        switch (showcaseType) {
            case "Image":
                return <ImageWrapper />;
            case "Gallery":
                return <GalleryWrapper />;
            case "Video":
                return <VideoWrapper />;
            default:
                return <ImageWrapper />;
        }
    }

    return (
        <div className={className}>

            {Showcase()}

            <div className="blog-text m-t-20">
                <h6>September 19th, 2022</h6>
                    <h1 className="blog-head">Opulous Platform Review And Prediction - Imusify</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                <p>OPULOUS (OPUL) is one of the most promising blockchain-based music projects on the planet at the moment. Opulous is basically a fundraising platform as well as a decentralized application to register music copyrights. The idea is brilliant because Opulous tries to tap into a very niched market that nobody else tried to prior to the creation of their project.</p>

                <p>The Opulous platform mixes the idea of DeFi yield generation with a unique NFT generation mechanism to empower musicians and artists. The idea here is that the artists can get loans to generate their new music and arts, while the fans can get exclusive NFTs from the same artists.</p>

                <p>What makes Opulous great is the fact that it already has support from the giant names in the music industry as well as from the crypto space. It receives support from Gate.io, Kucoin, Lil Pump, Soulja Boy, Chance The Rapper, former Sony Music CEO, and more.</p>

                <p>Unfortunately, Opulous has not been doing great this year. Just like every other mid-cap and low-cap cryptocurrency project, they have been struggling due to the ruthlessness of the bear market that affects the broader market at large.</p>


                <h2>Background</h2>

                <div>&nbsp;</div><div>&nbsp;</div>

                <p>Many of the core team members of Opulous come from the same company; they used to work or are still working at Ditto Music, one of the leading distribution and record label services worldwide. Ditto Music has huge connections to mainstream musicians and artists, such as Ed Sheeran, Stormzy, Royal Blood, and many others. </p>

                <p>Just from this background alone, you can see that Ditto Music executives and ex-employees are already “heavyweights” in the music industry. When they founded Opulous, they got a lot of big names as their advisors, including former Sony Music CEO (Nick Gatfield) and Chance The Rapper (Taylor Bennett).</p>

                <p>Opulous solves one very specific issue in the music industry. Record deals for musicians have become a nightmare in recent times, where the artists basically don't have much leverage against record label companies until they become really famous (and let's be honest, most musicians fail to become mainstream).</p>

                <p>Opulous' DeFi platform allows the artists to get funded and promote new projects. In return, the artists need to fulfill their obligation by releasing exclusive NFTs to the Opulous audience. Win-win for both. </p>

                <p>This is a niche solution to a decade-long problem, where artists in the traditional industry often find it super difficult to get loans and funding before they become super mainstream.</p>



                <h2>Blockchain Utilization</h2>

                <div>&nbsp;</div><div>&nbsp;</div>

                <p>Opulous is a multi-chain platform. It is already live on Ethereum, Binance Smart Chain, and Algorand, although the prime platform is Algorand. The strategy to go cross-platform is very smart because we are still early in the smart contract space (so, technically speaking, we still don't know who's going to come out on top eventually).</p>

                <h2>OPUL Token Use Case</h2>

                <div>&nbsp;</div><div>&nbsp;</div>

                <p>OPUL token use case is to be used as the default currency in the Opulous platform. This means the currency for the entire DeFi activities in Opulous platform is to use OPUL. This will generate higher demand for OPUL tokens as NFT generation activities go up in the Opulous platform itself.</p>

                <p>For example, if you want to create a music NFT to get funded in Opulous platform, you need to use OPUL. If you need to pay for services, you also need to use OPUL.</p>


                <h2>Analysis - The Future Of Opulous Music Platform</h2>

                <div>&nbsp;</div><div>&nbsp;</div>

                <p>Opulous has tapped into a niche that nobody else in the crypto space has tapped. It doesn't mean it won't have competition in the future, but as things stand today, it's the only one that tries to solve musicians' funding issues by introducing DeFi loan solutions.</p>

                <p>It's smart and unique, and it has the right team behind it. They have all the good recipes to be successful. If the cryptocurrency market picks up again someday, they should be able to take advantage of this as long as they have not run out of funds at the time.</p>



                    <h5>Rachel Stewart</h5>
                    {/* <h5 className="pull-right">10<i className="fa fa-heart-o ms-1"></i>, 50<i className="fa fa-comments-o ms-1"></i></h5> */}
                </div>
            </div>
            {/* <!-- Comment Sec Start --> */}

            <h3 className="page-header-comment">Comments :</h3>
            <div className="comment-list blog_comment">
                {/* <div className="comment_sec">
                    <article className="row">
                        <Col xs="12">
                            <div className="blog_center">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src="/assets/images/app_landing2/team/1.png" />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-start">
                                            <div className="comment-user"><i className="fa fa-user"></i><h6>That Guy</h6>
                                            </div>
                                            <div className="comment-date"><i className="fa fa-clock-o"></i><h6> Dec 16,
                                    2021 </h6></div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pe-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                    </div> */}
                    {/* <!--Comment Sec Start--> */}
                    {/* <article className="row">
                        <Col xs="11" className="offset-1">
                            <div className="blog_center re_comment">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src="/assets/images/app_landing2/team/2.png" />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-start">
                                            <div className="comment-user">
                                                <i className="fa fa-user"></i><h6> That Guy </h6>
                                            </div>
                                            <div className="comment-date">
                                                <i className="fa fa-clock-o"></i><h6> Dec 16, 2021</h6>
                                            </div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pe-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article> */}
                    {/* <!--Comment Sec End--> */}
                
                {/* <div className="comment_sec">
                    <article className="row">
                        <Col xs="12">
                            <div className="blog_center">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src="/assets/images/app_landing2/team/3.png" />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-start">
                                            <div className="comment-user">
                                                <i className="fa fa-user"></i><h6> That Guy </h6>
                                            </div>
                                            <div className="comment-date">
                                                <i className="fa fa-clock-o"></i><h6> Dec 16, 2021</h6>
                                            </div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pe-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                </div> */}
                {/* <div className="comment_sec">
                    <article className="row">
                        <Col xs="12">
                            <div className="blog_center">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src="/assets/images/app_landing2/team/4.png" />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-start">
                                            <div className="comment-user"><i className="fa fa-user"></i><h6> That Guy </h6>
                                            </div>
                                            <div className="comment-date"><i className="fa fa-clock-o"></i><h6> Dec 16,
                                    2021</h6></div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consdsequat.
                                </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pe-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                </div> */}
            </div>
            {/* <!-- Comment Sec End --> */}
            <div className="quote_2 comment_form_sec">
                <div className="container">
                    <div className="row">
                        <Col xs="12" className="quote_form p-0">
                            <hr />
                            <h3 className="page-header-comment mb-4">Leave your comment if you have anything to say:</h3>
                            <Form>
                                <Row>
                                    <FormGroup className="col-md-6">
                                        <Label>Name :</Label>
                                        <Input className="form-control" placeholder="Enter Your Name" required=""
                                            type="text" />
                                    </FormGroup>
                                    <FormGroup className="col-md-6">
                                        <Label htmlFor="inputEmail4">Email :</Label>
                                        <Input className="form-control" id="inputEmail4" placeholder="Enter Your Email"
                                            required="" type="email" />
                                    </FormGroup>
                                    <FormGroup className="col-md-12">
                                        <Label htmlFor="exampleTextarea">Message :</Label>
                                        <textarea className="form-control msg_coment" id="exampleTextarea" placeholder="Leave a Comment"
                                            required="" rows="3"></textarea>
                                    </FormGroup>
                                </Row>
                                <a className="btn btn-default primary-btn m-t-20 rounded-0" href="#">Post Comment
                                    <span className="con_btn_eff"></span>
                                </a>
                            </Form>
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailWrapper;