import "./web20.scss";
import language from "./long/long.json";
import { useEffect, useState } from "react";
import FooTer from "../footer/FooTer";
import { Col, Row } from "reactstrap";
import NavbarMenu from "../navbar/NavbarMenu";

function Web20() {

  const [lang, setLang] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long20 : lang === 'EN' ? language.en.long20 : language.ru.long20);
  }, []);

  return (
    <>
      <NavbarMenu />
      <div className="web20-top">
        <div className=' web20-color'>
          <h1>{lang.name}</h1>
        </div>
      </div>
      <div className="web20-img container">
        <p>{lang.text}</p>
        <Row className="w-100">
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page20_card'>
              <img src="https://images3.alphacoders.com/108/1089925.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page20_card'>
              <img src="https://ilmlar.uz/wp-content/uploads/2022/11/Abdulazizxon-madrasa.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page20_card'>
              <img src="https://cdn.uzheritage.org/2021/08/09/04/17/ulPUXyVHxCD64fncdfEbaG4SsBVBRlza_low.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page20_card'>
              <img src="https://xs.uz/upload/post/2018/10/04/053c6573f2c6f15f825e8836e99a3ea11004.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page20_card'>
              <img src="https://c4.wallpaperflare.com/wallpaper/619/964/973/uzbekistan-samarkand-gilded-madrasa-madrasah-tillya-kari-wallpaper-preview.jpg" alt="img" />
            </div>
          </Col>
          <Col className='col-12 col-md-6 col-lg-4'>
            <div className='page20_card'>
              <img src="https://cdn.uzheritage.org/2021/05/10/13/20/84xbIkLzAS51sQsvViv90I8wPqfgonmU_normal.jpg" alt="img" />
            </div>
          </Col>
        </Row>
      </div>
      <FooTer />
    </>
  )
}

export default Web20