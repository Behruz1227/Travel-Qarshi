import React, { useEffect, useState } from 'react';
import './style.css';
import { Col, Container, Row } from "reactstrap";
import axios from 'axios';
import { apiTravel } from '../api/api';
import { Link } from 'react-router-dom';
import language from "./long/longHotel.json";
import Aos from 'aos';
import FooTer from "../footer/FooTer";
import { Icon } from '@iconify/react';
import NavbarMenu from '../navbar/NavbarMenu';

function Page16() {

    const [entertainment, setEntertainment] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        Aos.init();
        getEntertainmentplaces();
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.long16 : lang === 'EN' ? language.en.long16 : language.ru.long16)
    }, []);

    // get Entertainment places
    async function getEntertainmentplaces() {
        let list = [];
        await axios.get(apiTravel + "places/?category=8").then(res => {
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
        setEntertainment(list)
    }

    const goEnPlasesPage = () => document.getElementById("enPlases").click();

    return (
        <div className='home-one-page'>
            <NavbarMenu />
            <Link to="info" id='enPlases'></Link>
            <Container>
                <div className='one-home'>
                    <p className="pt-3" data-aos="fade-down" data-aos-duration="2000">{lang.name}</p>
                </div>
            </Container>
            <div className="image">
                <Container className='page16_uroven'>
                    <Row className='w-100'>
                        {entertainment.length && entertainment.map((item, i) =>
                            <Col className='col-12 col-md-6 col-lg-4 mt-5' key={i}
                                onClick={() => {
                                    goEnPlasesPage();
                                    sessionStorage.setItem("enPlaseId", item.id);
                                }}
                                data-aos="zoom-in" data-aos-duration="1500">
                                <div className='page16_imges-card'>
                                    <div>
                                        <img src={item.image} alt="img" />
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
        </div>
    );
}

export default Page16;