import React from "react";
import "./style.css";
import { Col, Container, Row } from "reactstrap";
import img_1 from "./img/img_1.png";
import img_2 from "./img/img_2.png";

function Page6() {
    return (
        <>
            <div className="page6_main-bg">
                <div className="page6_bg-dark">
                    <div className="page6_blur" >
                        <h1 data-aos="fade-right" data-aos-duration="2000">Lorem ipsum</h1>
                    </div>
                    <div className="page6_text" data-aos="zoom-in" data-aos-duration="2000">
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed to using 'Content here,
                        </p>
                    </div>
                </div>
            </div>

            <Container className="page6_info">
                <Row>
                    <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in-right" data-aos-duration="2000">
                        <div className="page6_images">
                            <img className="img-fluid" src={img_1} alt="img" />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4" data-aos="zoom-in-right" data-aos-duration="2000">
                        <div className="page6_images">
                            <img className="img-fluid" src={img_2} alt="img" />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in-left" data-aos-duration="2000">
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at
                            its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution
                            of letters, as opposed to using 'Content here,
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Page6;