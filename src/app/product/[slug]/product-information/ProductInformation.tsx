import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import st from "./ProductInformation.module.scss"

interface IProductInformation{
    product?: IProduct
}
 
export default function ProductInformation({product}:IProductInformation){
    if (!product?.description) {
        return <div>Нет информации о товаре</div>
    }
    return (
        <>
            <p className={st.price}>{convertPrice(product.price)} / {product.measure}</p>  
            <div className={st.descr}>
                {
                    product?.description.split("\n").map((item, i)=> <div key={i}>{item}</div>)
                }
            </div>
        </>
    )
}