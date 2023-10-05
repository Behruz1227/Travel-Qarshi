import "./web19.scss";
import language from "./long/long.json";
import { useEffect, useState } from "react";
import FooTer from "../footer/FooTer";
import { Col, Row } from "reactstrap";

function Web19() {

  const [lang, setLang] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long19 : lang === 'EN' ? language.en.long19 : language.ru.long19);
  }, []);

  return (
    <>
      <div className="web19-top">
        <div className=' web19-color'>
          <h1>{lang.name}</h1>
        </div>
      </div>
      <div className="web19-img container">
        <p>{lang.text}</p>
        <Row className="w-100">
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page19_card'>
              <img src="https://virtualtour.uz/uploads/posts/2021-04/1618550003_karshi9.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page19_card'>
              <img src="https://uzbek-travel.com/images/uz/Landmarks/Karshi/Odina_medrese/odina_3.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page19_card'>
              <img src="https://uzbek-travel.com/images/uz/Landmarks/Karshi/Odina_medrese/0tvrsumf.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page19_card'>
              <img src="https://uzbek-travel.com/images/uz/Landmarks/Karshi/Odina_medrese/xjkwiqbq.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page19_card'>
              <img src="https://avatars.mds.yandex.net/get-altay/4544819/2a0000017944c6f7036c23ba490b28b2fbc3/L_height" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page19_card'>
              <img src="https://virtualtour.uz/uploads/posts/2021-04/1618818173_thdythythty.jpg" alt="img" />
            </div>
          </Col>
        </Row>
      </div>
      <FooTer />
    </>
  )
}

export default Web19;