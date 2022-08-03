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
            <img alt="Imusify App" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/imusify-app.jpg" /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
                
            <img alt="Imusify App" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/imusify-app.jpg" />           
              
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
                    <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
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
                
                    <h1 className="blog-head">Imusify App - Wait For Its Release</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                <p>Imusify plans to release an official marketplace application in the future. We plan to do this sometime in early or mid-2023.</p>

                <p>The goal of the Imusify app is to connect aspiring musicians and music fans to the smart contract frontend of the blockchain music projects that have partnered with us. We intend to become the global hub for everything related to blockchain music.</p>

                <p>You can think of Imusify as something similar to Upwork, but web3-focused and focusing on the musicians. Everything will be built using web3 frontend language (such as web3.js).</p>
                
                <p>However, not everybody will be able to deploy their smart contracts to our Imusify app. We will filter the bad actors that are plaguing the DeFi world nowadays. That means only our partners will be able to issue smart contracts and promote themselves on the front end.</p>

                <p>Do not mistake the idea of filtering with centralization. While we fully support decentralization, a niche category in the web3 industry must start with official partners, or else it will repeat the same mistake that many smaller DeFi teams have made. </p>

                <p>We believe we can achieve this as long as the demand for music and blockchain-related services exists.</p>

                <p>Here is the workflow of the upcoming Imusify app page:</p>

                <img alt="Imusify app workflow" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/app-workflow.png" />

                <div>&nbsp;</div>

                <h2>Why Build An App For Crypto Music Industry:</h2>
                <div>&nbsp;</div>
                <p className="postwithlinks">For those who do not believe that crypto and NFT space will be able to help music, you can read <a href="https://pitchfork.com/features/article/how-nfts-are-shaping-the-way-music-sounds/" target="_blank">this article from pitchfork</a>. We truly believe now is the right time to build an app for the crypto music industry.</p>

                <p className="postwithlinks">Despace University also published a really good article explaining the current state of crypto and the future despite 2022's market crash: <a href="https://university.despace.io/is-cryptocurrency-the-future-exploring-the-possibilities" target="_blank">https://university.despace.io/is-cryptocurrency-the-future-exploring-the-possibilities</a></p>
                
                <h2>Objectives Of The App:</h2>
                <div>&nbsp;</div>
                <p>The app will first be issued in the web app version utilizing Next.js + web3.js. A few months after this, we plan to issue the app on Google Play Store as well as Apple App Store. </p>

                <p>The goal of the app is to get at least 5K active users, many of them supposed to be the music fans of the musicians since we plan to have social aspects as well (for example, support your musician and get featured on our app homepage).</p>

                <p>Since this app is not intended to be a streaming platform, the server cost and the maintenance cost should be way cheaper than the likes of Spotify or even Audius (a crypto music streaming platform).</p>


                <h2>Imusify App Roadmap:</h2>
                <div>&nbsp;</div>
                <li>Imusify app will enter beta test in early or mid 2023, with web app going to be released before the others</li>
                <li>By Q3 2023 we should be able to issue the mobile version of the app in Google Play Store</li>
                <li>By Q4 2023 we will issue the mobile app in Apple App Store</li>
                <li>By mid 2024 we plan to have at least 5K active users and at least hundreds of active musicians utilizing our platform</li>
                <li>We plan to get some funds after we have active users who can vouch for our app</li>
                <div>&nbsp;</div>
                <p className="postwithlinks">As of right now, we are still developing this app on our local computers. We will update this page when we have more progress with the app. In the meantime, you can visit our <a href="https://imusify.com/blog/posts/review-comparison" target="_blank">crypto music platforms comparison</a> to see which of the current crypto music projects are still doing well or not. </p>

                <p className="postwithlinks">Or simply read our <a href="https://imusify.com/whitepaper.pdf" target="_blank">whitepaper</a> to learn more about what Imusify is trying to achieve.</p>




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