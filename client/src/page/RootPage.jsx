
import HomePage from "./HomePage";
import SingleHotelPage from "./SingleHotelPage";
import FooterEmail from "../components/footer/FooterEmail";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Hotel from "./Hotel";
export default function RootPage(){
  
  return(
    <Router>

    <div className="w-full overflow-hidden">
     
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/singlehotel" element={<SingleHotelPage/>}/>
      </Routes>
      
      <FooterEmail/>
    </div>
    </Router>
    );
}