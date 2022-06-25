import Lists from "../components/featured/Lists"
import FeaturePlaces from "../components/featured/FeaturePlaces"
import FeatureforNextTrip from "../components/featured/FeatureforNextTrip"
import RegisterFeature from "../components/featured/RegisterFeature"
import {exploreEgypt,comunity,homeLoved,browseByProp} from '../dumyData'
import Navbar from "../components/navbar/Navbar";
import {useTranslation} from "react-i18next";

export default function HomePage(){
  const {t} =useTranslation("home");
  return(
    <>
     <Navbar type="home"/>
    <div className="pt-10 container m-auto">
      <Lists title={t("exploreegypt")} data={exploreEgypt}/>
      <Lists title={t("browseproperty")} data={browseByProp}/>
         <FeaturePlaces/>
         <FeatureforNextTrip/>
      <Lists title={t("homegustesloved")} data={homeLoved}/>
      <Lists title={t("connectwithtraveller")} data={comunity}/>
      <RegisterFeature/>
    
    </div>
    </>
    )
}