import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavbarText } from 'reactstrap';
import "./style.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavbarAdmin() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="lg" fixed='top' className='navbar-menu__brend'>
                <NavbarToggler onClick={toggle} className='bg__collepse' />
                <Collapse className='nav__collapse' navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem><li><Link onClick={toggle} to="/admin hotel">Mehmonxanalar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin restoran">Restoranlar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin resorts">Dam olish</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin entertainment/places">Ko'ngilochar joylar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin historical/places">Tarixiy joylar</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin nature">Tabiat</Link></li></NavItem>
                        <NavItem><li><Link onClick={toggle} to="/admin ziyorat">Ziyoratgohlar</Link></li></NavItem>
                    </Nav>
                    <NavbarText>
                        <Link style={{ color: "white" }} to="/">Bosh Sahifa</Link>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default NavbarAdmin;