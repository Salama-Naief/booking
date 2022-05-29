import Navbar from "../components/navbar/Navbar";
import HomePage from "./HomePage"
export default function RootPage(){
  
  return(
    <div>
      <Navbar type="home"/>
      <HomePage/>
    </div>
    );
}