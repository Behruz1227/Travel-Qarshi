import { useState, useEffect } from "react";
import "./style.css";
import { Container } from "reactstrap";
import axios from "axios";
import { apiTravel } from "../api/api";
import language from "./long/longHotel.json";
import { Link } from "react-router-dom";
import FooTer from "../footer/FooTer";

function Page8() {

    const [natures, setNatures] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        getNature();
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.long8 : lang === 'EN' ? language.en.long8 : language.ru.long8)
    }, []);

    // getNature
    async function getNature() {
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
        setNatures(list)
      }

    const goPage = (id) => id !== "" ? document.getElementById(id).click() : "";

    return (
        <div className="page8_main">
            <div className="page8_blur-bg">
                <Container>
                    <h1 data-aos="fade-down" data-aos-duration="1500">{lang.name}</h1>
                    {natures.length && natures.map((item, i) =>
                        <div className="col-9 page8_sohil" onClick={() => goPage(item.id)} key={i}>
                            <div data-aos="fade-right" data-aos-duration="1500">
                                <img className="img-fluid" src={item.image} alt="img" />
                            </div>
                            <h1 data-aos="fade-left" data-aos-duration="1500">{item.title}</h1>
                            <p data-aos="fade-left" data-aos-duration="1500">{item.description}</p>
                            {item.booking_link
                                ? <Link to={item.booking_link} id={item.id} target="_blank"></Link>
                                : <Link to={item.booking_link} id={item.id}></Link>
                            }
                        </div>
                    )}
                </Container>
            </div>
            <FooTer />
        </div>
    );
}

export default Page8;