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
            <img alt="Audius Review" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/audius.jpg" /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
                
                        <img alt="Audius Review" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/audius.jpg" />           
              
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
                <h6>August 17th, 2022</h6>
                    <h1 className="blog-head">Audius Music Platform Review And Analysis</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                <p>Audius is the most popular music streaming service, with blockchain as the core of its platform. In layman's definition, you can imagine Audius to be similar to <a href="https://open.spotify.com/" target="_blank">Spotify</a>, but it is leveraging blockchain technology.</p>

                <p>The goal of Audius is to give more freedom to artists, musicians, and curators and eliminate unnecessary third parties. With Audius, everybody can just upload their content to the platform, and it will be secured in a decentralized way by the Audius nodes.</p>

                <p>The main benefit of using Audius is the elimination of middlemen. Other music streaming platforms always take revenue cuts from all the artists. On the other hand, Audius does not take any revenue, and it gives all the advantages to the hand of the artists.</p>

                <p>You might be wondering, how does Audius make money if they don't take any cuts? Well, the answer is simple. They reserve a lot of AUDIO tokens (the native cryptocurrency of Audius), and they allow the music curators to receive 90% of their revenue in the form of these AUDIO tokens. When the music curators decide to do so, the remaining 10% will be shared with AUDIO stakers that support the Audius network.</p>

                <p>The AUDIO stakers can also use their tokens to participate in the network's decentralized governance. On top of this, they will also get exclusive access to certain content. </p>

                <p>The Audius core team itself makes money when AUDIO token price appreciates due to the amount of increasing demand and transaction activities in the network.</p>

                <h2>Background</h2>

                <div>&nbsp;</div><div>&nbsp;</div>

                <p>Audius has one mission, which is to push the revolution in the music streaming industry. As we all know, Spotify and other music streaming platforms became mainstream years ago. Although the average users enjoy these music streaming platforms, the musicians and curators actually do not benefit much. </p>

                <p>Some musicians even blatantly criticized Spotify for taking too many cuts from their content. Not only that, Spotify and others provide minimal control over how you can properly distribute your music on these platforms. </p>

                <h2>How Audius Attempts To Solve These Issues</h2>
                <div>&nbsp;</div><div>&nbsp;</div>

                <p>Audius leverages blockchain technology to solve all the above issues. Since Audius will be dependent on the usage and price appreciation of its token, AUDIO, it does not need to take cuts from all the revenues that the musicians and curators make on its platform. </p>

                <p>This is why Audius designed tokenomics and use cases that will benefit AUDIO price in the long term. When token stakers see the long-term potential of Audius, they will buy the token and stake them to secure all the uploaded contents. They can also participate in network governance, something that Spotify and other traditional music streaming platforms don't have.</p>

                <p>Meanwhile, music curators and artists do not need to worry much about middlemen taking cuts of their content. They have freedom regarding their content and revenue generation. And if they decide to take their revenues in the form of AUDIO tokens, it will help the token price to appreciate even more since it will generate more adoption.</p>

                <p>The team behind Audius makes money by gradually selling their token reserve when the token price appreciates. </p>

                <p>There's also one other important thing about Audius. Unlike traditional business models in the music industry, Audius created a formula to pay its artists based on platform activity, fan interaction, and user engagement. It's different from non-blockchain music platforms, where they pay the artists based on how many times their contents have been played.</p>


                <h2>Blockchain Utilization</h2>
                <div>&nbsp;</div><div>&nbsp;</div>

                <p>Audius started its journey by building an Ethereum sidechain called the POA Network. However, Audius grew too fast in recent years, and at the same time, Ethereum had too many issues with expensive gas fees. Due to all these problems, Audius decided to migrate its network to Solana.</p>

                <p>However, despite the fact that its network has migrated to Solana, the AUDIO token remains an ERC-20 token in the Ethereum blockchain. Many casual users feel confused and discouraged regarding AUDIO token deployment on Ethereum. They feel it's not worth it to become stakers as long as Ethereum gas fees remain as expensive as these days.</p>

                <h2>AUDIO Token Use Case</h2>
                <div>&nbsp;</div><div>&nbsp;</div>
                <p>As written above, AUDIO token has multiple use cases. Here are the basic use cases:

                <li>Secure the decentralized network of Audius blockchain. The more stakers there are, the more secure the system is</li>
                <li>Vote on governance proposals. AUDIO token holders will be able to vote on governance proposals to direct the future of the entire ecosystem</li>
                <li>Get exclusive content and access. From time to time Audius core team releases exclusive content from artists. AUDIO stakers will be able to access them before everybody else.</li>
                <div>&nbsp;</div>
                AUDIO started with a 1 billion initial token supply, but there is no maximum supply.</p>

                <h2>Analysis - The Future Of Audius Music Platform</h2>
                <div>&nbsp;</div><div>&nbsp;</div>
                <p>Compared to Spotify, Youtube Music, or Apple Music, the future of the Audius music platform remains in doubt. It does not have all the top mainstream artists in its streaming app, although the list is growing slowly.</p>

                <p>Most average users don't really care how their artists and curators make money. They just want to use an all-in-one app where they can just play various kinds of music from all the mainstream artists. Spotify or Youtube Music or Apple Music provide this opportunity. </p>

                <p>That being said, it's important to acknowledge that Audius is perhaps one of the most promising blockchain-based projects that have actual use cases beyond token price speculation. It has a real streaming app, it has real musicians, and it has a real business model.</p> 

                <p>If Audius gets some success, it will be considered a big win and legitimization of the <a href="https://imusify.com/blog/posts/review-comparison" target="_blank">crypto business model in the music industry</a> as well as other industries.</p>

                <p>Whether Audius can eventually disrupt the music streaming industry remains to be seen.</p>



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