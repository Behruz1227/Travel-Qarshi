import axios from "axios";
import "./style.scss";
import { useEffect, useState } from "react";
import { apiTravel } from "../../api/api";
import { Link } from "react-router-dom";
import FooTer from "../../footer/FooTer";
import { Col, Row } from "reactstrap";
import language from "./til.json";

function InfoEnPlase() {

    const [enPlase, setEnPlase] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        let enPlaseId = sessionStorage.getItem("enPlaseId");
        let list = [];

        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.enPlase : lang === 'EN' ? language.en.enPlase : language.ru.enPlase)

        axios.get(apiTravel + "places/?category=8").then(res => {

            setEnPlase(res.data.results.find(r => r.id == enPlaseId))
            let lang = localStorage.getItem('lang', "UZ");

            if (lang === 'UZ') {
                res.data.results.map(c => {
                    c.title = c.title_uz
                    c.description = c.description_uz
                    c.description2 = c.description2_uz
                    c.description3 = c.description3_uz
                    list.push(c);
                });
            } else if (lang === 'EN') {
                res.data.results.map(c => {
                    c.title = c.title_en
                    c.description = c.description_en
                    c.description2 = c.description2_en
                    c.description3 = c.description3_en
                    list.push(c);
                });
            } else if (lang === 'RU') {
                res.data.results.map(c => {
                    c.title = c.title_ru
                    c.description = c.description_ru
                    c.description2 = c.description2_ru
                    c.description3 = c.description3_ru
                    list.push(c);
                });
            }
        });
    }, []);

    // const goPage = () => document.getElementById("booking__link").click();

    return (
        <div>
            {/* {enPlase.booking_link && enPlase.booking_link
                ? <Link to={enPlase.booking_link} id="booking__link" target="_blank"></Link>
                : <Link to={enPlase.booking_link} id="booking__link"></Link>
            } */}

            <div className="page16__main-info" style={{ backgroundImage: `url(${enPlase.image})` }}>
                <div className="info16__main-box">
                    <p>
                        <span><Link to="/">{lang.enPlase}</Link></span>
                        <span className="ms-3">/ <Link to="/entertainment/places">{lang.enPlase2}</Link></span>
                        <span className="ms-3">/ {enPlase.title}</span>
                    </p>
                    <h1>{enPlase.title}</h1>
                    {/* <Button onClick={goPage} color="warning" className="px-5 py-2 fw-bolder fs-5 rounded-0 mt-5" outline>{lang.btn}</Button> */}
                </div>
            </div>

            <div className="info16__description container">
                <p>{enPlase.description}</p>
                {enPlase.description2
                    ? <p>{enPlase.description2}</p>
                    : ""
                }
                {enPlase.description3
                    ? <p>{enPlase.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={enPlase.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {enPlase.image2
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {enPlase.image3
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {enPlase.image4
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {enPlase.image5
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {enPlase.image6
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {enPlase.image7
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {enPlase.image8
                        ? <Col className="enPlase16__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={enPlase.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default InfoEnPlase;