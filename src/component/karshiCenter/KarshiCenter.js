import { Col, Container, Row } from "reactstrap";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiTravel, byId } from "../api/api";
import language from "./long/longHotel.json";
import Aos from "aos";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import FooTer from "../footer/FooTer";

function KarshiCenter() {

    const [hotel, setHotel] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        Aos.init();
        getHotels();
        
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.long : lang === 'EN' ? language.en.long : language.ru.long)
    }, []);

    // getHotel
    async function getHotels() {
        let list = [];
        await axios.get(apiTravel + "places/?category=4").then(res => {

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
        setHotel(list)
    }

    const goHotelInfoPage = () => document.getElementById("hotelInfo").click();

    return (
        <div className="karshi_background">

            <Link to="info" id="hotelInfo"></Link>

            <div className="page13__glavni">
                <h1 data-aos="fade-right" data-aos-duration="2000">{lang.name}</h1>
            </div>
            <Container className="page13_container mt-5">
                <Row className="w-100">
                    {hotel.length && hotel.map((item, i) =>
                        <Col onClick={() => {
                            sessionStorage.setItem("hotelId", item.id);
                            goHotelInfoPage();
                        }} className="col-12 col-md-6 col-lg-4 mt-4" key={i} data-aos="fade-up" data-aos-duration="2000">
                            <div className="page13_hotel-info">
                                <div className="page13_hover">
                                    <img className="img-fluid" src={item.image} alt="images" />
                                </div>
                                <h2>{item.title}</h2>
                                <Icon icon="teenyicons:arrow-left-solid" className="ms-2" width="50" height="50" rotate={2} vFlip={true} />
                            </div>
                        </Col>
                    )}
                </Row>
                <p className="pt-5 mt-5" ></p>
            </Container>
            <FooTer />
        </div>
    );
}

export default KarshiCenter;