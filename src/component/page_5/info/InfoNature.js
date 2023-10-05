import axios from "axios";
import { useEffect, useState } from "react";
import { apiTravel } from "../../api/api";
import { Link } from "react-router-dom";
import "./style.scss";
import { Col, Row } from "reactstrap";
import FooTer from "../../footer/FooTer";
import language from "../til.json";

function InfoNature() {

    const [natureInfo, setNatureInfo] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        let natureId = sessionStorage.getItem("natureId");
        let list = [];
        axios.get(apiTravel + "places/?category=3").then(res => {

            setNatureInfo(res.data.results.find(n => n.id == natureId));
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
        setLang(lang === 'UZ' ? language.uz.natureInfo : lang === 'EN' ? language.en.natureInfo : language.ru.natureInfo)
    }, []);

    return (
        <div>
            <div className="page5__main-info" style={{ backgroundImage: `url(${natureInfo.image})` }}>
                <div className="info5__main-box">
                    <p>
                        <span><Link to="/">{lang.title}</Link></span>
                        <span className="ms-3">/ <Link to="/nature">{lang.name}</Link></span>
                        <span className="ms-3">/ {natureInfo.title}</span>
                    </p>
                    <h1>{natureInfo.title}</h1>
                </div>
            </div>

            <div className="info5__description container">
                <p>{natureInfo.description}</p>
                {natureInfo.description2
                    ? <p>{natureInfo.description2}</p>
                    : ""
                }
                {natureInfo.description3
                    ? <p>{natureInfo.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={natureInfo.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {natureInfo.image2
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {natureInfo.image3
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {natureInfo.image4
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {natureInfo.image5
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {natureInfo.image6
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {natureInfo.image7
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {natureInfo.image8
                        ? <Col className="nature__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={natureInfo.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default InfoNature;