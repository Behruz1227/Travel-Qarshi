import React, { useEffect, useState } from 'react'
import "./style.css"
import { Col, Container, Row } from 'reactstrap'
import axios from 'axios';
import { apiTravel } from '../api/api';
import language from "./long/longHotel.json";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import FooTer from '../footer/FooTer';

function Web7() {

  const [historical, setHistorical] = useState([]);
  const [lang, setLang] = useState('');

  useEffect(() => {
    getHistoricalPlaces();
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
    let lang = localStorage.getItem('lang');
    setLang(lang === 'UZ' ? language.uz.long7 : lang === 'EN' ? language.en.long7 : language.ru.long7)
  }, []);

  // get historical places
  async function getHistoricalPlaces() {
    let list = [];
    await axios.get(apiTravel + "places/?category=6").then(res => {

      let lang = localStorage.getItem('lang', "UZ");
      if (lang === 'UZ') {
        res.data.results.map(c => {
          c.title = c.title_uz
          c.description = c.description_uz
          list.push(c);
        });
      } else if (lang === 'EN') {
        res.data.results.map(c => {
          c.title = c.title_en
          c.description = c.description_en
          list.push(c);
        });
      } else if (lang === 'RU') {
        res.data.results.map(c => {
          c.title = c.title_ru
          c.description = c.description_ru
          list.push(c);
        });
      }
    });
    setHistorical(list)
  }

  const goHistoricalPage = () => document.getElementById("historical").click();

  return (
    <>
    <div>
      <Link to="info" id='historical'></Link>
      <div className='home-web77-page'>
        <div className="web77-one-home">
          <p className="pt-3" data-aos="fade-down" data-aos-duration="2000">{lang.name}</p>
        </div>
      </div>
      <Container className='mb-5 pb-5'>
        <Row>
          {historical.length && historical.map((item, i) =>
            <Col key={i} onClick={() => {
              goHistoricalPage();
              sessionStorage.setItem("historicalId", item.id);
            }} className='col-12 col-md-6 col-lg-4 mt-5' data-aos="zoom-in" data-aos-duration="1500">
              <div className='page7_imges-card'>
                <div>
                  <img src={item.image} alt="img" />
                </div>
                <h2>{item.title}</h2>
                <Icon icon="teenyicons:arrow-left-solid" className="ms-2" width="50" height="50" rotate={2} vFlip={true} />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
      <FooTer />

              </>
  )
}

export default Web7