import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom"

export default function Lists({title,data}){
  
  const settings = {
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return(
    <Link to="hotel">
    <div className="w-auto px-4 md:px-0">
      <div className="pb-6 pt-10 px-4 text-xl md:text-3xl font-bold">{title}</div>
        <Slider {...settings}>
        { data&&data.map((item)=>(
        <div className=" px-1" key={item.id}>
          <div className="rounded-lg overflow-hidden border border-blue-500 ">
          <img src={item.img?item.img:""} className="w-full h-36 object-cover " alt=""/>
          <div className="px-2 py-4">
            <div className="text-lg font-semibold capitalize truncate">{item.name?item.name:""}</div>
            <div className={`${item.price?"block":"hidden"} font-semibold pt-2 capitalize`}>{item.price?item.price :null}</div>
            <div className={`${item.comunity?"block":"hidden"} pt-2 text-gray-500`}>{item.comunity?item.comunity:null}</div>
            <div className="flex items-center justify-between pt-2">
            <div className={`${item.state?"flex":"hidden"} items-center`}>
            {
            item.state&&<>
                <div className="py-0.5 px-1 bg-blue-900 text-white mr-4">{item.rate?item.rate:null}</div>
                <div className="text-gray-500">{item.state?item.state:null}</div>
                </>
            }
            </div>
          <div className="py.-0.5 text-gray-500">{item.nom?item.nom:null}</div>
         </div>
       </div>
       </div>
       </div>
    ))}

      </Slider>
      </div>
      </Link>
    
    )
}