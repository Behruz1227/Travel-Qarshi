import React, { useEffect, useState } from "react";
import "./style.css";
import { Col, Row } from "reactstrap";
// import { imagesPage_5 } from "./img/img";
import axios from "axios";
import { apiTravel } from "../api/api";
import { Icon } from "@iconify/react";
import FooTer from "../footer/FooTer";
import { Link } from "react-router-dom";
import language from "./til.json";
import NavbarMenu from "../navbar/NavbarMenu";

function Page5() {

    const [natures, setNatures] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        getNature();

        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.natureInfo : lang === 'EN' ? language.en.natureInfo : language.ru.natureInfo)
    }, []);

    // getNature
    async function getNature() {
        let list = [];
        await axios.get(apiTravel + "places/?category=3").then(res => {

            let lang = localStorage.getItem('lang', "UZ");
            if (lang === 'UZ') {
                res.data.results.map(c => {
                    c.title = c.title_uz
                    c.description = c.description_uz
                    list.push(c);
                });
            } else if (lang === 'EN') {
                res.data.results.map(c => {
                    c.title = c.title_en
                    c.description = c.description_en
                    list.push(c);
                });
            } else if (lang === 'RU') {
                res.data.results.map(c => {
                    c.title = c.title_ru
                    c.description = c.description_ru
                    list.push(c);
                });
            }
        });
        setNatures(list)
    }

    console.log(natures);

    const goNatureInfoPage = () => document.getElementById("natureInfo").click();

    return (
        <>
            <NavbarMenu />
            <Link to="info" id="natureInfo"></Link>
            <div className="container page5_container mt-5 pt-3">
                <Row className="w-100">
                    <Col className="col-12 col-lg-7 pe-0 pe-lg-4 page5_one">
                        <h1>{lang.name}</h1>
                        <Row>
                            {natures.length && natures.map((item, i) =>
                                <Col className="col-12 col-md-6 py-3 mb-4" key={i} data-aos="zoom-in-right" data-aos-duration="3000"
                                    onClick={() => {
                                        goNatureInfoPage();
                                        sessionStorage.setItem("natureId", item.id);
                                    }}>
                                    <div className="page5__one-shadow">
                                        <div className="page5_images">
                                            <img src={item.image} alt="img" />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <Icon icon="teenyicons:arrow-left-solid" className="ms-2" width="50" height="50" rotate={2} vFlip={true} />
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col className="page5_two d-none d-lg-inline col-lg-5"></Col>
                </Row>
            </div>
            <FooTer />
        </>
    );
}

export default Page5;