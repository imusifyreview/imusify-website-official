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
            <img alt="let's compare all the most popular blockchain music projects" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/review-comparison-1.jpg" /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
                
                        <img alt="let's compare all the most popular blockchain music projects" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/review-comparison-1.jpg" />           
              
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
                <h6>July 28th, 2022</h6>
                    <h1 className="blog-head">Crypto Music Platforms - Review And Comparison</h1>
                <div className="blog-divider"></div>
                <div className="blog-description">
                <p>Here is the summary of all the most popular crypto music platforms and how they compare against each other. This page will be continuously updated when there are more platforms that are worth analyzing.</p>
 
                    <h2>Audius(AUDIO)</h2>
                    <div>&nbsp;</div>
                    <img alt="audius" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/audius.jpg" />
                    <div>&nbsp;</div>
                    <p>Arguably the most popular crypto music platform, Audius is basically a decentralized music streaming application. You can imagine it like Spotify but built on top of the blockchain. The goal of Audius is to provide more freedom to musicians and curators in regard to their music. </p>
                    
                    <p>The main infrastructure of Audius is that uploaded music and records will be managed by a decentralized mechanism. Audius also eliminates the need for third parties (i.e., record labels) when it comes to bridging the musicians to their listeners. Musicians who upload to Audius will have exclusive rights to all revenues generated on the platform.</p>
                    
                    <p>Unlike Spotify or other traditional streaming platforms, Audius does not make any revenue from the artists. They give an option to the musicians if they want to receive their revenues in Audius’ native token, AUDIO. The idea here is that when the AUDIO token price appreciates, the company will make more money since they allocated a certain amount of AUDIO tokens to themselves.</p>
                    
                    <p>[Full review coming soon]</p>
                    
                    <h2>Opulous (OPUL)</h2>
                    <div>&nbsp;</div>
                    <img alt="opulous" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/opulous.jpg" />
                    <div>&nbsp;</div>
                    <p>One of the most popular crypto music projects is Opulous. Unlike Audius, Opulous focuses on fundraising and DeFi loans targeted toward mainstream musicians. It doesn’t try to compete against Spotify or Youtube Music, but rather tries to focus its efforts more on the fundraising aspect.</p>
                    
                    <p>Opulous uses the mix of the DeFi yield farming mechanism with the NFT concept to connect the musicians and their fans. The idea here is that the fans can buy exclusive NFTs of their favorite musicians, and the raised funds will be given to the musicians who issue those NFTs through Opulous platform.</p>
                    
                    <p>They have been promoting some of the most mainstream names in the music industry, such as Lil Pump, Tyga, and Kyle. Many of their supporters and partners are big names such as Gate, KuCoin, Binance NFT, and Algorand.</p>
                    
                    
                    <p>[Full review coming soon]</p>
                    
                    <h2>Melos Studio (MELOS)</h2>
                    <div>&nbsp;</div>
                    <img alt="melos" className="img-fluid blur-up lazyload " src="/assets/images/event/blog/melos.jpg" />
                    <div>&nbsp;</div>
                    <p>A promising alternative crypto music project is called Melos Studio. It is a decentralized music marketplace platform, with NFT creation as its main focus. Based in Taiwan, Melos is positioned to be the go-to platform for musicians to create music NFTs and sell them directly to fans. </p>
                    
                    <p>You can say that Melos is (in a way) competing against Audius, since both of them allow the users to stream music directly. Although Melos doesn’t have the first-mover advantage compared to Audius, its focus on being the prime music NFTs platform might give it a competitive edge.</p>
                    
                    <p>Melos became popular after it announced that Binance Labs made a decent amount of investment into its platform in a very early stage. Many users believe Melos would eventually surpass other crypto music projects due to the backing that they receive. They also sold Queen NFTs in the early days, demonstrating how strongly connected their team is to the mainstream music industry.</p>
                    
                    <p>[Full review coming soon]</p>
                    
                    <h2>Viberate (VIB)</h2>
                    <div>&nbsp;</div>
                    <p>Unlike the other three music projects mentioned above, Viberate’s goal is to become the music analytics platform for professionals. It tries to find a sub-niche inside the crypto music niche. The idea here is that Viberate will allow its users to stream and airplay social media monitoring. </p>
                    
                    <p>It can also compare and do chart analysis between artists. On top of that, Vibrate will provide visualization of industry trends and audience growth. You can imagine the usual crypto research tools designed for the music industry, with VIB token being the main currency. There are some external factors that can make or break it for Viberate. </p>
                    
                    <p>In order for this type of analytics tool to become popular, it needs the entire crypto music platform to grow. Most artists and professionals in the music industry won’t bother buying VIB tokens if the utilization of crypto for the music industry is not popular in the first place.</p>
                    
                    <h2>The Husl (HUSL)</h2>
                    <div>&nbsp;</div>
                    <p>This is probably the least popular among the five music projects listed here. The Husl tries to be a music and entertainment platform in the metaverse. The idea here is to feature musicians and let them showcase their creativity and music in the world of Husl’s metaverse. </p>
                    
                    <p>As we all know, late 2021 was the year when metaverse became much more mainstream than before. However, the trend itself was short-lived, and the trend disappeared alongside the crypto market crash in 2022. Whether The Husl can convince musicians to “showcase” their music in The Husl’s metaverse or not, will depend on the market trends.</p>
                    
                    <p>Among all the projects listed here, I am much less convinced about The Husl. Let’s see if they can prove me wrong or not.</p>
                    
                    <p>[Full review coming soon]</p>
                    
                    <h2>Conclusion</h2>
                    <div>&nbsp;</div>
                    <p>The crypto music industry is still very young and way less mainstream compared to other categories in the cryptocurrency space. Some of the projects above try to combine the idea of music with other features (such as Opulous utilizing the idea of DeFi loans). Whether they will become successful or not, only time will tell. </p>
                    
                    <p>But one thing is for sure; the crypto music industry is here to stay. And it’s probably one of the crypto subcategories that makes the most sense.</p>
                    
 

                    <h5>Imran Yusuf</h5>
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