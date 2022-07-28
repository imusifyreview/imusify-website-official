import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import CommonLayout from "../../../containers/common/common-layout-review-comparison"
import DetailSecion from '../../../containers/blog/card/detail-wrapper-review-comparison'
import Categories from "../../../containers/blog/categories"
import PopularPosts from "../../../containers/blog/posts"
import NewsLetter from "../../../containers/blog/newsletter"
import Instagram from "../../../containers/blog/instagram"

const Detail = () => (
    <CommonLayout pathList={[]} pathTitle="Crypto Music Platforms - Review And Comparison">
        <section className="agency blog-sec blog-sidebar single_blog_item">
            <Container>
                <Row>
                    <DetailSecion className="col-lg-9" />
                    <Col lg="3">
                        <div className="blog-side">
                            <Categories />
                            <PopularPosts />
                            <NewsLetter />
                            <Instagram />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </CommonLayout>
)

export default Detail;