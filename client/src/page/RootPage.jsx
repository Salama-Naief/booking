
import HomePage from "./HomePage";
import {Suspense} from 'react'
import SingleHotelPage from "./SingleHotelPage";
import RegisterPage from "./RegisterPage";
import FooterEmail from "../components/footer/FooterEmail";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Hotel from "./Hotel";
import {useTranslation} from "react-i18next"
import ReservePage from "./ReservePage";
export default function RootPage(){
  const { i18n } = useTranslation("topbar");
  return(
    <Suspense fallback={null}>
      <Router>
      <div className="w-full overflow-hidden " style={i18n.language==="ar"?{direction:"rtl",textAlign:"right"}:{direction:"ltr",textAlign:"left"}}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hotel" element={<Hotel/>}/>
          <Route path="/singlehotel" element={<SingleHotelPage/>}/>
          <Route path="/register" element={<RegisterPage type="register"/>}/>
          <Route path="/login" element={<RegisterPage type="login"/>}/>
          <Route path="/payment" element={<ReservePage/>}/>
        </Routes>
        <FooterEmail/>
      </div>
      </Router>
    </Suspense>
    );
}