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
                
                        <img alt="let us see how blockchain will affect our future" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/why-blockchain-is-important-1.jpg" />           
              
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
                <h6>November 16th, 2022</h6>
                    <h1 className="blog-head">Bitcoin and the Financial World</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                    <p>
                    The concept of cryptocurrency has been around since 2008. But it wasn't until 2013 that cryptocurrencies started to gain a lot of traction. Today, there are more than 1,500 digital currencies available on the market.</p>

                        <p>But which one should you invest in? What are the advantages of investing in bitcoin or any other cryptocurrency? How can bitcoin help make your life easier? These questions have puzzled many people over the past few years. Well, we'll answer them today with our comprehensive guide on what bitcoin is and how it actually works. And most importantly, why it might change the future of our finance.</p>

                        <h2>What Is Bitcoin?</h2>
                        &nbsp;

                        <p>  Bitcoin is open-source software and a payment system that uses cryptography as its base technology. It was first launched by Satoshi Nakamoto back in 2009. The word bitcoin used to be formed from two separate words, "bit" and "coin," but along with time, people started to call it simply "bitcoin."</p>

                        <p> Bitcoin is a decentralized digital currency. This means that it doesn't belong to anyone. It exists on its own, and no central authority is involved. You can store bitcoins on your computer, smartphone, tablet, or even a USB stick. And you can transfer these coins from your wallet to another person's wallet and vice versa.</p>

                        <p> There are more than 19 million bitcoins in circulation at present. Each bitcoin comes with a fixed supply of 21 million. At the time of this article's publication, Bitcoin was trading around $22,900.</p>

                        <p> You might as well say Bitcoin was the first ever currency that popularized the concept of blockchain.</p>

                       <h2>How Does Bitcoin Work?</h2> 
                       &nbsp;

                        <p> Bitcoin is a peer-to-peer network. It allows users to send funds without involving a third party. The network is protected using distributed cryptographic techniques.</p>

                        <p> In simple terms, this means that the network consists of thousands of computers, all connected to each other. All these computers keep track of transactions and verify them simultaneously. As a result, the network is highly secure and resistant to fraud. Bitcoin utilizes this decentralized network and calls it the Bitcoin blockchain.</p>

                        <p> You can use bitcoin to buy goods online, pay bills, send money internationally, etc. It can be used anywhere where credit cards are accepted. Although to be fair, most of the time, Bitcoin has only been used for trading against other cryptocurrencies, for speculation purposes.</p>

                        <p>You don't need to create an account to start using bitcoin. The only thing you need to do is install a wallet app on your device and start trading.</p>

                        <p> Once you've done that, you can start sending or receiving coins. You can also trade these coins with others. There are many exchanges available on the internet that allow you to exchange your traditional currency for bitcoin.</p>

                        <p>These exchanges provide trading services like buying, selling, and exchanging bitcoins and fiat (traditional) currencies. In some cases, they provide margin services too.</p>

                       <h2>Why Is Bitcoin Gaining Popularity?</h2>
                       &nbsp;

                        <p> Bitcoin is popular because of its versatility. People find it easy to use and accept. They also think that bitcoin is one of the safest forms of investment. When enough people start to think it's a digital form of gold, you better believe it will keep gaining popularity. If you're looking to invest in bitcoin, you can choose between different types of non-custodial wallets, such as from Blockchain.com or Exodus.</p>

                        <p> Some of the wallets include desktop wallets, web wallets, mobile wallets, hardware wallets, etc. In addition to that, if you're a beginner, here are five things you need to know about bitcoin before you start diving deeper into the crypto world.</p>

                        <p> a. Bitcoin is pseudonymous. It makes sure that nobody knows who owns the bitcoin. This makes it a safe way to transact business without exposing yourself.</p>

                        <p> b. Bitcoin is free. You don't need to pay anything to receive bitcoins. There's no fee for sending bitcoins either except the gas fee to support the blockchain.</p>

                        <p> c. Bitcoin is fast. It takes just 10 minutes to complete a transaction. Transactions take less time to process compared to other methods of transferring money internationally.</p>

                        <p> d. Bitcoin is trustless. Unlike banks, bitcoin is not regulated by any government. This means that it's completely independent of any authority.</p>

                        <p>e. Bitcoin is cheaper. A small amount of bitcoin costs very little compared to other forms of investments.</p>

                        <h2>Will Bitcoin Become The Currency Of The Future?</h2>
                        &nbsp;

                        <p>Though still debatable, it is widely believed Bitcoin will become part of our future. It's already being used by millions of people in the world. And it's only going to grow in the coming years. Many experts believe that bitcoin could replace many developing countries' national currencies within the next decade.</p>

                        <p> This is the reason why companies like PayPal are starting to offer support for bitcoin payments. There are several companies that provide bitcoin storage and even processing services.</p>

                        <p>As a matter of fact, the number of merchants accepting bitcoin has grown exponentially in recent times despite the recent market crash in 2022.</p>
                        <p> While there are still plenty of skeptics out there who think that bitcoin is nothing but a bubble, most experts agree that bitcoin is here to stay.</p>

                        <p>El Salvador and the Central African Republic have both Bitcoin as national legal tenders in their countries. It's believed if Bitcoin can make a comeback to the bull market cycle, many more countries will start adopting Bitcoin. It's exciting to see where the future is.</p>


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