import "./web9.scss";
import { Col, Container, Row } from 'reactstrap';
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import { Link } from "react-router-dom";
import language from "./long/long.json";
import { useEffect, useState } from "react";
import FooTer from "../footer/FooTer";


function Web9() {

  const [lang, setLang] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long9 : lang === 'EN' ? language.en.long9 : language.ru.long9)
  }, []);

  const goPage = () => document.getElementById("aroma").click();

  return (
    <div className='home-web9-page'>

      <Link target="_blank" to="https://yandex.uz/maps/org/aroma_bakery_cafe/34152802741/?ll=65.791892%2C38.830392&z=16" id="aroma"></Link>

      <div className="web9-one-home">
        <p className="pt-3" data-aos="fade-down" data-aos-duration="2000">{lang.name}</p>
        <p className="pt-5" data-aos="fade-up" data-aos-duration="2000">{lang.info}</p>
      </div>

      <Container className='p-5'>
        <Row className='w-100'>
          <Col className='col-12 col-lg-6' data-aos="fade-up" data-aos-duration="2000">
            <div className='page9_cafe-main'>
              <div className='page9_cafe'>
                <img src={img1} alt="img" />
              </div>
              <p>{lang.cardInfo}</p>
              <button onClick={goPage}>{lang.btn}</button>
            </div>
          </Col>
          <Col className='col-12 col-lg-6 mt-5 mt-lg-0' data-aos="fade-up" data-aos-duration="2000">
            <div className='page9_cafe-main'>
              <div className='page9_cafe'>
                <img src={img2} alt="img" />
              </div>
              <p>{lang.cardInfo}</p>
              <button onClick={goPage}>{lang.btn}</button>
            </div>
          </Col>
        </Row>
      </Container>
      <FooTer />
    </div>
  )
}

export default Web9