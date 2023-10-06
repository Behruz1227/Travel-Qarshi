import React, { useEffect, useState } from "react";
import "./style.css";
import { Col, Container, Row } from "reactstrap";
import img_1 from "./images/img_1.png";
import img_2 from "./images/img_2.png";
import language from "./til/til.json";
import FooTer from "../footer/FooTer";
import NavbarMenu from "../navbar/NavbarMenu";


function Page11() {

    const [lang, setLang] = useState("");

    useEffect(() => {
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.til11 : lang === 'EN' ? language.en.til11 : language.ru.til11)
    }, []);

    return (
        <div className="page11_main">
            <NavbarMenu />
            <div className="page11_box">
                <div className="page11_blur">
                    <Container>
                        <h2 data-aos="fade-right" data-aos-duration="1500">{lang.title}</h2>
                        <p data-aos="fade-left" data-aos-duration="1500">
                            {lang.text1}
                        </p>
                    </Container>
                </div>
                <Container className="page11_container">
                    <Row className="page11_images">
                        <Col className="col-12 col-md-6 pb-5" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="img-fluid" src={img_1} alt="img" />
                            </div>
                        </Col>
                        <Col className="col-12 col-md-6 pb-5" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="img-fluid" src={img_2} alt="img" />
                            </div>
                        </Col>
                    </Row>
                    <p className="text-center page11_info" data-aos="fade-up" data-aos-duration="1500" v>
                        {lang.text2}
                    </p>
                </Container>
            </div>
            <FooTer />
        </div>
    );
}

export default Page11;