import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Input, NavbarText, Button} from 'reactstrap';
import "./menuStyle.css";
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import language from '../long/long.json';
import {byId} from '../api/api';
import logo from "./logo.gif";

function NavbarMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [lang, setLang] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.nav : lang === 'EN' ? language.en.nav : language.ru.nav)
    }, []);

    function editLong() {
        localStorage.setItem('lang', byId('lang'));
        window.location.reload();
    }

    const goLogin = () => document.getElementById("goLogin").click();

    return (
        <div>
            <Link id="goLogin" to="/login"></Link>
            <Navbar expand="lg" fixed='top' className='navbar-menu__brend'>
                <NavbarBrand className='logo__nav-brend'>
                    <Link to="/">
                        <img width="170" height="55" src={logo} alt="img"/>
                        {/* <span>Travel Uz <br />Kashkadaryo</span> */}
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className='bg__collepse'/>
                <Collapse className='nav__collapse' navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <li><Link onClick={toggle} to="/ziyorat">{lang.nav7}</Link></li>
                        </NavItem>
                        <NavItem>
                            <li><Link onClick={toggle} to="/entertainment/places">{lang.nav4}</Link></li>
                        </NavItem>
                        <NavItem>
                            <li><Link onClick={toggle} to="/resorts">{lang.nav2}</Link></li>
                        </NavItem>
                        <NavItem>
                            <li><Link onClick={toggle} to="/historical/places">{lang.nav5}</Link></li>
                        </NavItem>
                        <NavItem>
                            <li><Link onClick={toggle} to="/restaurant">{lang.nav3}</Link></li>
                        </NavItem>
                        <NavItem>
                            <li><Link onClick={toggle} to="/hotel">{lang.nav1}</Link></li>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <li><Link onClick={toggle} to="/nature">{lang.nav6}</Link></li>*/}
                        {/*</NavItem>*/}
                    </Nav>
                    <Button onClick={goLogin} color="warning" outline className="me-2 fw-bolder">login</Button>
                    <NavbarText className='__language'>
                        <Input className='width__nav' type="select" id="lang" onChange={editLong}>
                            <option selected={localStorage.getItem('lang') === 'EN'}>EN</option>
                            <option selected={localStorage.getItem('lang') === 'RU'}>RU</option>
                            <option selected={localStorage.getItem('lang') === 'UZ'}>UZ</option>
                        </Input>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarMenu;