import React, {useState} from "react"
import "../gallery.css"
import CloseIcon from "@mui/icons-material/Close"

import Img1 from "../Galleria/1.JPG"
import Img2 from "../Galleria/2.JPG"
import Img3 from "../Galleria/3.JPG"
import Img4 from "..//Galleria/4.JPG"
import Img5 from "../Galleria/5.JPG"
import Img6 from "../Galleria/6.JPG"
import Img7 from "../Galleria/7.JPG"


const Gallery = () =>{
    let data = [

        {
           id: 1,
           imgSrc: Img1 
        },
        {
            id: 2,
            imgSrc: Img2 
         },
         {
            id: 3,
            imgSrc: Img3
         },
         {
            id: 4,
            imgSrc: Img4 
         },
         {
            id: 5,
            imgSrc: Img5 
         },
         {
            id: 6,
            imgSrc: Img6 
         },
         {
            id: 7,
            imgSrc: Img7 
         }
        ]
        const [model, setModel] = useState(false);
        const [tempimgSrc,setTempImgSrc]= useState('')
        const getImg =(imgSrc) =>{
            setTempImgSrc(imgSrc);
            setModel(true);
        }

        return(
            <>
            <div className={model? "model open": 'model'}>

              <img src={tempimgSrc}  />
              <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
        {data.map((item, index) =>{
            return(
                <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width:'100%'}} />
                    </div>
            )
        })}
           
        
        </div>
        </>
        )
            
}

export default Gallery;