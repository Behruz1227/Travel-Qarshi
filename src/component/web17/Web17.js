import React, { useEffect, useState } from 'react';
import "./web17.scss";
import language from "./long/long17.json";
import FooTer from "../footer/FooTer";
import { Col, Row } from 'reactstrap';

function Web17() {

  const [lang, setLang] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long17 : lang === 'EN' ? language.en.long17 : language.ru.long17)
  }, []);

  return (
    <div className='w-100'>
      <div className='web17-main'>
        <div className="web17-top">
          {/* <div className='web17-xira'> */}
          <div className='web17-color'>
            <h1>{lang.name}</h1>
          </div>
          {/* </div> */}
        </div>

      </div>
      <div className="web17-img ps-5">
        <Row className='w-100'>
          <Col className='col-12 col-md-6'>
          <p>{lang.text1}</p>
          </Col>
          <Col className='col-12 col-md-6'>
            <div className='saroy-img'>
              <img className='img-fluid saroy-img' src="https://c8.alamy.com/zooms/9/b6ca101e6db44941bda5d07518eeec98/2a7fnat.jpg" alt="" />
            </div>
          </Col>
          <Col className='col-12 col-md-6'>
            <div className='saroy-img'>
              <img className='img-fluid saroy-img' src="https://uzchinaexport.com/en/wp-content/uploads/2020/10/Aksaray1-0-0-0-0-1587717494.jpg" alt="" />
            </div>
          </Col>
          <Col className='col-12 col-md-6'>
          <p>{lang.text2}</p>
          </Col>
          
          
        </Row>
        
      </div>
      <FooTer />
    </div>

  )
}

export default Web17