import React, { useEffect, useState } from 'react';
import './homeNav.scss'
import { Link } from "react-router-dom";
import { Col, Input, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import { byId } from "../api/api";
import language from '../long/long.json';

function HomeNavbar() {

    const [menu, setMenu] = useState(false);
    const [lang, setLang] = useState('');
    const openMenu = () => setMenu(!menu);

    function editLong() {
        localStorage.setItem('lang', byId('lang'));
        window.location.reload();
    }

    useEffect(() => {
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.nav : lang === 'EN' ? language.en.nav : language.ru.nav)
    }, []);

    //TODO tepadan tushuvchi menu bar
    return (
        <>
            <div className="nav-main">
                <ul className="nav-list" id="list">
                    <li>
                        <Link to="/">Travel Uz <br />Kashkadarya</Link>
                    </li>
                    <li className='ms-3'>
                        <Link to="/hotel">{lang.nav1}</Link>
                    </li>
                    <li>
                        <Link to="/resorts">{lang.nav2}</Link>
                    </li>
                    <li>
                        <Link to="/restaurant">{lang.nav3}</Link>
                    </li>
                    <li>
                        <Link to="/entertainment/places">{lang.nav4}</Link>
                    </li>
                    <li>
                        <Link to="/historical/places">{lang.nav5}</Link>
                    </li>
                    <li>
                        <Link to="/nature">{lang.nav6}</Link>
                    </li>
                    <li className="nav-select">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <Input type="select" id="lang" onChange={editLong}>
                            <option selected={localStorage.getItem('lang') === 'EN'}>EN</option>
                            <option selected={localStorage.getItem('lang') === 'RU'}>RU</option>
                            <option selected={localStorage.getItem('lang') === 'UZ'}>UZ</option>
                        </Input>
                    </li>
                    <li className="nav-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor"
                            className="bi bi-list" viewBox="0 0 16 16" onClick={openMenu}>
                            <path fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </li>
                </ul>
            </div>
            <Offcanvas isOpen={menu} toggle={openMenu} direction="top" className="nav-menu-bar">
                <OffcanvasHeader toggle={openMenu}></OffcanvasHeader>
                <OffcanvasBody>
                    <ul className="nav-media-list">
                        <Row className='w-100 me-4'>
                            <Col className='col-6 float-start me-4 pe-3'>
                                <li>
                                    <Link to="/">Travel Uz <br />Kashkadarya</Link>
                                </li>
                                <li >
                                    <Link to="/hotel">{lang.nav1}</Link>
                                </li>
                                <li>
                                    <Link to="/resorts">{lang.nav2}</Link>
                                </li>
                                <li>
                                    <Link to="/restaurant">{lang.nav3}</Link>
                                </li>
                            </Col>
                            <Col className='col-5 mt-4'>
                                <li>
                                    <Link to="/entertainment/places">{lang.nav4}</Link>
                                </li>
                                <li>
                                    <Link to="/historical/places">{lang.nav5}</Link>
                                </li>
                                <li>
                                    <Link to="/nature">{lang.nav6}</Link>
                                </li>
                                <li className="nav-select">
                                    <Input type="select" id="lang" onChange={editLong}>
                                        <option>EN</option>
                                        <option>RU</option>
                                        <option>UZ</option>
                                    </Input>
                                </li>
                            </Col>
                        </Row>


                    </ul>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

export default HomeNavbar;