import React from 'react';
import "./style.css";
import { Col, Container, Row } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { apiTravel, byId } from '../api/api';
import { useEffect } from 'react';
import Aos from 'aos';
import language from "./long/long14.json";
import { Link } from 'react-router-dom';
import FooTer from "../footer/FooTer";
import { Icon } from '@iconify/react';
import NavbarMenu from '../navbar/NavbarMenu';

function Page14() {

    const [resorts, setResorts] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        Aos.init();
        gitResorts();
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.long14 : lang === 'EN' ? language.en.long14 : language.ru.long14)
    }, []);

    // git resort
    async function gitResorts() {
        let list = [];
        await axios.get(apiTravel + "places/?category=7").then(res => {

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
        setResorts(list)
    }

    const goResortsPage = () => document.getElementById("resorts").click();

    return (
        <div className="page14_container mb-5">
            <NavbarMenu />
            <Link to="info" id='resorts'></Link>
            <div className='home-web14-page'>
                <div className="web14-one-home">
                    <p className="pt-3" data-aos="fade-down" data-aos-duration="2000">{lang.name}</p>
                </div>
            </div>

            <Container className='pb-5 mb-5 mt-5'>
                <Row className='w-100'>
                    {resorts.length && resorts.map((item, i) =>
                        <Col className='col-12 col-md-6 col-lg-4 mt-5' key={i} data-aos="fade-up" data-aos-duration="2000">
                            <div className='page14_card-info' onClick={() => {
                                goResortsPage();
                                sessionStorage.setItem("resortsId", item.id);
                            }}>
                                <div className='page14_hover'>
                                    <img className='img-fluid' src={item.image} alt="img" />
                                </div>
                                <h2>{item.title}</h2>
                                <Icon icon="teenyicons:arrow-left-solid" className="ms-2" width="50" height="50" rotate={2} vFlip={true} />
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>

            <FooTer />
        </div>
    );
}

export default Page14;