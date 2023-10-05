import React, { useEffect, useState } from "react";
import "./style.css";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import language from "./long/longHotel.json";
import { apiTravel } from "../api/api";
import Aos from "aos";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import FooTer from "../footer/FooTer";

function Page3() {

    const [restuarant, setRestuarant] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        Aos.init();
        getRestuarant();
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.long15 : lang === 'EN' ? language.en.long15 : language.ru.long15)
    }, []);

    // getRes
    async function getRestuarant() {
        let list = [];
        await axios.get(apiTravel + "places/?category=5").then(res => {
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
        setRestuarant(list)
    }

    const goRestuarantInfoPage = () => document.getElementById("restuarant").click();

    return (
        <div>
            <Link to="info" id="restuarant"></Link>

            <div className="page3_box">
                <h1 data-aos="fade-right" data-aos-duration="2000">{lang.name}</h1>
            </div>
            <div className="page3_info">
                <Container className="page3_card">
                    <Row className="w-100 mt-5">
                        {restuarant.length && restuarant.map((item, i) =>
                            <Col className="pb-5 col-12 col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-duration="2000">
                                <div className="page3_images" key={i} onClick={() => {
                                    // goPage(item.id);
                                    sessionStorage.setItem("RestuarantId", item.id);
                                    goRestuarantInfoPage();
                                }}>
                                    <div className="page3_img">
                                        <img className="img-fluid" src={item.image} alt="image" />
                                    </div>
                                    <h2>{item.title}</h2>
                                <Icon icon="teenyicons:arrow-left-solid" className="ms-2" width="50" height="50" rotate={2} vFlip={true} />
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
            <FooTer />
        </div >
    );
}

export default Page3;