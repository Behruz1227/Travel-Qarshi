import axios from "axios";
import { apiTravel } from "../../api/api";
import { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import FooTer from "../../footer/FooTer";
import language from "./til.json";
import NavbarMenu from "../../navbar/NavbarMenu";

function Info() {

    const [hotelInfo, setHotelInfo] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        let HotelId = sessionStorage.getItem("hotelId");
        let list = [];
        axios.get(apiTravel + "places/?category=4").then(res => {

            setHotelInfo(res.data.results.find(h => h.id == HotelId));
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

    const goPage = () => document.getElementById("booking__link").click();

    return (
        <div>
            <NavbarMenu />
            {hotelInfo.booking_link && hotelInfo.booking_link
                ? <Link to={hotelInfo.booking_link} id="booking__link" target="_blank"></Link>
                : <Link to={hotelInfo.booking_link} id="booking__link"></Link>
            }
            <div className="page13__main-info" style={{ backgroundImage: `url(${hotelInfo.image})` }}>
                <div className="info__main-box">
                    <p>
                        <span><Link to="/">{lang.hotel1}</Link></span>
                        <span className="ms-3">/ <Link to="/hotel">{lang.hotel2}</Link></span>
                        <span className="ms-3">/ {hotelInfo.title}</span>
                    </p>
                    <h1>{hotelInfo.title}</h1>
                    <Button onClick={goPage} color="warning" className="px-5 py-2 fw-bolder fs-5 rounded-0 mt-5" outline>{lang.btn}</Button>
                </div>
            </div>

            <div className="info__description container">
                <p>{hotelInfo.description}</p>
                {hotelInfo.description2
                    ? <p>{hotelInfo.description2}</p>
                    : ""
                }
                {hotelInfo.description3
                    ? <p>{hotelInfo.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={hotelInfo.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {hotelInfo.image2
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {hotelInfo.image3
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {hotelInfo.image4
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {hotelInfo.image5
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {hotelInfo.image6
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {hotelInfo.image7
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {hotelInfo.image8
                        ? <Col className="hotel__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={hotelInfo.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default Info;