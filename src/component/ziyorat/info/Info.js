import axios from "axios";
import { apiTravel } from "../../api/api";
import { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import FooTer from "../../footer/FooTer";
import language from "./til.json";
import NavbarMenu from "../../navbar/NavbarMenu";

function InfoZiyorat() {

    const [ziyoratInfo, setziyoratInfo] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        let ziyoratId = sessionStorage.getItem("ziyoratId");
        let list = [];
        axios.get(apiTravel + "places/?category=9").then(res => {

            setziyoratInfo(res.data.results.find(z => z.id == ziyoratId));
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

        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.hotelInfo : lang === 'EN' ? language.en.hotelInfo : language.ru.hotelInfo)
    }, []);

    // const goPage = () => document.getElementById("booking__link").click();

    return (
        <div>
            <NavbarMenu />
            {/* {ziyoratInfo.booking_link && ziyoratInfo.booking_link
                ? <Link to={ziyoratInfo.booking_link} id="booking__link" target="_blank"></Link>
                : <Link to={ziyoratInfo.booking_link} id="booking__link"></Link>
            } */}
            <div className="ziyorat__main-info" style={{ backgroundImage: `url(${ziyoratInfo.image})` }}>
                <div className="ziyorat__main-box">
                    <p>
                        <span><Link to="/">{lang.hotel1}</Link></span>
                        <span className="ms-3">/ <Link to="/ziyorat">{lang.hotel2}</Link></span>
                        <span className="ms-3">/ {ziyoratInfo.title}</span>
                    </p>
                    <h1>{ziyoratInfo.title}</h1>
                    {/* <Button onClick={goPage} color="warning" className="px-5 py-2 fw-bolder fs-5 rounded-0 mt-5" outline>{lang.btn}</Button> */}
                </div>
            </div>

            <div className="ziyorat__description container">
                <p>{ziyoratInfo.description}</p>
                {ziyoratInfo.description2
                    ? <p>{ziyoratInfo.description2}</p>
                    : ""
                }
                {ziyoratInfo.description3
                    ? <p>{ziyoratInfo.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={ziyoratInfo.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {ziyoratInfo.image2
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {ziyoratInfo.image3
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {ziyoratInfo.image4
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {ziyoratInfo.image5
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {ziyoratInfo.image6
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {ziyoratInfo.image7
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {ziyoratInfo.image8
                        ? <Col className="ziyorat__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={ziyoratInfo.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default InfoZiyorat;