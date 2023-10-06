import { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { apiTravel } from "../../api/api";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import FooTer from "../../footer/FooTer";
import language from "./til.json";
import NavbarMenu from "../../navbar/NavbarMenu";

function InfoResorts() {

    const [resortsInfo, setResortsInfo] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        let ResortsId = sessionStorage.getItem("resortsId");
        let list = [];

        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.resortsInfo : lang === 'EN' ? language.en.resortsInfo : language.ru.resortsInfo)

        axios.get(apiTravel + "places/?category=7").then(res => {

            setResortsInfo(res.data.results.find(r => r.id == ResortsId));
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

    const goPage = () => document.getElementById("booking__link").click();

    return (
        <div>
            <NavbarMenu />
            {resortsInfo.booking_link && resortsInfo.booking_link
                ? <Link to={resortsInfo.booking_link} id="booking__link" target="_blank"></Link>
                : <Link to={resortsInfo.booking_link} id="booking__link"></Link>
            }

            <div className="page14__main-info" style={{ backgroundImage: `url(${resortsInfo.image})` }}>
                <div className="info14__main-box">
                    <p>
                        <span><Link to="/">{lang.resortsInfo}</Link></span>
                        <span className="ms-3">/ <Link to="/resorts">{lang.resortsInfo2}</Link></span>
                        <span className="ms-3">/ {resortsInfo.title}</span>
                    </p>
                    <h1>{resortsInfo.title}</h1>
                </div>
            </div>

            <div className="info14__description container">
                <p>{resortsInfo.description}</p>
                {resortsInfo.description2
                    ? <p>{resortsInfo.description2}</p>
                    : ""
                }
                {resortsInfo.description3
                    ? <p>{resortsInfo.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={resortsInfo.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {resortsInfo.image2
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {resortsInfo.image3
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {resortsInfo.image4
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {resortsInfo.image5
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {resortsInfo.image6
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {resortsInfo.image7
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {resortsInfo.image8
                        ? <Col className="resortsInfo14__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={resortsInfo.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default InfoResorts;