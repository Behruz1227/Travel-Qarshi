import axios from "axios";
import { useEffect, useState } from "react";
import { apiTravel } from "../../api/api";
import "./style.scss";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import language from "./til.json";
import FooTer from "../../footer/FooTer";

function InfoRes() {

    const [restuarantInfo, setRestuarantInfo] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        let RestuarantId = sessionStorage.getItem("RestuarantId");
        let list = [];
        axios.get(apiTravel + "places/?category=5").then(res => {

            setRestuarantInfo(res.data.results.find(r => r.id == RestuarantId))
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
        setLang(lang === 'UZ' ? language.uz.page3Info : lang === 'EN' ? language.en.page3Info : language.ru.page3Info)
    }, []);

    const goPage = () => document.getElementById("booking__link").click();

    return (
        <div>
            {restuarantInfo.booking_link && restuarantInfo.booking_link
                ? <Link to={restuarantInfo.booking_link} id="booking__link" target="_blank"></Link>
                : <Link to={restuarantInfo.booking_link} id="booking__link"></Link>
            }
            <div className="page3__main-info" style={{ backgroundImage: `url(${restuarantInfo.image2})` }}>
                <div className="info3__main-box">
                    <p>
                        <span><Link to="/">{lang.restorant}</Link></span>
                        <span className="ms-3">/ <Link to="/restaurant">{lang.restorant2}</Link></span>
                        <span className="ms-3">/ {restuarantInfo.title}</span>
                    </p>
                    <h1>{restuarantInfo.title}</h1>
                    <Button onClick={goPage} color="warning" className="px-5 py-2 fw-bolder fs-5 rounded-0 mt-2 mt-sm-5" outline>{lang.btn}</Button>
                </div>
            </div>

            <div className="info3__description container">
                <p>{restuarantInfo.description}</p>
                {restuarantInfo.description2
                    ? <p>{restuarantInfo.description2}</p>
                    : ""
                }
                {restuarantInfo.description3
                    ? <p>{restuarantInfo.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={restuarantInfo.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {restuarantInfo.image2
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {restuarantInfo.image3
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {restuarantInfo.image4
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {restuarantInfo.image5
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {restuarantInfo.image6
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {restuarantInfo.image7
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {restuarantInfo.image8
                        ? <Col className="reatuarant3__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={restuarantInfo.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default InfoRes;