import React, { useEffect, useState } from 'react'
import "./web12.scss"
import { Button, Col, Container, Row } from 'reactstrap';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import language from "./til/til.json";
import { Link } from 'react-router-dom';
import FooTer from "../footer/FooTer";
import NavbarMenu from '../navbar/NavbarMenu';

function Web12() {

  const [lang, setlang] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setlang(lang === 'UZ' ? language.uz.til12 : lang === 'EN' ? language.en.til12 : language.ru.til12)
  }, []);

  const goBasseyn = () => document.getElementById("basseynId").click();

  return (
    <div>
      <NavbarMenu />
      <Link to="https://www.youtube.com/watch?v=lzA52i5VG48" target='_blank' id='basseynId'></Link>
      <div className='home-web12-page'>
        <div className="web12-one-home">
          <p className='pb-4' data-aos="fade-down" data-aos-duration="2000">{lang.title}</p>
          <p data-aos="fade-up" data-aos-duration="2000">{lang.info}</p>
          <Button data-aos="fade-up" data-aos-duration="2000" onClick={goBasseyn} color='warning' outline className='px-5 py-2 fs-5 fw-bolder rounded-0 mt-3'>{lang.btn}</Button>
        </div>
      </div>
      <Container className='padding_class pt-5 mt-5 pb-5 mb-5'>
        <Row className='w-100'>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src={img1} alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src={img2} alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://aniq.uz/photos/news/hkt5hEidJTKlaWH.jpeg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://i.ytimg.com/vi/UhSGnH-waiI/maxresdefault.jpg" alt="img" />
            </div>
          </Col>

          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://darakchi.uz/storage/32/fc/c5/187323/conversions/photo_2022-06-05_14-15-28-xl.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://anhor.uz/wp-content/uploads/2020/11/21106.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://pools.uz/components/com_mtree/img/listings/m/564.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://pools.uz/components/com_mtree/img/listings/m/557.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page12_card'>
              <img src="https://daryo.uz/cache/2015/12/%D0%9A%D0%BE%D1%81%D1%82%D0%B0-680x445.jpg" alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
      <FooTer />
    </div>
  )
}

export default Web12