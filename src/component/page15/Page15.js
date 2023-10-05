import { useEffect, useState } from 'react';
import './page15.scss';
import axios from 'axios';
import { apiTravel } from '../api/api';
import language from "./";
import { Link } from 'react-router-dom';
import Aos from 'aos';

function Page15() {

    const [restuarant, setRestuarant] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        Aos.init();
        getRestuarant();
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'UZ');
        let lang = localStorage.getItem('lang');
        setLang(lang === 'UZ' ? language.uz.long15 : lang === 'EN' ? language.en.long15 : language.ru.long15)
    }, []);

    // getRes
    async function getRestuarant() {
        let list = [];
        await axios.get(apiTravel + "places/?category=5").then(res => {
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
        setRestuarant(list)
    }

    const goPage = (id) => id !== "" ? document.getElementById(id).click() : "";

    return (
        <div className="page15_main">
            <div className="background_img">
                <div className="page15_container">
                    <h1 data-aos="fade-right" data-aos-duration="2000">{lang.name}</h1>
                    {restuarant.length && restuarant.map((item, i) =>
                        <div key={i} onClick={() => goPage(item.id)}>
                            <img src={item.image} alt="image 1" data-aos="fade-right" data-aos-duration="2000" />
                            <h2 data-aos="fade-left" data-aos-duration="2000">{item.title}</h2>
                            <p>{item.description}</p>
                            {item.booking_link
                                ? <Link to={item.booking_link} id={item.id} target="_blank"></Link>
                                : <Link to={item.booking_link} id={item.id}></Link>
                            }

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Page15;