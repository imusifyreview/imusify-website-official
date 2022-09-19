import React from 'react';

const PopularPosts = ({}) => {

    return (
        <div>
            <h5 className="blog-title">Must Read:</h5>
            <div className="sidebar-container">
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src="/assets/images/inner-page/side-img/3.jpg" />
                        <div className="badge">2022</div>
                    </div>
                    <div>
                        <a href="/blog/posts/audius-music-platform-review"><h5 className="post-head">Audius Review..</h5></a>
                        <h6 className="date">August 17, 2022</h6>
                    </div>
                </div>
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src="/assets/images/inner-page/side-img/opulous.jpg" />
                        <div className="badge badge-red">2022</div>
                    </div>
                    <div>
                    <a href="/blog/posts/opulous-platform-review"><h5 className="post-head">Opulous Review</h5></a>
                        <h6 className="date">September 19, 2022</h6>
                    </div>
                </div>
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                    <img alt="" className="img-fluid" src="/assets/images/inner-page/side-img/2.jpg" />
                        <div className="badge badge-yellow">2022</div>
                    </div>
                    <div>
                    <a href="/blog/posts/review-comparison"><h5 className="post-head">Review and...</h5></a>
                        <h6 className="date">July 28, 2022</h6>
                    </div>
                </div>
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src="/assets/images/inner-page/side-img/1.jpg" />
                        <div className="badge badge-blue">2022</div>
                    </div>
                    <div>
                    <a href="/blog/posts/why-blockchain-is-important-for-our-future"><h5 className="post-head">Why Blockchain...</h5></a>
                        <h6 className="date">July 26, 2022</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPosts;
