import { useState } from "react"
import st from "./ProductGallery.module.scss";

interface IProductCallery{
    images: string[], 
    isDiscount?: boolean
}

export default function ProductGallery({images, isDiscount}: IProductCallery){
    const [activeImg, setActiveImg] = useState(0)
  
  return (
    <div className={st.gallery}>
        <div className={st.smallImg} >
            {images.length>1 && images.map((img, i)=>(
                <button key={i} onClick={()=>setActiveImg(i)}>
                    <img className={st.additional} src={`${process.env.SERVER_UPLOADS}/${img}`} alt="картинка-дополнение" style={{border: i === activeImg ? "1px solid black" : 'none', objectFit:"cover"}}/>
                </button>
            ))}
        </div>
        <div className={st.mainImg}>
            {isDiscount && <p>Акция</p>}
            <img src={`${process.env.SERVER_UPLOADS}/${images[activeImg]}`} alt="главная картинка"  draggable={false}/>
        </div>

    </div>
  )
}

