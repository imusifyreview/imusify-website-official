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
            <img alt="let us see how blockchain will affect our future" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/why-blockchain-is-important-2.jpg" /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
                <a className="zoom_gallery" data-source="http://500px.com/photo/32736307"
                    href="/assets/images/agency/blog/12.jpg" title="Into The Blue">
                        <img alt="let us see how blockchain will affect our future" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/why-blockchain-is-important-1.jpg" />           
                </a>
            </div>
        </div>
        <div className="item">
            <div className="border-portfolio">
                <a className="zoom_gallery" data-source="http://500px.com/photo/32554131"
                    href="/assets/images/agency/blog/10.jpg">
                    <img alt="" className="img-fluid blur-up lazyload "
                        src="/assets/images/agency/blog/10.jpg" />
                </a>
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
                <h6>July 26th, 2022</h6>
                    <h1 className="blog-head">Why Blockchain Is Important For Our Future</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                    <p>
                    If you are reading this article then it means that you have either heard or read something about blockchain. However, if you did not know anything about it before, then let me tell you how important it is.</p>

                    <p>The word "block" comes from the name given by Satoshi Nakamoto in 2008 when he introduced a digital ledger system based on peer-to-peer networking which was later named as Bitcoin (BTC). He used these blocks to store transactions between users without any third party interference. The nodes were maintained in a decentralized way where everybody could have the same copy of the ledger.</p>

                    <p>Since its inception, BTC has been considered the best form of cryptocurrency due to its high security standards and high level of trust from its long-term buyers. This led to an exponential increase in demand for other cryptocurrencies like Ethereum (ETH), Litecoin (LTC) and others. </p>

                    <p>Today, there are over 1,500 different coins being traded globally with each having their own unique features. </p>

                    <p>However, despite all the hype surrounding bitcoin, most people do not really understand how exactly it works. So, here we take a look at some basic definitions to help you get started understanding the basics behind blockchains and why they are important for our future.</p>

                    <h2>What Is Blockchain?</h2>

                    <div>&nbsp;</div><div>&nbsp;</div>

                    <p>A blockchain network consists of nodes connected via cryptography. Each node acts as a database storing information pertaining to specific data transactions, which can only be accessed through consensus mechanisms among peers. </p>

                    <p>A single file called hash chain stores every transaction made using public key encryption along with other relevant details such as time stamp, user ID, etc., thereby creating the entire distributed ledger for the entire network. </p>

                    <p>In addition, the blockchain also helps create tamper-proof records keeping everyone accountable while ensuring that no individual can alter or delete any previous record stored within the ledger. As mentioned above, this process takes place in a decentralized manner where no central authority controls the whole operation but rather relies upon cryptographic proof instead. </p>

                    <p>Thus, it makes sure that nobody can manipulate the information or change history as they please. There are two types of networks depending on whether they operate alone or together. If operated separately, they are known as private chains, whereas those run simultaneously is referred to as public chains. Private chains are usually shared only among corporations and institutions, while anybody can participate in public chains with monetary incentives in the form of cryptocurrency.</p>

                    <h2>Why is blockchain important for our future?</h2>

                    <div>&nbsp;</div><div>&nbsp;</div>

                    <p>As discussed earlier, blockchain is a type of distributed computing platform built around decentralization principles. Due to its inherent nature, it enables individuals across various locations to collaborate effectively without relying on centralized authorities. Therefore, it ensures complete transparency in terms of operations carried out. </p>

                    <p>Additionally, because of its open source code, anybody who wishes to make changes or add functionality to the existing framework can easily do so. Furthermore, it allows businesses to reduce operational costs since there is no need to hire additional personnel for maintenance purposes. </p>

                    <p>Also, blockchain eliminates the risk associated with human errors during manual processes making it easier for companies operating large-scale systems. These factors combined lead to increased adoption rates for blockchain technology worldwide. </p>

                    <p>It is important to be optimistic about blockchain. The current market trend suggests that companies will continue adopting blockchain technologies despite the current bear market.</p> 

                    <p>Blockchain applications will grow exponentially, resulting in the creation of several thousand of jobs across numerous industries. With increasing numbers of developers joining the industry, it is likely that the number of job openings related to blockchain development will exceed some of other mainstream tech industries by 2025.</p>

                    <p>It should come as no surprise, therefore, that the US Bureau of Labor Statistics projects that nearly half a million new jobs will emerge in the next decade in fields like cybersecurity, software engineering, and artificial intelligence, which all will be connected to the blockchain industry itself.</p>

                    <h2>Blockchain Use Cases</h2>
                    <div>&nbsp;</div><div>&nbsp;</div>

                    <img alt="the importance of blockchain is undeniable" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/why-blockchain-is-important-3.jpg" />

                    <div>&nbsp;</div><div>&nbsp;</div>

                    <p>Although the benefits provided by blockchain technology cannot be denied, there remains confusion regarding its exact purpose of it. For example, even though it provides protection against the potential risk that’s caused by centralizations, there are still concerns raised regarding the actual need for it. </p>

                    <p>Similarly, although it reduces transaction costs considerably, there are certain instances wherein it increases the overall cost of doing business, as pointed out by how expensive Bitcoin or Ethereum gas fees could be at times. </p>

                    <p>Nevertheless, if utilized properly, blockchain can greatly improve efficiency levels, enhance customer experience and provide better access to financial resources. Some of the prominent examples include food safety certification, identity verification, online voting, anti-counterfeiting measures, secure storage, trustless exchange between two parties, and even more transparent healthcare records.</p>

                    <p>Thus, regardless of your interest in learning more about this technology, there is certainly enough scope available for you to explore further. When it comes to music, there are real use cases out there, such as NFT utilization to modernize ticketing systems and how musicians can sell directly to their fans without predatory behaviors from the music record labels.</p>

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