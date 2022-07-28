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
            <img alt="privacy policy" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/privacy-policy.jpg" /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
               
                        <img alt="privacy policy" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/privacy-policy.jpg" />           
               
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
              
                    <h1 className="blog-head">Privacy Policy - Imusify</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                <p>This privacy policy manages the crucial details in regards to the usage and collection of your info that we grab on https://imusify.com </p>

<p>By using and navigating our website, you as the user basically agree that we can use your information on this website. </p>

<p>We fully honor your privacy rights as well as your personal information. Here is how we use your information and what you need to know about your privacy rights on Imusify.com:</p>

<p><strong>What we collect from you:</strong></p>
<p>As of now we do not collect any data from you as our comment section is not even live yet. But as soon as it goes live, we might require user registration, which in that case, we will collect your cookies and usage data, as well as your name and email address.</p>


<p><strong>What do we use your personal information for:</strong></p>
<p>Once again, as of now, we do not collect any data or information from you. But once the comment section is live, we will collect your username, email address, cookies, and usage data, and they will be used to provide better service accuracy to you, such as to show relevant related posts information.</p>

                    {/* <h5 className="pull-right">10<i className="fa fa-heart-o ms-1"></i>, 50<i className="fa fa-comments-o ms-1"></i></h5> */}
                </div>
            </div>
            {/* <!-- Comment Sec Start --> */}

            {/* <h3 className="page-header-comment">Comments :</h3> */}
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
            {/* <div className="quote_2 comment_form_sec">
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
            </div> */}
        </div>
    )
}
export default DetailWrapper;