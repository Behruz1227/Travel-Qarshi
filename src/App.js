import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Page3 from "./component/page_3/Page3";
import Page5 from "./component/page_5/Page5";
import Web7 from './component/web7/Web7';
import Web9 from "./component/web9/Web9";
import Page10 from "./component/page_10/Page10";
import Page11 from "./component/page_11/Page11";
import Web12 from "./component/web12/Web12";
import KarshiCenter from "./component/karshiCenter/KarshiCenter";
import Page14 from "./component/page14/Page14";
import Page16 from "./component/no/Page16";
import Web17 from "./component/web17/Web17";
import Web18 from "./component/web18/Web18";
import Web19 from "./component/web19/Web19";
import Web20 from "./component/web20/Web20";
import Web21 from "./component/web21/Web21";
import Info from "./component/karshiCenter/info/Info";
import InfoRes from "./component/page_3/info/Info";
import InfoResorts from "./component/page14/info/InfoResorts";
import InfoEnPlase from "./component/no/info/InfoEnPlase";
import InfoTarix from "./component/web7/info/InfoTarix";
import InfoNature from "./component/page_5/info/InfoNature";
import HotelAdmin from "./component/admin/mehmonxonalar/HotelAdmin";
import RestuarantAdmin from "./component/admin/restoranlar/Restaurant";
import Ziyorat from "./component/ziyorat/Ziyorat";
import InfoZiyorat from "./component/ziyorat/info/Info";

// import Page2 from "./component/page_2/Page2";
// import Page4 from "./component/page_4/Page4";
// import Page6 from "./component/page_6/Page6";
// import Page8 from "./component/page_8/Page8";

function App() {
    return (
        <>
            <Routes>

                {/* admin panel */}
                <Route path="admin/hotel" element={<HotelAdmin />} />
                <Route path="admin/restoran" element={<RestuarantAdmin />} />

                {/* ishlatilmayotgan pages */}
                {/* <Route path="/page2" element={<Page2 />} /> */}
                {/* <Route path="/palace" element={<Page4 />} /> */}
                {/* <Route path="/congress" element={<Page6 />} /> */}
                {/* <Route path="/nature" element={<Page8 />} /> */}

                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<Page3 />} />
                <Route path="/nature" element={<Page5 />} />
                <Route path="/historical/places" element={<Web7 />} />
                <Route path="/ziyorat" element={<Ziyorat />} />
                <Route path="/Aroma Bakery" element={<Web9 />} />
                <Route path="/Vatanparvarlar bog'i" element={<Page10 />} />
                <Route path="/Oromgoh" element={<Page11 />} />
                <Route path="/Basseyn" element={<Web12 />} />
                <Route path="/hotel" element={<KarshiCenter />} />
                <Route path="/resorts" element={<Page14 />} />
                <Route path="/entertainment/places" element={<Page16 />} />
                <Route path="/Oqsaroy" element={<Web17 />} />
                <Route path="/Xo'ja Jarroh yodgorlik majmuasi" element={<Web18 />} />
                <Route path="/Odina masjidi" element={<Web19 />} />
                <Route path="/abu-ubayda" element={<Web18 />} />
                <Route path="/odina-madrasasi" element={<Web19 />} />
                <Route path="/AbdulazizJo'ja madrasasi" element={<Web20 />} />
                <Route path="/Sardoba" element={<Web21 />} />

                {/* ++++ pages */}
                <Route path="hotel/info" element={<Info />} />
                <Route path="restaurant/info" element={<InfoRes />} />
                <Route path="resorts/info" element={<InfoResorts />} />
                <Route path="entertainment/places/info" element={<InfoEnPlase />} />
                <Route path="historical/places/info" element={<InfoTarix />} />
                <Route path="nature/info" element={<InfoNature />} />
                <Route path="ziyorat/info" element={<InfoZiyorat />} />
            </Routes>
        </>
    )
}


export default App;