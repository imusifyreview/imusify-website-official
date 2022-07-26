import React from 'react'
// import CountdownComponent from '../../../../containers/common/countdown';
import {Container,Row,Col} from 'reactstrap'
import { withRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

const Banner = ({router}) => {
   const scrollToRef = (val) => {
        document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
      }

    return(
    <section className="event header" id="home">
        <div className="header3 bg">
            <div className="event-content">
                <Container>
                    <Row>
                        <Col xl="6" md="10" className="offset-xl-3 offset-md-1">
                            <div className="center-text">
                                <div className="text-center w-100">
                                    <div className="h1-margin">
                                    <h1>Empowering Crypto Music Platforms In The Web3&nbsp;<span className="typed">
                                        {/* <Typewriter
                                            options={{
                                                strings: ['Compared'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                            /> */}
                                        </span></h1>
                                    </div>
                                    <div className="wedding-time">
                                        <div>
                                            {/* <div className="event-countdown">
                                                <CountdownComponent />
                                            </div> */}
                                        </div>
                                    </div>
                                    <h4 className="text-white">
                                       Built By Experts,</h4>
                                    <h4 className="text-white">For Blockchain Enthusiasts</h4>
                                    <h5 className="header-sub-text text-white">
                                        We believe the blockchain will reshape how we listen to music. Imusify aims to connect promising cryptocurrency projects with the music industry.
                                    </h5>
                                    {/* <div className="text-center link-horizontal">
                                        <a className=" btn btn-default back-white text-uppercase border-not" href="#">
                                            Coming Soon
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {router.pathname !== '/elements/count-down' ? 
            <div className="set-bottom set-abs">
                <a className="center-content down" onClick={()=>scrollToRef('speaker')} >
                    <img alt="" className="scroll-down" src="/assets/images/event/image-down.png" />
                </a>
            </div>
            : ''}
        </div>
    </section>
    )
}


export default withRouter(Banner);