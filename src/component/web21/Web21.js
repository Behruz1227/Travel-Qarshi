import "./web21.scss";
import language from "./long/long.json";
import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import FooTer from "../footer/FooTer";


function Web21() {

  const [lang, setLang] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long21 : lang === 'EN' ? language.en.long21 : language.ru.long21)
  }, []);

  return (
    <>
    <div className="web21-top">
      <div className=' web21-color'>
        <h1>{lang.title}</h1>
      </div>
    </div>
    <div className="web21-img container">
      <p>{lang.info}</p>
      <Row className="w-100">
        <Col className='col-12 col-md-6 col-lg-4'>
          <div className='page21_card'>
            <img src="https://thumbs.dreamstime.com/b/abandoned-scenery-planet-tatooine-filming-star-wars-sahara-desert-sakhara-tunisia-may-sand-dunes-background-231563877.jpg" alt="img" />
          </div>
        </Col>
        <Col className='col-12 col-md-6 col-lg-4'>
          <div className='page21_card'>
            <img src="https://thumbs.dreamstime.com/b/abandoned-scenery-planet-tatooine-filming-star-wars-sahara-desert-sakhara-tunisia-may-sand-dunes-background-232187738.jpg" alt="img" />
          </div>
        </Col>
        <Col className='col-12 col-md-6 col-lg-4'>
          <div className='page21_card'>
            <img src="https://c1.wallpaperflare.com/preview/878/117/136/d-day-longues-sur-mer-atlantic-wall-normandy.jpg" alt="img" />
          </div>
        </Col>
        <Col className='col-12 col-md-6 col-lg-4'>
          <div className='page21_card'>
            <img src="https://www.advantour.com/img/uzbekistan/navoi/sardoba-malik.jpg" alt="img" />
          </div>
        </Col>
      </Row>
    </div>
    <FooTer />
  </>
  )
}

export default Web21