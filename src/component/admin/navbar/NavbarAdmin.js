import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Input, NavbarText } from 'reactstrap';
import "./style.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import language from '../long/long.json';
// import { byId } from '../api/api';
// import logo from "./logo.gif";

function NavbarMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    // const [lang, setLang] = useState('');

    // useEffect(() => {
    //     if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    //     let lang = localStorage.getItem('lang');
    //     setLang(lang === 'UZ' ? language.uz.nav : lang === 'EN' ? language.en.nav : language.ru.nav)
    // }, []);

    // function editLong() {
    //     localStorage.setItem('lang', byId('lang'));
    //     window.location.reload();
    // }

    return (
        <div>
            <Navbar expand="lg" fixed='top' className='navbar-menu__brend'>
                <NavbarBrand className='logo__nav-brend'>
                    <Link to="/admin">
                        {/* <img  src="" alt="img" /> */}
                        <span>Travel Uz <br />Kashkadaryo</span>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className='bg__collepse' />
                <Collapse className='nav__collapse' navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem><li><Link onClick={toggle} to="/admin hotel">Mehmonxanalar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin resorts">Dam olish</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin restaurant">Restoranlar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin entertainment/places">Ko'ngilochar joylar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin historical/places">Tarixiy joylar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin nature">Tabiat</Link></li></NavItem>
                    </Nav>
                    {/* <NavbarText className='__language'>
                        <Input className='width__nav' type="select" id="lang" onChange={editLong}>
                            <option selected={localStorage.getItem('lang') === 'EN'}>EN</option>
                            <option selected={localStorage.getItem('lang') === 'RU'}>RU</option>
                            <option selected={localStorage.getItem('lang') === 'UZ'}>UZ</option>
                        </Input>
                    </NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}
export default NavbarMenu;