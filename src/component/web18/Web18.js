import React, { useEffect, useState } from 'react';
import "./web18.scss";
import language from "./long/long.json";
import { Col, Row } from 'reactstrap';
import FooTer from "../footer/FooTer";
import NavbarMenu from '../navbar/NavbarMenu';

function Web18() {

  const [lang, setLang] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long18 : lang === 'EN' ? language.en.long18 : language.ru.long18)
  }, []);

  return (
    <>
      <NavbarMenu />
      <div className="web18-top">
        <div className=' web18-color'>
          <h1>{lang.name}</h1>
        </div>
      </div>
      <div className="web18-img container">
        <p>{lang.text}</p>
        <Row className='w-100'>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page18_card'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PnzZx1RuJao_knIG2mevouN_7RBuJ-DJ3yd5EhDHg7Jh5LR09fUyI67PbIgy3cdbp5c&usqp=CAU" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page18_card'>
              <img src="https://toucanslandmarks.s3.amazonaws.com/media/com_scatalog/images/listings/m/2020072309251223660.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page18_card'>
              <img src="https://toucanslandmarks.s3.amazonaws.com/media/com_scatalog/images/listings/m/2020072309251223665.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page18_card'>
              <img src="https://i6.otzovik.com/2018/05/21/6494261/img/5030091.jpeg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page18_card'>
              <img src="https://i6.otzovik.com/2018/05/21/6494261/img/27631630.jpeg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page18_card'>
              <img src="https://i6.otzovik.com/2018/05/21/6494261/img/25662206.jpeg" alt="img" />
            </div>
          </Col>
        </Row>
      </div>
      <FooTer />
    </>
  )
}

export default Web18