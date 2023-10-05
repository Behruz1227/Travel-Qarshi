import React, { useEffect, useState } from "react";
import "./style.css";
import { Col, Container, Row } from "reactstrap";
import image_1 from "./img/image_1.png";
import image_2 from "./img/image_2.png";
import image_3 from "./img/image_3.png";
import language from "./til/til.json";
import FooTer from "../footer/FooTer";


function Page10() {

    const [lang, setLang] = useState("");

    useEffect(() => {
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.til10 : lang === 'EN' ? language.en.til10 : language.ru.til10)
    }, []);

    return (
        <>
        <div className="page10_main">
            <div className="page10_box">
                <Container>
                    <h1 data-aos="fade-left" data-aos-duration="1500">{lang.title}</h1>
                    <p data-aos="fade-right" data-aos-duration="1500">{lang.info}</p>
                </Container>
            </div>

            <Container className="page10_container">
                <Row className="w-100 mt-5">
                    <Col className="col-12 col-md-6 p-5" data-aos="fade-up" data-aos-duration="1500" up>
                        <div className="page10_product">
                            <div><img className="img-fluid" src={image_1} alt="img" /></div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 p-5" data-aos="fade-up" data-aos-duration="1500" up>
                        <div className="page10_product">
                            <div><img className="img-fluid" src={image_2} alt="img" /></div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 p-5" data-aos="fade-up" data-aos-duration="1500" up>
                        <div className="page10_product">
                            <div><img className="img-fluid" src={image_3} alt="img" /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
            <FooTer />
        </>
    );
}

export default Page10;