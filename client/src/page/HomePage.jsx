import Lists from "../components/featured/Lists"
import FeaturePlaces from "../components/featured/FeaturePlaces"
import FeatureforNextTrip from "../components/featured/FeatureforNextTrip"
import RegisterFeature from "../components/featured/RegisterFeature"
import {exploreEgypt,comunity,homeLoved,browseByProp} from '../dumyData'
export default function HomePage(){
  
  return(
    <div className="pt-10">
      <Lists title="Explore Egypt" data={exploreEgypt}/>
      <Lists title="Browse by property type" data={browseByProp}/>
         <FeaturePlaces/>
         <FeatureforNextTrip/>
      <Lists title="Home gustes loved" data={homeLoved}/>
      <Lists title="Connect with other traveller" data={comunity}/>
      <RegisterFeature/>
    </div>
    )
}