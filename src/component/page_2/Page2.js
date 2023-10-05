import React from "react";
import "./style.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Page2() {
    return (
        <div className="page2_bg">
            <Container>
                <Row>
                    <Col className="col-12 col-sm-6 col-md-4 text-left mb-5 mb-md-0">
                        <ul>
                            <Link><li>24 и 48 часов в столице</li></Link>
                            <Link><li>Медицинский туризм</li></Link>
                            <Link><li>Пешие экскурсии</li></Link>
                            <Link><li>РЯДОМ С ГОРОДОМ</li></Link>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-4 text-left mb-5 mb-md-0">
                        <ul>
                            <Link><li>24 и 48 часов в столице</li></Link>
                            <Link><li>Медицинский туризм</li></Link>
                            <Link><li>Пешие экскурсии</li></Link>
                            <Link><li>РЯДОМ С ГОРОДОМ</li></Link>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-4 text-left">
                        <ul>
                            <Link><li>24 и 48 часов в столице</li></Link>
                            <Link><li>Медицинский туризм</li></Link>
                            <Link><li>Пешие экскурсии</li></Link>
                            <Link><li>РЯДОМ С ГОРОДОМ</li></Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Page2;