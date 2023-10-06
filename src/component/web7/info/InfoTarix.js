import axios from "axios";
import { useEffect, useState } from "react";
import { apiTravel } from "../../api/api";
import "./style.scss";
import { Link } from "react-router-dom";
import FooTer from "../../footer/FooTer";
import { Col, Row } from "reactstrap";
import language from "./til.json";
import NavbarMenu from "../../navbar/NavbarMenu";

function TarixInfo() {

    const [historicalInfo, setHistoricalInfo] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {

        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.tarix : lang === 'EN' ? language.en.tarix : language.ru.tarix)

        let historicalId = sessionStorage.getItem("historicalId");
        let list = [];
        axios.get(apiTravel + "places/?category=6").then(res => {
            setHistoricalInfo(res.data.results.find(h => h.id == historicalId))
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

    return (
        <div>
            <NavbarMenu />
            <div className="page7__main-info" style={{ backgroundImage: `url(${historicalInfo.image})` }}>
                <div className="info7__main-box">
                    <p>
                        <span><Link to="/">{lang.tarix}</Link></span>
                        <span className="ms-3">/ <Link to="/historical/places">{lang.tarix2}</Link></span>
                        <span className="ms-3">/ {historicalInfo.title}</span>
                    </p>
                    <h1>{historicalInfo.title}</h1>
                    {/* <Button onClick={goPage} color="warning" className="px-5 py-2 fw-bolder fs-5 rounded-0 mt-2 mt-sm-5" outline>{lang.btn}</Button> */}
                </div>
            </div>

            <div className="info7__description container">
                <p>{historicalInfo.description}</p>
                {historicalInfo.description2
                    ? <p>{historicalInfo.description2}</p>
                    : ""
                }
                {historicalInfo.description3
                    ? <p>{historicalInfo.description3}</p>
                    : ""
                }
                <Row className="w-100" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
                    <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                        <div>
                            <img src={historicalInfo.image} className="img-fluid" alt="img" />
                        </div>
                    </Col>
                    {historicalInfo.image2
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {historicalInfo.image3
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {historicalInfo.image4
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image4} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {historicalInfo.image5
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image5} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {historicalInfo.image6
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image6} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {historicalInfo.image7
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image7} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                    {historicalInfo.image8
                        ? <Col className="historicalInfo7__info-images col-12 col-md-6 col-lg-4">
                            <div>
                                <img src={historicalInfo.image8} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        : ""}
                </Row>
            </div>
            <FooTer />
        </div>
    );
}

export default TarixInfo;