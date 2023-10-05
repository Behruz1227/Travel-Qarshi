import React from "react";
import "./style.css";
import { Container } from "reactstrap";

function Page4() {
    return (
        <div>
            <div className="page4_main">
                <div className="page4_main-box">
                    <Container>
                        <h2 data-aos="fade-left" data-aos-duration="2000">Lorem ipsum on <br /> the way</h2>
                        <p data-aos="fade-right" data-aos-duration="2000">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed to using 'Content here,
                        </p>
                    </Container>
                </div>
            </div>
            <Container className="page4_info"  data-aos="fade-right" data-aos-duration="2000">
                <h1>Lorem ipsum on <br /> the way</h1>
                <p >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here,
                </p>
            </Container>
        </div>
    );
}

export default Page4;