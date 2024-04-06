// import { IProduct } from "@/types/product.interface";
// import { FC, useState } from "react";
// import { Rating } from "react-simple-star-rating";

// interface IProductRating{
//     product: IProduct,
//     isText?: boolean
// }

// const ProductRating: FC<IProductRating> = ({product, isText=false}) =>{
//     const [rating] = useState<number>(
//         Math.round((product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length)) || 0
//       );

//     return (
//         <div className="">
//             {
//                 !!product.reviews.length && (
//                     <span>
//                         <Rating readonly initialValue={rating} SVGstyle={{display:"inline-block"}} size={20} allowFraction transition/>
//                         <span> {rating}</span>
//                     </span>
//                 )
//             }
//             {
//                 isText && (
//                     <span>({product.reviews.length})</span>
//                 )
//             }
//         </div>
//     )
// }
// export default ProductRating