import { useEffect, useState } from 'react';
import "./style.css";
import { Button, Card, CardBody, CardText, Col, Container, Row } from 'reactstrap';
import {
    appStoreBtn, googlePlayBtn, icon2,
    icon4, icon5, icon6, qrCode1, qrCode2, travel1, travel2, travel3,
    travel4, travel5, travelQRcode
} from './img/image';
import FooTer from '../footer/FooTer';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import axios from 'axios';
import { apiTravel } from "../api/api";
import language from "./homeJson/home.json";
import NavbarMenu from "../navbar/NavbarMenu";
import Loading from '../loading/Loading';

function Home() {

    const [placeCategory, setPlaceCategory] = useState([]);
    const [placeCategoryOne, setPlaceCategoryOne] = useState([]);
    const [lang, setLang] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Aos.init();
        getPlaceCategory();
        setLoading(true);
        axios.get(apiTravel + "place-categories/9/").then(res => setPlaceCategoryOne(res.data));

        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.home : lang === 'EN' ? language.en.home : language.ru.home)
    }, []);

    async function getPlaceCategory() {
        let list = [];
        await axios.get(apiTravel + "place-categories/").then(res => {

            // setPlaceCategory(res.data);
            let lang = localStorage.getItem('lang', "UZ");
            if (lang === 'UZ') {
                res.data.map(c => {
                    c.title = c.title_uz
                    list.push(c);
                });
            } else if (lang === 'EN') {
                res.data.map(c => {
                    c.title = c.title_en
                    list.push(c);
                });
            } else if (lang === 'RU') {
                res.data.map(c => {
                    c.title = c.title_ru
                    list.push(c);
                });
            }

        });
        setPlaceCategory(list)
    }

    // links function
    const page9 = () => document.getElementById("page9").click();
    const page10 = () => document.getElementById("page10").click();
    const page11 = () => document.getElementById("page11").click();
    const page12 = () => document.getElementById("page12").click();
    const page17 = () => document.getElementById("Oqsaroy").click();
    const page18 = () => document.getElementById("page18").click();
    const page19 = () => document.getElementById("page19").click();
    const page20 = () => document.getElementById("page20").click();
    const page21 = () => document.getElementById("page21").click();

    const initialPlaceCategory = placeCategory;

    const goPage = (i) => {
        if (i === 0) {
            document.getElementById("Ziyorat").click();
        } else if (i === 1) {
            document.getElementById("page16").click();
        } else if (i === 2) {
            document.getElementById("page14").click();
        } else if (i === 3) {
            document.getElementById("page7").click();
        } else if (i === 4) {
            document.getElementById("page3").click();
        } else if (i === 5) {
            document.getElementById("page13").click();
        } else if (i === 6) {
            document.getElementById("page8").click();
        }
    }

    return (
        <div style={{ overflow: "hidden" }}>

            <NavbarMenu />

            <Link to="/historical/places" id='page7'></Link>
            <Link to="/nature" id='page8'></Link>
            <Link to="/Aroma Bakery" id='page9'></Link>
            <Link to="/Vatanparvarlar bog'i" id='page10'></Link>
            <Link to="/Oromgoh" id='page11'></Link>
            <Link to="/Basseyn" id='page12'></Link>
            <Link to="/hotel" id='page13'></Link>
            <Link to="/resorts" id='page14'></Link>
            <Link to="/restaurant" id='page3'></Link>
            <Link to="/entertainment/places" id='page16'></Link>
            <Link to="/Oqsaroy" id='Oqsaroy'></Link>
            <Link to="/Xo'ja Jarroh yodgorlik majmuasi" id='page18'></Link>
            <Link to="/Odina masjidi" id='page19'></Link>
            <Link to="/page17" id='page17'></Link>
            <Link to="/abu-ubayda" id='page18'></Link>
            <Link to="/odina-madrasasi" id='page19'></Link>
            <Link to="/AbdulazizJo'ja madrasasi" id='page20'></Link>
            <Link to="/Sardoba" id='page21'></Link>
            <Link to="/ziyorat" id='Ziyorat'></Link>

            <div className='home_qash'>
                {/* {loading ? */}
                    <div className='home_black-bg'>
                        <div>
                            <Container className='home-svg'>
                                <h4 className='me-3 pt-5' data-aos="fade-left" data-aos-duration="2000" x="50%" y="50%" dy=".35em" text-anchor="middle">{lang.travelQash1}</h4>
                                <h4 className='me-5 ' data-aos="fade-left" data-aos-duration="2000" x="50%" y="50%" dy=".35em" text-anchor="middle">{lang.travelQash2}</h4>
                                <Row className='text-start category-row' data-aos="zoom-in" data-aos-duration="2000">
                                    {initialPlaceCategory.length && initialPlaceCategory.slice().reverse().map((item, i) =>
                                        <Col className='d-none d-md-inline d-lg-flex home_radial-img' key={i}>
                                            <div onClick={() => goPage(i)}>
                                                <img className='img-fluid' src={item.image} alt="img1" />
                                            </div>
                                            <p>{item.title}</p>
                                        </Col>
                                    )}
                                    <Col className='d-md-none col-6 col-sm-3 col-lg-2 home_radial-img'>
                                        <div onClick={() => goPage(6)}>
                                            <img className='img-fluid' src={placeCategoryOne.image} alt="img1" />
                                        </div>
                                        <p>{placeCategoryOne.title}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                {/* } */}
                {/* {loading ? <Loading /> : ""} */}
            </div>
            <div className='kul'>
                <p>{lang.welcome}</p>
            </div>
            <div className="cardsColor pb-5">
                <Container >
                    <Row className='pt-5'></Row>
                    <h3 className='home_travel'>{lang.homePlace}</h3>
                    <Row>
                        <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in" data-aos-duration="1500">
                            <Card onClick={page17} className='home_travel-card'>
                                <div className='home_travel-child'>
                                    <img alt="Sample" src={travel1} />

                                </div>
                                <CardBody className='ps-0'>
                                    <CardText>{lang.homePlace1}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in" data-aos-duration="1500">
                            <Card onClick={page18} className='home_travel-card'>
                                <div className='home_travel-child'>
                                    <img alt="Sample" src={travel2} />
                                </div>
                                <CardBody className='ps-0'>
                                    <CardText>{lang.homePlace2}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in" data-aos-duration="1500">
                            <Card onClick={page19} className='home_travel-card'>
                                <div className='home_travel-child'>
                                    <img alt="Sample" src={travel3} />
                                </div>
                                <CardBody className='ps-0'>
                                    <CardText>{lang.homePlace3}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in" data-aos-duration="1500">
                            <Card onClick={page20} className='home_travel-card'>
                                <div className='home_travel-child'>
                                    <img alt="Sample" src={travel4} />
                                </div>
                                <CardBody className='ps-0'>
                                    <CardText>{lang.homePlace4}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in" data-aos-duration="1500">
                            <Card onClick={page21} className='home_travel-card'>
                                <div className='home_travel-child'>
                                    <img alt="Sample" src={travel5} />
                                </div>
                                <CardBody className='ps-0'>
                                    <CardText>{lang.homePlace5}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='near_city'>
                <div className='near_city-bg'>
                    <Container>
                        <h3 data-aos="fade-right mt-5" data-aos-duration="2000">{lang.cityHead}</h3>
                        <p className='home_nearcity-parf mb-5' data-aos="fade-right" data-aos-duration="2000">{lang.cityInfo}</p>

                        <Row className='w-100 homeRow'>
                            <Col className="col-6 col-md-4 col-lg-2 home_icon-img" data-aos="flip-left" data-aos-duration="1500">
                                <div className='home_icon-hover'>
                                    <div onClick={page9}>
                                        <img src={icon2} alt="iconImg" />
                                    </div>
                                </div>
                                <p onClick={page9} className='text-center'>{lang.cafe1}</p>
                            </Col>
                            <Col className="col-6 col-md-4 col-lg-2 home_icon-img" data-aos="flip-left" data-aos-duration="1500">
                                <div className='home_icon-hover'>
                                    <div onClick={page10}>
                                        <img src={icon4} alt="iconImg" />
                                    </div>
                                </div>
                                <p onClick={page10} className='text-center'>{lang.cafe2}</p>
                            </Col>
                            <Col className="col-6 col-md-4 col-lg-2 home_icon-img" data-aos="flip-left" data-aos-duration="1500">
                                <div className='home_icon-hover'>
                                    <div onClick={page12}>
                                        <img src={icon6} alt="iconImg" />
                                    </div>
                                </div>
                                <p onClick={page12} className='text-center'>{lang.cafe3}</p>
                            </Col>
                            <Col className="col-6 col-md-4 col-lg-2 home_icon-img" data-aos="flip-right" data-aos-duration="1500">
                                <div className='home_icon-hover'>
                                    <div onClick={page11}>
                                        <img src={icon5} alt="iconImg" />
                                    </div>
                                </div>
                                <p onClick={page11} className='text-center'>{lang.cafe4}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='qr_code-main'>
                <div className='qrcode_bg'>
                    <Container>
                        <Row>
                            <Col className='col-12 col-md-7'>
                                <h3>The standard chunk of Lorem <br /> Ipsum used since</h3>
                                <div className='qr_code-links'>
                                    <img src={qrCode1} alt="imgQR" />
                                    <img src={qrCode2} alt="imgQR" />
                                </div>
                                <div className='qr_code-btn'>
                                    <img src={appStoreBtn} alt="btnImg" />
                                    <img src={googlePlayBtn} alt="btnImg" />
                                    <div className='qr_code-call d-block d-xl-inline'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor"
                                            className="me-1 bi bi-telephone" viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                        <span>94 177 77 77</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-5 d-none d-md-inline travel_qrcode'>
                                <img className='img-fluid' src={travelQRcode} alt="travelqr" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* footer */}
            <FooTer />
        </div>
    );
}

export default Home;